const { connect } = require("./client");
const { setupInput } = require("./input");

//connects to server with default settings
setupInput(connect());