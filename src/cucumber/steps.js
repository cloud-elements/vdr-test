const {When, Then} = require('cucumber')
const {expect} = require('chai')
const yaml = require('js-yaml')

const {getConfiguredInstance} = require('../util/loader')

When('I POST to the {string} resource of the {string} element with the following YAML payload', async function (resource, elementKey, docString) {
    const payload = yaml.safeLoad(docString)
    const instance = await getConfiguredInstance(elementKey, resource)
    await instance.createByObjectName(resource, payload)
})

Then('a GET all from the {string} resource of the {string} element should include the following YAML payload', async function (resource, elementKey, docString) {
    const data = await (await getConfiguredInstance(elementKey, resource)).getByObjectName(resource)
    const payload = yaml.safeLoad(docString)
    expect(data).to.deep.include(payload)
})
