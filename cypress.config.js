const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },

    baseUrl:'https://ebepirus.natech.gr/el/Account/UserLogin',
    specPattern:'cypress/integration/**/*.js',
    defaultCommandTimeout:20000,
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
    openMode: 2

  },
});
