const {When, Then} = require('cucumber')
const {expect} = require('chai')
const yaml = require('js-yaml')

const context = require('./context')

When('I POST a(n) {string} resource to the {string} element with the following YAML payload', async function (resource, elementKey, docString) {
    const payload = yaml.safeLoad(docString)
    await context[elementKey].createByObjectName(resource, payload)
})

Then('the {string} element should have a(n) {string} resource with the following YAML payload', async function (elementKey, resource, docString) {
        const data = await context[elementKey].getByObjectName(resource)
        const payload = yaml.safeLoad(docString)
        expect(data).to.deep.include(payload)
})
