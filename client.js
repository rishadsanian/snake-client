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
    }
  );

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

module.exports = {connect};
