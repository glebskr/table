const express = require("express");
const path = require("path");

const app = express();

app.listen(3000);

app.use(express.static(__dirname + "./../public"));

app.use("/", function(request, response) {
  response.sendFile(path.resolve(__dirname, "/../public/index.html"));
});
