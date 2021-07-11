const http = require("http");
const express = require("express");

const app = express();
const path = require("path");
const hostname = "127.0.0.1";
const port = 3000;

// respond with "hello world" when a GET request is made to the homepage
app.get("/", function (req, res) {
  res.send("hello world");
});
app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
