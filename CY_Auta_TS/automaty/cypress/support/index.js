

// cypress/support/index.js
const { addMatchImageSnapshotPlugin } = require('cypress-image-snapshot');
require('@cypress/xpath');

addMatchImageSnapshotPlugin();