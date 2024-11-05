//!path module

//? to check the folder/directory name
// console.log(__dirname);

//? to check the file name
//console.log(__filename)

// ! Importing the path module
// let path = require("path")
// console.log(path);

//todo : basename(): It is used to check last part of path
//? current working folder
// console.log(path.basename(__dirname));

//? current working file
// console.log(path.basename(__filename));

//todo : extname() : it is used to check the extension of folder/ file
// console.log(path.extname(__dirname));
// console.log(path.extname(__filename));

//todo :parse() : it is used to convert path String to path object
// console.log(path.parse(__dirname));
// console.log(path.parse(__filename));

//todo : format() : it is used to convert path object to path String
// let obj = path.parse(__filename)
// console.log(obj)
// console.log(path.format(obj))
// console.log(path.format(path.parse(__filename)));

// todo : isAbsolute() :It is used to check the path  is complete of not
// console.log(path.isAbsolute(__dirname));
// console.log(path.isAbsolute(__filename));
// console.log(path.isAbsolute("facebook.com"));

// todo : join() : it is used to add the path
// console.log(path.join("f1","f2","f3"));
// console.log(path.join("/f1","/f2","/f3"));
// console.log(path.join("//f1","//f2","/f3"));

// console.log(path.join("f1","../f2","f3"));
// console.log(path.join("f1","f2","../f3"));
// console.log(path.join("../f1","../f2","../f3"));

// !: Note : If we are taking (../) with pathname & It will vanish /delete previous path
// todo : resolve() : It will resolve the path from absolute path
// console.log(path.resolve("f1","f2","f3"));
// console.log(path.resolve("/f1","f2","f3"));
// console.log(path.resolve("f1","/f2","f3"));
// console.log(path.resolve("//f1","f2","f3"));
// console.log(path.resolve("f1","//f2","f3"));
// console.log(path.resolve("f1","f2","../f3"));

// todo :Note :
// todo : *double Slash(//) indicates the root node in resolving method
//todo : *whenever we are passing without (/) at the starting it will take the absolute path

