const express = require("express");
var bodyParser = require("body-parser");
const app = express();
const port = 4000;

function middleware1(req, res, next) {
  console.log("hi there im middle ware " + req.headers.input);
  next();
}
app.use(middleware1);

app.use(bodyParser.json());

function sum(n) {
  var value = 0;
  for (var i = 1; i <= n; i++) {
    value += i;
  }
  return value;
}

function mult(n) {
  var output = 1;
  for (var i = 1; i <= n; i++) {
    output *= i;
  }
  return output;
}

function handlefirstrequest(req, res) {
  var first = req.body.input;
  var calculatedSum = sum(first);
  var calculatedMult = mult(first);

  //This is how we can get response from the server as a simple text
  res.send(
    "mult of this is " + calculatedMult + " sum of this is " + calculatedSum
  );

  //This is how we can get response from the server as a JSON
  var anserObject = {
    resultSum: calculatedSum,
    resultMult: calculatedMult,
  };
  res.send(anserObject);
}

app.post("/firstrequest", handlefirstrequest);

function greet(req, res) {
  var greetings = "hello there";
  res.send(greetings);
}
app.get("/", greet);

function handleFunction(req, res) {
  var input = req.body.input;
  if (input <= 10000) {
    var output = sum(input);
    var anwser = "the sum  is " + output;
    res.send(anwser);
  } else {
    res.status(411).send("error");
  }
}
app.get("/handlesum", handleFunction);

function givePage(req, res) {
  //__dirname gives the current dictory of the file
  //
  res.sendFile(__dirname + "/index.html");
}
app.get("/givePage", givePage);

function handleNewUser(req, res) {
  var post = "new user created";
  res.send(post);
}
app.post("/handlePostman", handleNewUser);

function started() {
  console.log(`Example app listening on port ${port}`);
}

app.listen(port, started);
