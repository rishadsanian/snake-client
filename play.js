//const { log } = require("console");
const { connect } = require("http2");
const client = require("./client.js");

client.connect("165.227.47.243", "50541");

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", (key) => {//handleUserInput
    if (key === "\u0003") {
      process.exit();
    }
    // if (key === "i") {
    //   return connect.write(client.moves.up);
    // }
    // if (key === "k") {
    //   return connect.write(client.moves.down);
    // }
    // if (key === "j") {
    //   return connect.write(client.moves.left);
    // }
    // if (key === "l") {
    //   return connect.write(client.moves.right);
    // }
  });
  return stdin;
};

setupInput;