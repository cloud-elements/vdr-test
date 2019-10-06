const {generalSDK} = require('../sdks/generalSDK')
const {platformSDK} = require('../sdks/platformSDK')

const fs = require('fs-extra')
const os = require('os')
const {exec} = require('child-process-promise')

const account = require(`${os.homedir()}/.doctor/config.json`).find(account => account.name == process.env.account)
const platform = new platformSDK(account.baseUrl, `User ${account.userSecret}, Organization ${account.orgSecret}`)

let vdrs

const  sdks = {}
const loaded = {}

async function getConfiguredInstance(elementKey, resource) {
    if (process.env.skipSetup) {
        if (Object.keys(sdks).length === 0) {
            const instances = await platform.getElementsInstances('stubby4vdrtest')
            for (let instance of instances) {
                sdks[instance.name] = new generalSDK(
                    account.baseUrl,
                    `User ${account.userSecret}, Organization ${account.orgSecret}, Element ${instance.token}`)
                sdks[instance.name].id = instance.id
            }
        }
    } else {
        // check to see if instance exists and if not, create it
        if (!sdks[elementKey]) {
            const instance = await platform.createInstance({name: elementKey, element: {key: 'stubby4vdrtest'}})
            sdks[elementKey] = new generalSDK(
                account.baseUrl,
                `User ${account.userSecret}, Organization ${account.orgSecret}, Element ${instance.token}`)
            sdks[elementKey].id = instance.id
            console.log(`New test instance for ${elementKey} created`)
        }
        // check to see if resource is a vdr
        if (!vdrs) {
            vdrs = await fs.readdir(`${process.env.testDir}/vdrs/objectDefinitions`)
        }
        if (vdrs.includes(resource)) {
            if (!loaded[resource]) {
                // load vdr using the doctor
                try {
                    process.chdir(process.env.testDir)
                    const result = await exec(`doctor upload vdrs ${account.name} -d vdrs -n ${resource}`)
                    process.chdir(`${__dirname}/../..`)
                    console.log(result.stdout)
                } catch (e) {
                    console.log(e)
                    throw e
                }
                loaded[resource] = []
            }
            if (!loaded[resource].includes(elementKey)) {
                // get transformation and link to sdks[elementKey].id
                const transformation = await platform.getOrganizationsElementsTransformationByObjectName(
                    elementKey,
                    resource)
                await platform.createInstanceTransformationByObjectName2(
                    sdks[elementKey].id,
                    resource,
                    transformation)
                loaded[resource].push(elementKey)
            }
        }
    }
    return sdks[elementKey]
}

function getExistingInstances() {
    return Object.values(sdks)
}

module.exports.getExistingInstances = getExistingInstances
module.exports.getConfiguredInstance = getConfiguredInstance
