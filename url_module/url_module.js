//!url : uniform resource locator

/*
    -url is a web address used to locate a resource on the internet
    -It is a String of characters that starts with "https://" or "https://" and is followed

    ? ex1 = http://locathost:3000/home?----
      portocol dominename portnumber path queryparamether
    ? ex2 = https://www/facebook.com.abc
      portocol dominename path
*/

let http = require('http')
let url = require('url')
let fs = require('fs')

let port = 5000;
let server = http.createServer((req,res)=>{
  let obj = url.parse(req.url)
  // console.log(obj.pathname);
  let filepath = `.${obj.pathname}text.txt`
  fs.readFile(filepath,(err,data)=>{
    if(err)
      res.end("file is not found")
    res.end(data)
  })
})
server.listen(port,err=>{
  console.log(`Server is Started with port Number ${port}`);
})

