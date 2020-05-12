//we need http because we dont have express
const http = require("http");

//need socketio, since its 3rd party
const socketio = require("socket.io");

//made http server with node
const server = http.createServer((req, res) => {
  res.end("I am Connected!");
});

//piggybacking onto our http server
const io = socketio(server);

io.on("connection", (socket, req) => {
  //ws.send becomes socket.emit
  socket.emit('welcome', "Welcome to the websocket server!");
  //no change here
  socket.on("message", (msg) => {
    console.log(msg);
  });
});

//listen to http server on port 8000
server.listen(8000);
