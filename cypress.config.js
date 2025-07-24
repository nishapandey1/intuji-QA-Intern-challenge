// cypress.config.js (ESM format)
import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'https://demoqa.com',
    supportFile: 'cypress/support/e2e.js',
    setupNodeEvents(on, config) {
      // Node event listeners go here if needed
    },
  },
});
