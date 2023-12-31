const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    watchForFileChanges : false,
    chromeWebSecurity : false,
    pageLoadTimeout: 40000,
    defaultCommandTimeout: 40000,
  },
});
