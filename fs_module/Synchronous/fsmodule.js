let fs = require('fs') // importing fs(file system) module

////------------------------------------------------------------------------------------------

//! method to create file Synchronously
// fs.writeFileSync("text.txt","welcome to new york");
// console.log("file is craeted & data is entered");

////------------------------------------------------------------------------------------------

//! sysncronous appending data to the file
// todo : appendFileSync() : this method is used to add extra data / append the data to the new file/ same
// fs.appendFileSync("text.txt",`
//   it is considered to be the best city in the word`);
// console.log("file is modifiled");

////------------------------------------------------------------------------------------------

//! Synchronouslu read data in the file
// todo : readFileSync() : this method is used to read data from a file and store it in a variable which is defined by us
// example-1
// let data = fs.readFileSync("text.txt");
// console.log(data); // data is readed in the form of buffer
// console.log(data.toString()) // converting buffer data to string by using toString()

// example-2
// let data2 = fs.readFileSync("text.txt","utf-8")
// ? utf-8 (unicorn transformation format) : it is used to convert unicode / buffer data to string data
// console.log("data is readed");
// console.log(data2);

// // // program-1
// // fs.writeFileSync("newtext.txt",data2);
// // console.log("file is created & (text.txt) data is added");

// // let text = `
// // i love new jersey`;
// // fs.appendFileSync("newtext.txt",text);

////------------------------------------------------------------------------------------------


//! Synchronuly reading data from the File
// todo : unlinkSync() -->this method is used to delete the already existing file Synchronusly
// fs.unlinkSync("text.txt");
// console.log(" the file is been deleted");
// fs.unlinkSync() --> this method is basically used to delete the file 
// fs.unlinkSync("text.txt");
// console.log(" the file is been deleted");

////------------------------------------------------------------------------------------------

//! synchronously create the folder
// todo : mkdirsync() : it is used to create the folder
//? syntax : fs.mkdirSync("folder path")
// fs.mkdirSync("newFolder")
// console.log("Folder is Created");
////------------------------------------------------------------------------------------------

//! synchronously deleting the folder
// todo : rmdirSync() : it is used to delete the folder
//? Syntax :fs.rmdirSync("path path")
// fs.rmdirSync("newFolder")
// console.log("the folder is deleted")

////------------------------------------------------------------------------------------------

//! Synchronously rename the file/folder
//todo :nenameSync() : it is used to rename the file/folder
//? Syntax : fs.renameSync("old file /folder path","new file/folder")
// fs.renameSync("text.txt","demo.txt")
// console.log("the Name os the File is deleted");

////------------------------------------------------------------------------------------------

//! Synchronuly create nested folder
// todo : example program
// fs.mkdirSync("export/nested")
// console.log("new folder is");
////------------------------------------------------------------------------------------------

// // // todo :Synchronusly creating nested folder

// // fs.writeFileSync("export/nested/hello.txt","welcome to new york");
// // console.log("file is created");

// let data1 = fs.readFileSync("export/nested/hello.txt","utf-8");
// // console.log(data1);
// // fs.writeFileSync("demo.txt",data1);
// // fs.mkdirSync("export/nested2")
// fs.writeFileSync("export/nested2/hello2.txt",data1)
// fs.writeFileSync("hello2.txt",data1);
//-------------------------------------------------------------------------------
// fs.mkdirSync("course")
// fs.mkdirSync("course/java")
// fs.writeFileSync("course/java/p1.txt","habibi come to java")
// let d1 = fs.readFileSync("course/java/p1.txt")
// fs.mkdirSync("course/python")
// fs.writeFileSync("course/python/p2.txt","habibi come to python")
// let d2 = fs.readFileSync("course/python/p2.txt")
// fs.mkdirSync("course/javascript")
// fs.writeFileSync("course/javascript/p3.txt",d1);
// fs.appendFileSync("course/javascript/p3.txt",d2);
// console.log("done!..............");
//! -------------------------------------------------------------------------

// fs.mkdirSync("main1")
// fs.mkdirSync("main1/f1")
// fs.mkdirSync("main1/f2")

// fs.writeFileSync("main1/f1/p3.txt","hello dubai")
// let daata = fs.readFileSync("main1/f1/p3.txt");
// fs.writeFileSync("main1/f2/p4.txt",daata)
fs.renameSync("main1/f2/p4.txt","main1/f2/p5.txt")
console.log("Done......")
//! Synchrously deleting files / folder
fs.unlinkSync("newFolder/nestedFolder/text.txt")
fs.unlinkSync("newFolder/nestedFolder/new1.txt")

fs.rmdirSync("newFolder/nestedFolder")
fs.rmdirSync("newFolder/nestedFolder2")
fs.rmdirSync("newFolder")
console.log("files & folders is deleted")


//todo : Note : Make Sure that the folder is emplty or else folder is not deleting, hence fisrt to make folder is empty(deleting nested folder / files)



