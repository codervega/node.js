//!async file System

let fs = require("fs") //? importing fs module

////----------------------------------------------------------------------------

// ! write / Create the File using Asyncronous callback
//todo : WriteFile() : This Methid is used create newfile & then add data to the file
//? syntax :fs.writeFile("file path","add data",cd)

// fs.writeFile("text.txt","javascript",(err)=>{
//   if(err)throw err;
//   console.log("file is created & data is added");
// })
////----------------------------------------------------------------------------

// //!adding extra data to the same file /new file
// //todo : appendFile() : this methdod is used to add datra to the existing file.
// //? syntax :fs.appendFile("file path","add data",cb)
// fs.appendFile("text.txt",`
// I Love Dubai`,(err)=>{
//     if(err)throw err;
//     console.log("data is added")
//   })
////----------------------------------------------------------------------------

//   //! Read the file using Asynchronous callback

//   fs.readFile("text.txt","utf-8",(err,data)=>{
//     if(err) throw err;
//     fs.writeFile("Middle_East.txt",data,(err)=>{
//       if(err) throw err;
//       fs.appendFile("Middle_East.txt",`
// welcome to riyad`,(err)=>{
//         if(err) throw err;
//         console.log("extra data is added");
//       })

//     })
//   })
////----------------------------------------------------------------------------

  //! deleting file using Asynchronous callback
  //todo : unlink() : this method is used to delete the file
  // ? syntax :fs.unlink("file path",cb)
  // fs.unlink("text.txt",err => {
  //   if(err) throw err;
  //   console.log("file is delelted");
  // })
  // fs.mkdir("newfolder",(err)=>{
  //   if(err) throw err;
  //   console.log("folder is craeted");
  // })
  ////----------------------------------------------------------------------------

  //todo : to craete a nested Folder

  // fs.mkdir("newfolder/nested",(err)=>{
  //   if(err) throw err;
  //   console.log(" Nested folder is craeted");
  // })
  ////----------------------------------------------------------------------------

  //! delete folder using Asynchronous callback
  //todo :rmdir() : this method is used to delete the folder
  // ? Syntax :fs.rmdir("folder path",cb)

  // fs.rmdir("newFolder/nested",err =>{
  //   if(err) throw err;
  //   console.log("folder is deleted");
  // })

  ////----------------------------------------------------------------------------

  //! rename the folder using Asynchronous callback
  // fs.rename("newfolder","newFolder",err => {
  //   if(err) throw err;
  //   console.log("folder is renamed");
  // })

  ////----------------------------------------------------------------------------

  // fs.mkdir("javascript" , err =>{
  //   if(err) throw err;
  //   console.log("created")
  // });
  // fs.mkdir("javascript/FE" , err =>{
  //     if(err) throw err;
  //     console.log("created")
  //   });
  //   fs.mkdir("javascript/BE" , err =>{
  //     if(err) throw err;
  //     console.log("created")
  //   });

  // fs.writeFile("javascript/FE/front-end.txt",`
  //   html
  //   css
  //   javascript
  //   taiwind
  //   react`,(err)=>{
  //     if(err) throw err;
  //     console.log("file is created");
  //   })

  //   fs.writeFile("javascript/BE/back-end.txt",`
  //     Node.JS
  //     EXPRESS.JS
  //     MONGODB
  //     REDUX
  //     PYTHON`,(err)=>{
  //       if(err) throw err;
  //       console.log("file is created");
  //     })
  
//   fs.readFile("javascript/FE/front-end.txt","utf-8",(err,data)=>{
//     if(err) throw err;
//     fs.mkdir("javascript/App" , err =>{
//           if(err) throw err;
//           console.log("created")
//         });
//         fs.writeFile("javascript/App.txt",data,(err)=>{
//                 if(err) throw err;
//                 console.log("file is created");
//               })
//               fs.readFile("javascript/BE/back-end.txt","utf-8",(err,data1)=>{
//                 if(err) throw err;
//                 fs.appendFile("javascript/App.txt",data1,err=>{
//                   if(err) throw err;
//                   console.log("done...");
// })
//   })

// fs.unlink("javascript/FE/front-end.txt",err =>{
//   if(err) throw err;
  // console.log("File Front-end Deleted");
  // fs.unlink("javascript/BE/back-end.txt",err =>{
    // if(err) throw err;
    // console.log("File back-end Deleted");
    // fs.rmdir('javascript/BE',err =>{
      // if(err) throw err;
      // console.log("folder is deleted");
    
// })
// })

// })
////----------------------------------------------------------------------------

// fs.rmdir('javascript/FE',err =>{
//   if(err) throw err;
//   console.log("folder is deleted");

// })
////----------------------------------------------------------------------------

// fs.readFile("javascript/App.txt","utf-8",(data,err)=>{
//   if(err) throw err;
//   console.log("......");
//   fs.rmdir("javascript/App",(err) =>{
//     if(err) throw err;
//     console.log("deleted.....");
//   })
// })

////----------------------------------------------------------------------------

fs.mkdir("main",err =>{
  if(err) throw err;
  console.log("created");
  fs.writeFile("main/t1.txt","I love SRK",err => {
    console.log("t1 is created");
    fs.mkdir("main/folder1" , err =>{
      if(err) throw err;
      console.log("folder is created");
      fs.writeFile("main/folder1/t2.txt",'I love bIG b',err =>{
        if(err) throw err;
        console.log("t2 created");
        fs.readFile("main/t1.txt",(err,data)=>{
          if(err) throw err;
          console.log("file is read");
          fs.readFile("main/folder1/t2.txt","utf-8",(err,data2)=>{
            if(err) throw err;
            console.log("file is read");
            fs.mkdir("main/folder2",err=>{
              if(err) throw err;
              console.log("folder2 is created");
              fs.writeFile("main/folder2/t3.txt",data,err=>{
                if(err) throw err;
                console.log("It is Final file is created");
                fs.appendFile("main/folder2/t3.txt",data2,err=>{
                  if(err) throw err;
                  console.log("done......");
                })
              })
            })
            
          })
        })
      })
    })
  })
})
