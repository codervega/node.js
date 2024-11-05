//! Routine :
  // Routine defines how the client requests are handled by the application endpoints
  // Routine in Node refers to the process of determining how an application responds to client request to different endpoints (urls)
  // In a Web application , thse (URLs) endpoints typically corresponds to different pages or functionalities within application 
  // Node.js along with frameworks like Express,proides a way to define routes , Which are responsible for handling spacific HTTP request and sending back appropriate responses.

  //todo : there are two ways to implement routine in Node
  //? Routine without using Express FrameWork
  //? Routine with Express FrameWork


  //Implementation

let http = require("http")
let fs = require("fs")

let server = http.createServer((req,res)=>{
 if(req.url === '/'){
  res.writeHead(200,'ok',{'content-type': 'text/html'})

  let data = fs.createReadStream('p1.html','utf-8')
  data.pipe(res)
 }
 else if(req.url === '/json')
 {
  res.writeHead(200,'ok',{'content-type': 'application/json'})
  let data = fs.createReadStream('./person.json','utf-8')
  data.pipe(res)
 }
 else if(req.url === '/css')
  {
   res.writeHead(200,'ok',{'content-type': 'text/css'})
   let data = fs.createReadStream('cascade.css','utf-8')
   data.pipe(res)
  }
  else if(req.url === '/js')
    {
     res.writeHead(200,'ok',{'content-type': 'text/js'})
     let data = fs.createReadStream('p1.js','utf-8')
     data.pipe(res)
    }
    else if(req.url === '/html')
      {
       res.writeHead(200,'ok',{'content-type': 'text/html'})
       let data = fs.createReadStream('./p1.html','utf-8')
       data.pipe(res)
      }

      else if(req.url === '/about')
        {
         res.writeHead(200,'ok',{'content-type': 'text/html'})
         let data = fs.createReadStream('./p2.html','utf-8')
         data.pipe(res)
        }
 else{
  res.end("Data is Not Found")
 }

})

server.listen(5000,err=>{
  if(err) throw err;
  console.log("server is started")
})