const net = require("net");
const { IP, PORT, snakeName } = require("./constants");
// establishes a connection with the game server
const connect = function() {
  console.log("Connecting ...");
  const conn = net.createConnection(
    {
      host: IP,
      port: PORT,
    },
    () => {
      console.log("Connected");//Message on connect
      conn.setEncoding("utf8");
      conn.on("data", (data) => {//ready to take data from server
        console.log(data);
      });
      conn.write("Name: " + snakeName);//displays name

      
    }
  );

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

module.exports = { connect };
