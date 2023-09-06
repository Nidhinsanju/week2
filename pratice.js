// function higerOrder(a) {
//   var d = "hello " + a;
//   return d;
// }

// function callBackfn() {
//   var b = "world";
//   return b;
// }

// var output = higerOrder(callBackfn());
// console.log(output);

//2nd question

// function daytime() {
//   const date = new Date();
//   var day = date.getDate();
//   return day;
// }

// function higerOrderAsync(callBackfn) {
//   setTimeout(callBackfn, daytime() * 1000);
//   console.log("hello");
// }

// function callBackfn() {
//   console.log("world");
// }

// higerOrderAsync(callBackfn);

// function mapArray(arr, callback1) {
//   var mapedArray = arr.map((arr) => {
//     return callback1(arr);
//   });
//   return mapedArray;
// }
// function callback1(arr1) {
//   return arr1 * 3;
// }

// arr = [1, 2, 3, 4, 5];
// var result = mapArray(arr, callback1);
// console.log(result);

// function filter(arr, callBackfn) {
//   var filteredArray = arr.filter((element) => {
//     return callBackfn(element);
//   });

//   return filteredArray;
// }

// function callBackfn(num) {                               kkkkkk
//   return num > 2;
// }

// var arr = [1, 2, 3, 4, 5];
// var filteredResult = filter(arr, callBackfn);

// console.log(filteredResult);

const fs = require("fs");
function readFileCallBack(fname, callBackfn) {
  fs.readFile(fname, "utf8", callBackfn);
}

function hello1(err, data) {
  if (err) {
    console.log("error", err);
  } else {
    console.log(data);
  }
}

var filename = "readFile.txt";
readFileCallBack(filename, hello1);
