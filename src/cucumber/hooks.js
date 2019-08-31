const {BeforeAll, Before, setDefaultTimeout} = require('cucumber')

const context = require('./context')
const {generalSDK} = require('../sdks/generalSDK')
const {platformSDK} = require('../sdks/platformSDK')

const fs = require('fs-extra')
const os = require('os')

setDefaultTimeout(60 * 1000);

const account = require(`${os.homedir()}/.doctor/config.json`).find(account => account.name == process.env.account)
const platform = new platformSDK(account.baseUrl, `User ${account.userSecret}, Organization ${account.orgSecret}`)

BeforeAll(async function () {
  if (process.env.skipSetup == 'true') {
    // reuse existing instances
    const instances = await platform.getElementsInstances('stubby4vdrtest')
    for (let instance of instances) {
      context[instance.name] = new generalSDK(
          account.baseUrl,
          `User ${account.userSecret}, Organization ${account.orgSecret}, Element ${instance.token}`)
      context[instance.name].id = instance.id
    }
  } else {
    // upsert latest stubby for vdr testing
    try {
      const stubby = await platform.get('/elements/stubby4vdrtest')
      await platform.replaceElementByKeyOrId(stubby.id, require('../stubby'))
      console.log('Test element updated')
    } catch (e) {
      if (e.status == 404) {
        const stubby = require('../stubby')
        await platform.createElement(stubby)
        console.log('Test element uploaded')
      }
      else {
        throw e
      }
    }

    // delete all previously created instances
    try {
      const instances = await platform.getElementsInstances('stubby4vdrtest')
      for (let instance of instances) {
        await platform.deleteInstanceById(instance.id)
      }
      console.log('Old test instances deleted')
    } catch (e) {
      if (e.status != 404) {
        throw e
      }
    }

    // create unique instances of stubby for eqach transformation element key
    const elements = await fs.readdir(`${process.env.testDir}/vdrs/transformations`)
    for (let element of elements) {
      const instance = await platform.createInstance({name: element, element: {key: 'stubby4vdrtest'}})
      context[element] = new generalSDK(
          account.baseUrl,
          `User ${account.userSecret}, Organization ${account.orgSecret}, Element ${instance.token}`)
      context[element].id = instance.id
      // create all transformations as instance level on the stubby instance
      const transformations = await platform.getOrganizationsElementsTransformations(element)
      for (let name of Object.keys(transformations)) {
        await platform.createInstanceTransformationByObjectName2(instance.id, name, transformations[name])
      }
    }
    console.log('New test instances created')
  }
})

Before(async function () {
  const instances = Object.values(context)
  for (let instance of instances) {
    await platform.updateInstanceById(instance.id, {configuration: {store: '{}'}})
  }
})