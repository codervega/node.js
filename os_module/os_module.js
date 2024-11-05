//!OS : Opearting System

let os = require('os')

//? It returns the CPU Architecture
let arc = os.arch()
console.log(`CPU ARCHITECTURE = ${arc}`);

let total = os.totalmem()
console.log(`total memory = ${total}`);

let free = os.freemem();
console.log(`free memeory = ${free}`);

let host = os.hostname();
console.log(`host Name is : ${host}`);

let temp = os.tmpdir()
console.log(`Temp file Path : ${temp}`);

let typ = os.type();
console.log(typ);

let home = os.homedir();
console.log(`Home Path = ${home}`);

let plat = os.platform();
console.log(plat);

let res = os.release()
console.log(` OS release = ${res}`)

let info = os.userInfo()
console.log(info)

let ntwrk = os.networkInterfaces();
console.log(ntwrk);

