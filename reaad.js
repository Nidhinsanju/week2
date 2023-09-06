const fs = require("fs");

function callbackFn(err, data) {
  if (data) {
    console.log(data);
  } else {
    console.log("error", err);
  }
}
fs.readFile("a.txt", "utf-8", callbackFn);
