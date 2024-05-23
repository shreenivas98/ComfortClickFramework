const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "rfnr3e",
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    specPattern: 'cypress/integration/examples/*.js'
  },
  viewportHeight: 900,
    viewportWidth: 1280,
});
