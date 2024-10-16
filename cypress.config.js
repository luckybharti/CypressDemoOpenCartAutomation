const { defineConfig } = require("cypress");

module.exports = defineConfig({
  
  
   e2e: {
    baseUrl: "https://naveenautomationlabs.com/opencart/index.php",
    testIsolation: false,
    trashAssetsBeforeRuns: true,
    experimentalRunAllSpecs: true,
    watchForFileChanges: true,
    video:false,
    specPattern:[
      "cypress/e2e/testPages/01_LoginTest.cy.js","cypress/e2e/testPages/02_AddItem.cy.js"
       ],
       setupNodeEvents(on, config) {
      // implement node event listeners here
   
    },
  },
});
