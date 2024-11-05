let http = require("http")
let fs = require("fs")

let server = http.createServer((req,res)=>{
 if(req.url === '/'){
  res.writeHead(200,'ok',{'content-type': 'text/html'})

  let data = fs.createReadStream('p1.html','utf-8')
  data.pipe(res)
 }
 else if(req.url === '/person2')
 {
  res.writeHead(200,'ok',{'content-type': 'text/html'})
  let data = fs.createReadStream('./p2.html','utf-8')
  data.pipe(res)
 }
 else if(req.url === '/person3')
  {
   res.writeHead(200,'ok',{'content-type': 'text/html'})
   let data = fs.createReadStream('p3.html','utf-8')
   data.pipe(res)
  }
  else if(req.url === '/person4')
    {
     res.writeHead(200,'ok',{'content-type': 'text/js'})
     let data = fs.createReadStream('p4.html','utf-8')
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