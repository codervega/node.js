//! fs-module : Asyncronously :using promises async and await

const { rename } = require("fs/promises");

let fs = require("fs").promises

////----------------------------------------------------------------------------

//todo :writeFile() : this method is used to create a file by using async and await
// let createfile = async() =>{
//   await fs.writeFile("data.txt","Good Morning");
//   console.log("file is created and data is entered");
// }
// createfile();

////----------------------------------------------------------------------------

//todo : appendFile() : it is used to add extra data  to same file / new file
// let addData = async () =>{
//   await fs.appendFile("data.txt",`this is becasue u are stupid`);
//   console.log("data is been added in the File");
// }
// addData()

////----------------------------------------------------------------------------

//todo : readfile() : it is used to read the data from and another file by using async & await
// let readData = async()=>{
//   let txt = await fs.readFile("data.txt","utf-8")
//   console.log("data is readed")
//   console.log(txt);
// }
// readData();

////----------------------------------------------------------------------------


//todo : unlink() : It is used to delete the file using async and await
// let deleteFile = async() =>{
//   await fs.unlink("data.txt");
//   console.log("deleted");
// }
// deleteFile();

////----------------------------------------------------------------------------

//todo : mkdir(): it is used to create / directory by using async and await()
// let CreateFolder = async () =>{
//   await fs.mkdir("folderN")
//   console.log("folder is craeted");
// }
// CreateFolder();

////----------------------------------------------------------------------------



//todo : rename() : it is used to rename file /folder using async and await
// let renameFolder = async() =>{
//   await fs.rename("folderN","folder3")
//   console.log("folder is renamed");
// }
// renameFolder()

////----------------------------------------------------------------------------

// todo : rmdir() : it is used to delete file / folder using async and await
// let deleteFolder = async() =>{
//   await fs.rmdir("folder3")
//   console.log("folder is renamed");
// }
// deleteFolder();

////----------------------------------------------------------------------------

// let task1 = async ()=>{
//   await fs.mkdir("App");
//   console.log("APP FOLDER IS CREATED");
//   await fs.mkdir("App/front-end");
//   console.log("front-end Folder is created");
//   await fs.mkdir("App/back-end");
//   console.log("back-end Folder is created");
//   await fs.writeFile("App/front-end/frontend.txt",`Hello honkhong`);
//   await fs.writeFile("App/back-end/backend.txt","hello china");
//   let data1 = await fs.readFile("App/front-end/frontend.txt",'utf-8');
//   let data2 = await fs.readFile("App/back-end/backend.txt",'utf-8');
//   await fs.writeFile("App/app.txt" , `${data1} 
//       ${data2}`);
//       console.log("completed");
// }
// task1();

// let task2 = async()=>{
//   await fs.mkdir("Hospital");
//   console.log("hospital folder is created");
//   await fs.mkdir("Hospital/AIMS");
//   console.log("aIMS IS cREATED"); 
//   await fs.mkdir("hospital/NIMANS");
//   console.log("Nimas Folder is Created");
//   await fs.writeFile("Hospital/AIMS/Name.txt","hello meaow");
//   let daa1 = await fs.readFile("Hospital/AIMS/Name.txt","utf-8")
//   await fs.writeFile("Hospital/Name3.txt","hello cats");
//   let data2 = await fs.readFile("Hospital/Name3.txt","utf-8")
//   await fs.writeFile("Hospital/NIMANS/Name2.txt",`
//     ${daa1}
//     ${data2}`);
//   await fs.unlink("Hospital/AIMS/Name.txt");
//   await fs.unlink("Hospital/Name3.txt");

// }
// task2()

////----------------------------------------------------------------------------

// let task3 = async() =>{
//   await fs.mkdir("main");
//   await fs.mkdir("main/sub1");
//   await fs.mkdir("main/sub2");
//   await fs.mkdir("main/sub3");

//   await fs.writeFile("main/sub1/text1.txt","My");
//   await fs.writeFile("main/sub2/text2.txt","Name is");
//   await fs.writeFile("main/sub3/text3.txt","Rahul, naam to sunna he hogha");

//   let data1 = await fs.readFile("main/sub1/text1.txt","utf-8");
//   let data2 = await fs.readFile("main/sub2/text2.txt","utf-8");
//   let data3 = await fs.readFile("main/sub3/text3.txt","utf-8");

//   await fs.writeFile("main/file.txt",`
//     ${data1}
//     ${data2}
//     ${data3}
//     `)
//     console.log("task Done");

// }
// task3();