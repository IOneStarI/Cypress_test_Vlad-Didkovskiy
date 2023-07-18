const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
    },
    baseUrl: 'https://www.saucedemo.com/',
    viewportHeight: 1200,
    viewportWidth: 1320,
  },
});
