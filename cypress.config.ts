const { defineConfig } = require("cypress");
const dotenvPlugin = require("cypress-dotenv");
import { readPdf } from "cypress/scripts/readPdf";

module.exports = defineConfig({
  projectId: "",
  screenShotOnRunFailure: false,
  video: false,
  chromeWebSecurity: false,
  viewportWidth: 1366,
  viewportHeight: 768,
  screenshotsFolder: "cypress/results/mochawesome-report/assets",
  reporter: "mochawesome",
  reporterOptions: {
    screenShotOnRunFailure: true,
    useInlineDiffs: true,
    embeddedScreenshots: true,
    reportDir: "cypress/results",
    overwrite: false,
    html: false,
    json: true,
  },

  e2e: {
    testIsolation: false,
    setupNodeEvents(
      on: Cypress.PluginEvents,
      config: Cypress.PluginConfigOptions
    ) {
      on("task", {
        readPdf,
      });
      const dotEnvConfig = dotenvPlugin(config);
      return dotEnvConfig;
    },
    baseUrl: "https://www.demoblaze.com/",
    specPattern: "cypress/e2e/*",
    trashAssetsBeforeRuns: false,
  },
});
