// let fs = require("fs").promises


// let readData = async() =>{
//   let txt = await fs.readFile("p2.txt","utf-8");
//   console.log(txt);
// }
////-----------------------------------------------------------------------------------------
//!Buffer : 
//? It is Temporary storage that is used to store  chunk of data & transfer it from one place to another
//? A buffer is a way to store and Manipulate binary data is Node-JS
//? Ex: Images, videos , Author etc....
//? Ascii & Binary is not same

////----------------------------------------------------------------------------

//todo : Methods
//! Buffer.from()
// todo : from method it is used to check the buffer values
// readData();
// let buf = Buffer.from("hello")
// console.log(buf);
//? converting from buffer value to string
// console.log(buf.toString());
//? checking lenght of the buffer data
// console.log(buf.length)
//? checking single buffer value of index position & It will return the Ascii value of the character
// console.log(buf[0]);

////----------------------------------------------------------------------------

//! BUffer.alloc()
//todo : alloc() : it is used to allocate the buffer values

//? Syntax: Buffer.alloc(size,fill)
// let buf1 = Buffe.alloc(5,'A');
// console.log(buf1);
// let buf2 = Buffer.alloc(10,'s');
// console.log(buf2);
// let buf3 = Buffer.alloc(10,'S');
// console.log(buf3);


////----------------------------------------------------------------------------

//todo : example
// let buf = Buffer.alloc(5);
// console.log(buf);

//! Write()
// buf.write("hello america");
// console.log(buf);
// console.log(buf.toString());

////----------------------------------------------------------------------------

//! isbuffer
//todo : isBuffer() : it is used to check the the buffer value is buffer or not

// let buf1 = Buffer.from("hello");
// let str = "hello";
// let x = Buffer.isBuffer(buf1);
// console.log(x);
// let y = Buffer.isBuffer(str);
// console.log(y);

////----------------------------------------------------------------------------
//! copy()
//todo : copy() method is basically used to copy the buffer content
// copy of buffer

let buf = Buffer.from("hello, i m Batman");
let bufsize = Buffer.alloc(20);
let cpy = buf.copy(bufsize)
console.log(bufsize);
console.log(bufsize.toString());

//! slice()
console.log(buf.slice(0,18).toString());
////----------------------------------------------------------------------------