// import file system 
const fs = require('fs');
// import hyper text
const http = require('http');
const queryString = require('querystring');
const contentType = require('./module/contentType');

let main = "./index.html"
let sub = "./info.html"
let style = "./style.css"


// createServer 
let server = http.createServer((req,res)=> {
  //http 모둘에서 createServer 모듈 사용
  if(req.method === 'GET' && req.url === '/'){

    //index.html
    fs.readFile(main, 'utf8', (err, data)=> {
      if(err) {
        console.log(err);
      } else {
        res.writeHead(200, contentType);
        res.end(data);
      };
    });  

    //style.css
    fs.readFile(style, 'utf8', (err, data)=> {
      if(err) {
        console.log(err);
      } else {
        res.writeHead(200, contentType);
        res.end(data);
      };
    }); 

    

  } else if (req.method=== 'POST' && req.url === "/info.html"){
    console.log("POST 통신 완료")
    let body ='';
    req.on('data', (chunk) =>{
      body += chunk.toString();
    })

    req.on('end', () => {
      const parsedBody = queryString.parse(body);
      const {username, password ,email} = parsedBody;

      // check 
      console.log(`form 입력으로부터 받은 데이터 확인 ->`, parsedBody);
      console.log(`for :`, email)
    })
    fs.readFile(sub, 'utf8', (err, data)=> {
      if(err) {
        console.log(err);
      } else {
        
        res.writeHead(200, contentType)
        res.end(data)
      }
    })
  }
});

let port = 1004
server.listen(port, () => {
  console.log(`http://localhost:${port}`);
})