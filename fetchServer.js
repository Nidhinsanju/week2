const express = require("express");
var bodyParser = require("body-parser");
const app = express();
const port = 3000;

function sum(n) {
  var value = 0;
  for (var i = 1; i <= n; i++) {
    value += i;
  }
  return value;
}

function handleFunction(req, res) {
  var input = req.query.input;
  var output = sum(input);
  var answer = "the sum is " + output;
  const obj2 = {
    output: answer,
  };
  res.send(obj2);
}
app.get("/handlesum", handleFunction);

function started() {
  console.log(`Example app listening on port ${port}`);
}

app.listen(port, started);
