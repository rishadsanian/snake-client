const net = require("net");

// establishes a connection with the game server
const connect = function(host, port) {
  console.log("Connecting ...");
  const conn = net.createConnection(
    {
      host: host, // IP address here,
      port: port, // PORT number here,
    },
    () => {
      console.log("Connected");
      conn.setEncoding("utf8");
      conn.on("data", (data) => {
        console.log(data);
      });
      conn.write("Name: RSA");
      
      // conn.write(moves.up);
    }
  );

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

const moves = {
  "up": "Move: up", //- move up one square (unless facing down)
  "down": "Move: down", // - //move down one square (unless facing up)
  "left": "Move: left", //- //move left one square (unless facing right)
  "right": "Move: right", //- //move left one square (unless facing left)
};
module.exports = { connect, moves };
