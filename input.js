
const  {keyDict} = require("./constants");
let connection;

//functions to take in data from server and  callback to handle user input
const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);

  return stdin;
};

const handleUserInput = (key) => {
  if (key === "\u0003") {
    process.exit();
  }
  if (keyDict[key]) {
    connection.write(keyDict[key]);
  }
};


module.exports = { setupInput  };

