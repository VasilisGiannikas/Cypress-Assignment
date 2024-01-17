const { defineConfig } = require("cypress");
const fs = require('fs');


module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('task', {
        checkfileexists(filepath) {
          // Check if the file exists
          return fs.existsSync(filepath);
        }
      });
    },

    baseUrl:'https://ebepirus.natech.gr/el/Account/UserLogin',
    specPattern:'cypress/integration/**/*.js',
    waitForAnimations: true,
    defaultCommandTimeout:20000,
    downloadsFolder: "cypress/downloads",
    experimentalRunAllSpecs: false,
    numTestsKeptInMemory:0,
    chromeWebSecurity: false,
    reporter:'mochawesome',
    reporterOptions: {
      embeddedScreenshots : true,
      reportDir: 'cypress/results',
      overwrite: false,
      html: false,
      json: true,
      reportFileName: 'Report',
    },
    video:false,
    projectId: "Cypress-Assignment"
  },
  retries: {
    runMode: 2,
    openMode: 0

  },
});
