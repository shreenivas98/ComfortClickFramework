const { defineConfig } = require("cypress");

module.exports = defineConfig({

  "defaultCommandTimeout": 10000, // Set default command timeout to 10 seconds
  "pageLoadTimeout": 60000,       // Set page load timeout to 60 seconds
  "requestTimeout": 5000,         // Set request timeout to 5 seconds
  "responseTimeout": 30000  ,
   
  projectId: "rfnr3e",
  //projectId: "km33sz",
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
    specPattern: 'cypress/integration/CCAutomationFramework/WeightWorld/Script/*.js'
    //specPattern: 'cypress/integration/examples/*.js'
    //specPattern: 'cypress/integration/CCAutomationFramework/WeightWorld/Script/SiteDownCheckTest.js'
  },
  viewportHeight: 900,
    viewportWidth: 1280,
});
