// import file system 
const fs = require('fs');
// import hyper text
const http = require('http');
const contentType = require("./contentType");


let serve = http.createServer((req, res) => {
  if(req.method === "GET" && req.url === "/index.html"){
    fs.readFile("index", "UTF8",(err, data)=>{
      if(err){
        console.log(`서버 연결 실패! : ${err}`)
      }else{
        console.log("서버 작동중");
        res.writeHead(200, contentType);
        res.end(data);
      }
    })
  }else if(req.method === "POST" && req.url === '/index.html'){
    let body = '';
    req.on('data', (chunk) => {
      body += chunk.tostring();

    })


  }
});