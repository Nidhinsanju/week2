function logresponse(jsonBody) {
  console.log(jsonBody);
}

function callBackfn(result) {
  var fullfilled = result.json();
  fullfilled.then(logresponse);
}

var sendobj = {
  method: "GET",
};

if (
  fetch("http://localhost:3000/handlesum?input=7", sendobj).then(callBackfn)
) {
  console.log("success");
} else {
  console.log("failed");
}
