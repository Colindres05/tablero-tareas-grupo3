const { defineConfig } = require("cypress");
module.exports = defineConfig({
  video: true,
  screenshotsFolder: "cypress/screenshots",
  e2e: { baseUrl: "http://localhost:3000", setupNodeEvents(on, config) {} },
  reporter: "mochawesome",
  reporterOptions: { reportDir: "cypress/reports", overwrite: false, html: true, json: true }
});
