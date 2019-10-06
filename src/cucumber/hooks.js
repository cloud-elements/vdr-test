const {BeforeAll, Before, setDefaultTimeout} = require('cucumber')

const {platformSDK} = require('../sdks/platformSDK')
const {getExistingInstances} = require('../util/loader')

const os = require('os')

setDefaultTimeout(100 * 1000);

const account = require(`${os.homedir()}/.doctor/config.json`).find(account => account.name == process.env.account)
const platform = new platformSDK(account.baseUrl, `User ${account.userSecret}, Organization ${account.orgSecret}`)

BeforeAll(async function () {
  if (process.env.skipSetup !== 'true') {
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
  }
})

Before(async function () {
  for (let instance of getExistingInstances()) {
    await platform.updateInstanceById(instance.id, {configuration: {store: '{}'}})
  }
})