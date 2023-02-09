const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'mvv87w',

  "reporter": "mochawesome",

  "reporterOptions":{
                       "chats":true,
             "overwrite":false,
             "html":false,
             "json":true,
             "reportDir": "cypress/reports"
             
            },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here


      


    },
  },
});
