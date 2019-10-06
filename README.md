# Cloud Elements VDR testing tool

[![NPM Version](http://img.shields.io/npm/v/vdr-test.svg)]()
[![NPM Downloads](https://img.shields.io/npm/dt/vdr-test.svg)]()

This is a [Node.js](https://nodejs.org/en/) based CLI tool for doing [BDD](https://cucumber.io/docs/bdd/overview/) testing of [Cloud Elements](https://cloud-elements.com) [Virtual Data Resources](https://docs.cloud-elements.com/home/common-resources-overview) (AKA VDRs) using [Cucumber](https://www.npmjs.com/package/cucumber).

## Installation

First, if you haven't already, install [Node.js](https://nodejs.org/en/download/).

You should install this package globally:
```bash
npm install -g vdr-test
```

You will also need to install [The Doctor](https://www.npmjs.com/package/ce-util).

## What it does

```bash
Usage: vdr-test [options] <account> [<GLOB|DIR|FILE[:LINE]>]

CLI tool used for testing Cloud Elements VDRs using Cucumber

Options:
  -V, --version     output the version number
  -s, --skip-setup  run the tests against the current setup
  -h, --help        output usage information
```

The only required parameter is `account`.  This represents a login on Cloud Elements as registered in
The Doctor. 

You may also optionally specify the tests to run.  These can be provided in a number of ways:
* As a glob pattern
  * `tests/**/*.feature`
* As a directory
  * `tests/dir`
* As a file
  * `tests/my_feature.feature`
* As a scenario by its line number in a file
  * `tests/my_feature.feature:3`

If no tests are given, then it will run all of the tests in the `tests` directory.

By default, when you run `vdr-test`, it will:
1. Upsert a fresh copy of a mock element used for testing (called `Stubby`)
2. Delete any instances of the mock element from prior tests
3. Create an instance of the mock element for each element that you've referenced in any of the tests being run 
4. Upload any of your VDRs (which must be placed in a directory called `vdrs` in the doctor's `directory`
storage format) which are referenced in the tests being run
5. Associate any transformations referenced to the mock instance
6. Execute all of the cucumber tests specified (or all of the tests in `tests` if none given)

By running all of this `vdr-test` ensures that the latest versions of your VDRs stored on your computer are tested.

However, steps 1-5 can take a long time.  In order to speed up tests, you can
provide the `--skip-setup` (or `-s`) option, which will skip steps 1-5 and just execute the tests. This is particularly
useful when writing new tests.

## Writing tests

Tests are written in the Cucumber test language known as [gherkin](https://cucumber.io/docs/gherkin/reference/).
An example is shown below:
```gherkin
Feature: Support retrieval of SAP B1 information to allow a user to configure location, price list, and tax mappings

  Scenario: Basic ErpPriceList test
    When I POST to the "pricelist" resource of the "sapbusinessone" element with the following YAML payload
      """
      PriceListNo: "1"
      PriceListName: Base Price
      Active: tYES
      """
    Then a GET all from the "ErpPriceList" resource of the "sapbusinessone" element should include the following YAML payload
      """
      id: "1"
      name: Base Price
      active: true
      """
```

These are currently the only available step definitions.  The first parameter (in quotes) is a valid object name
and the second one is a valid element key.  The text between the `"""` is the payload expressed as [YAML](http://sweetohm.net/article/introduction-yaml.en.html).

