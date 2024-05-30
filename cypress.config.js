const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "rfnr3e",
  reporter: 'cypress-mochawesome-reporter',

  env: {
    WeightWorldUk:"https://www.weightworld.uk/",
    ShyToBuyUk:"https://www.shytobuy.uk/",
    AnimigoUk:"https://www.animigo.co.uk/"
  },

  

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    specPattern: 'cypress/integration/CCAutomationFramework/*/*/*.js'
    //specPattern: 'cypress/integration/examples/*.js'
    //specPattern: 'cypress/integration/CCAutomationFramework/WeightWorld/Script/SiteDownCheckTest.js'
  },
  viewportHeight: 900,
    viewportWidth: 1280,
});
