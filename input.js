

let connection;

//functions to take in  and handle user input
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

  if (moves[key]) {
    connection.write(moves[key]);
  }
};
const moves = {
  w: "Move: up",
  a: "Move: left",
  s: "Move: down",
  d: "Move: right",
};


module.exports = { setupInput  };

