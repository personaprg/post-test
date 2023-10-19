// import file system 
const fs = require('fs');
// import hyper text
const http = require('http');
const contentType = require("./contentType.js");


let serve = http.createServer((req, res) => {
  if(req.method === "GET" && req.url === "/index.html"){


  }
});