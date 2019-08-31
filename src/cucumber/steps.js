const {When, Then} = require('cucumber')
const {expect} = require('chai')
const yaml = require('js-yaml')

const context = require('./context')

When('I POST to the {string} resource of the {string} element with the following YAML payload', async function (resource, elementKey, docString) {
    const payload = yaml.safeLoad(docString)
    await context[elementKey].createByObjectName(resource, payload)
})

Then('a GET all from the {string} resource of the {string} element should include the following YAML payload', async function (resource, elementKey, docString) {
    const data = await context[elementKey].getByObjectName(resource)
    const payload = yaml.safeLoad(docString)
    expect(data).to.deep.include(payload)
})
