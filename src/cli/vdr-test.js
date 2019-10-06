#!/usr/bin/env node
'use strict';
const commander = require('commander');
const {spawn} = require('child_process');

const pkg = require('../../package.json')

commander
    .version(pkg.version)
    .description(pkg.description)
    .arguments('<account>')
    .option('-s, --skip-setup', 'run the tests against the current setup')
    .parse(process.argv);

if (commander.args.length == 0) {
    commander.outputHelp()
    return
}

const account = commander.args[0]
const testDir = process.cwd()

process.env.account = account
process.env.testDir = testDir
if (commander.skipSetup) {
    process.env.skipSetup = 'true'
}
process.chdir(`${__dirname}/../..`)
spawn('node_modules/cucumber/bin/cucumber-js', [ '--require', 'src/cucumber/', `${testDir}/tests/`], {stdio: "inherit"})
