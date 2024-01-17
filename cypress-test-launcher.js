let json = require('./cypress/suites/suites.json');
let argv = require('minimist')(process.argv.slice(2));
let files;
let exec = require('child_process').execSync;

// Default to regression suite
if (typeof argv.suite === "undefined") {
    argv.suite = "Regression"
}

if (argv.env === "prod" || argv.env === "dr") {
    if (argv.suite !== "Monitoring")
        throw new Error(`You can only run Monitoring in prod/dr`);
}

for (let i = 0; i < json.suites.length; i++) {
    if (argv.suite === json.suites[i].name) {
        files = json.suites[i].specList;
    }
}
var split = files.split(",");
var browser = argv.browser;
var error;
if (typeof files === "undefined") {
    throw new Error(`Suite name provided is not matching any suite, please update the file suite/suites.json`);
}

console.log("Number of tests: " + split.length);
for (let i = 0; i < split.length; i++) {
    try {
        let child;

        if (argv.browser) {
            child = exec(`${__dirname}/node_modules/.bin/cypress run --config video=false --spec "${split[i]}" --browser ${browser} --headed`, () => {
            }).toString();
        } else {
            child = exec(`${__dirname}/node_modules/.bin/cypress run --config video=false --spec "${split[i]}"`, () => {
            }).toString();
        }
        console.log(child);
    } catch (ex) {
        console.log("Suite " + split[i] + " has failures, please check the detailed report. Error message: " + ex.message);
        error = true;
    }
}
if (error) {
    throw new Error(`Run has failures, please check the detailed report`);
}
//runs with the command node cypress-test-launcher --browser chrome --suite1