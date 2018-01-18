const express = require("express");
const WebSocket = require("ws");
const server = require("http").createServer();
const path = require("path");

const app = express();
app.use(express.static(path.join(__dirname,"/views")));


// We store the number of users as a global variable
let numberOfUsers = 0;
let msgs = {1: [], 2: []};
let messages = [];

const wss = new WebSocket.Server({server});

wss.on("connection", (ws, req) => {
  numberOfUsers += 1;

  wss.clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
      console.log("number of user:" +numberOfUsers);
      client.send(numberOfUsers);
    }
  });

  ws.send(JSON.stringify(messages));

  // When a user quit, we send the information to all users
  ws.on("message", (data) => {
    if (data === "CLOSE") {
      numberOfUsers -= 1;
      wss.clients.forEach((client) => {
        if (client.readyState === WebSocket.OPEN) {
          client.send(numberOfUsers);
        }
      });
    }
    else {
      messages.push(JSON.parse(data));
      let msgChannel1 = messages.filter((msg) => msg.channel === "1");
      let msgChannel2 = messages.filter((msg) => msg.channel === "2");

      msgs = {1: msgChannel1, 2: msgChannel2};
      console.log(JSON.stringify(msgs));
      wss.clients.forEach((client) => {
        if (client.readyState === WebSocket.OPEN) {
          client.send(JSON.stringify(msgs));
        }
      });
    }
  }
  );
});



 // +wss.on("connection", function connection(ws, req) {
 // +  ws.on("message", function incoming(data) {
 // +    const message = JSON.parse(data);
 // +    switch (message.type) {
 // +      case "LOGIN":
 // +        wss.clients.forEach((client) => {
 // +          if (client.readyState === WebSocket.OPEN) {
 // +            client.send(JSON.stringify({ type: "MESSAGES", data: messages}));
 // +          }
 // +        });
 // +        return;
 // +      case "NEW_MESSAGE":
 // +        // Add the message to the list of messages
 // +        messages.push({ userName: message.userName, message: message.message });
 // +
 // +        // Sends all messages to all connected clients
 // +        wss.clients.forEach((client) => {
 // +          if (client.readyState === WebSocket.OPEN) {
 // +            client.send(JSON.stringify({ type: "MESSAGES", data: messages}));
 // +          }
 // +        });
 // +        return;
 // +    }
 // +  });


server.on("request", app);
server.listen(4000, () => console.log("Server listening on port 4000"));
