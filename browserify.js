// Grab existing RiseVision namespace object from window, or create a blank object if it doesn't exist
var RiseVision = window.RiseVision || {};

// Define ModuleExports namespace
RiseVision.ModuleExports = RiseVision.ModuleExports || {};

// Add node modules required
RiseVision.ModuleExports.FeedMe = require("feedme");

// Replace/Create the global namespace
window.RiseVision = RiseVision;
