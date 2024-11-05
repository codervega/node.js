//! Http : Hyper text transfer protocol
    // todo : it is a protocol & it is used to transfer between client and Server

//! Methods of http 
    // todo : get, put , post, delete

//todo : get Method:
 // ? It is used to fetch the data from the Source

 //todo : Post Method
  // ? : It Is used to sending data / creating New Source

// todo : put Method
  //? : It is Used to Modify the Stored data

// todo : delete Method
  //? : It is used to delete the resource 

////=====================================================================================

//! HTTP response status code 
//* 100-199 :Information Response
//* 200-299 : Successful Response
//* 300-399 : redirection response
//* 400-499 : Client error Response
//* 500-599 : Server error Response

////===========================================================================================
//? STEP-1
// let http = require("http")
// console.log(http);

//? STEP-2 // server created
// let server = http.createServer((req,res)=>{
//   res.writeHead(200,'ok',{'content-type' :'text/plain'})

  //todo : end msz to the Cycle
//   res.end("this is message from back-end"); //? Output will display in Browser
// })

//? STEP-3
// server.listen(5000,(err)=>{
//   if(err) throw err;
//   console.log("Server is Started with Post 5000");  // ? Output will display in terminal
// })

/*
todo : In cmd / terminal : node filename.js
todo : In Browser url : to run(localhost : 5000)
*/
////============================================================================================
//! Example-1 reading html file
//todo : create the server
//todo : read the data from html file
//todo : read file data using fs module with sync cb function

// let http = require("http");
// let fs = require("fs")

// let server = http.createServer((req,res)=>{
//   fs.readFile('p1.html','utf-8',(err,data)=>{
//     if(err){
//       throw err
//     }
//     else{
//       res.writeHead(200,'ok',{'content-type':'text/html'})
//       res.end(data);

//     }
//   })
// })
// server.listen(5000,err=>{
//   if(err){
//     throw err
//   }
//   else{
//     console.log("Server is Started At 5000 port");
//   }
// })
////================================================================================
//!example-2
// let server = http.createServer((req,res)=>{
//   fs.readFile('person.json','utf-8',(err,data)=>{
//     if(err){
//       throw err
//     }
//     else{
//       res.writeHead(200,'ok',{'content-type':'application/json'})
//       res.end(data);

//     }
//   })
// })
// server.listen(5000,err=>{
//   if(err){
//     throw err
//   }
//   else{
//     console.log("Server is Started At 5000 port");
//   }
// })
////============================================================================

//! Example-1 reading html file
//todo : create the server
//todo : read the data from html file
//todo : read file data using fs module with stream

let http = require("http")
let fs = require("fs")

let server = http.createServer((req,res)=>{
  res.writeHead(200,'ok',{'content-type':'text/html'})
  let data = fs.createReadStream("p1.html",'utf-8')
  data.pipe(res)
})
server.listen(5000,err => {
  if(err) throw err;
  else
  {
    console.log("Server is Stared at 5000 server")
  }
})