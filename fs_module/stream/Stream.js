let fs = require("fs")
////---------------------------------------------------------------------------------

// let readStream = fs.createReadStream('./text.txt','utf-8')

// let txt = '';

// readStream.on('data',(chunk)=>{
//   txt+=chunk;
// })
// readStream.on("end",()=>{
//   console.log(txt);
// })
// readStream.on('error',err=>{
//   console.log(err);
// })
////-------------------------------------------------------------------------------

// let writeStream = fs.createWriteStream("text.link");
// let msz = `why shakespear always feel Gloomy`;
// writeStream.write(msz)
// writeStream.end();
// writeStream.on('finish',()=>{
//   console.log("data is added");
// })

////--------------------------------------------------------------------------------------

// let readStream = fs.createReadStream("text.txt","utf-8");
// let writeStream = fs.createWriteStream("res.txt");
// readStream.pipe(writeStream);

////-------------------------------------------------------------------------------------------
//! highwaterMark
//todo : It is used to determine how much data buffer inside the Stream.By default chunk by chunk data buffer with only 64kb,& using highWaterMark we can change the default value of buffer data
// let readed = fs.createReadStream("text.txt",{highWaterMark : 20})
// readed.on("data",chunk =>{
//   console.log(`length : ${chunk.length} = ${chunk.toString()}`);
// })