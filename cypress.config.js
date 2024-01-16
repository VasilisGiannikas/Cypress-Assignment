const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },

    baseUrl:'https://ebepirus.natech.gr/el/Account/UserLogin',
    specPattern:'cypress/integration/**/*.js',
    waitForAnimations: true,
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
    runMode: 0,
    openMode: 0

  },
});
