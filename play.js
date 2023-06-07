const { log } = require("console");
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
    }
  );

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};


const client = connect("165.227.47.243", "50541");

client.setEncoding('utf8');
client.on('data', data => {
  console.log(data);
});

