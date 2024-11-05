// // a = 60
// // console.log("Hello this is My first Node js Program");

// // var a ;
// // let b = 10;
// // let sum = a +b;
// // console.log(`${a} + ${b} = ${sum}`);

// // let num = Number(100);
// // console.log(num);

// // let string = String('Abhishek');
// // console.log(string);

// // let b1 = Boolean(true);
// // // let b2 = Boolean(!b1);
// // console.log(b1);
// if(a === 60)
// {
//   console.log(!b1);
// }
// else{
// //   console.log(b1);
// // }
// // let b2 = Number(b1);
// // console.log(b2);
// // console.log(!b2);
// console.log(Number(undefined));
// console.log(Number(NaN));
// console.log(Number(null));
// console.log(typeof NaN);

// let a ;
// let b;
// console.log(a+b);

// let x = Number(10);
// let y = String(10);
// console.log(x==y);

// let x1 = Number(true);
// let y1 = 1;
// console.log(x1 === y1);

// let x2 = Number('Abhi');
// let y2 = String("Abhi");
// console.log(x2 === y2);


// // rest operator is baically in the paranthisis and spread operator is in function
// let abhi = (...B)=>{
//   console.log(B)
//   console.log(...B);
// }
// abhi(10,2,3,4,5);

// let palindrome= (str)=>{
//   let newstr = str.split('').reverse().join('');
//   if(newstr == str)
//   {
//     return 'palindrome';
//   }
//   else{
//     return 'not a Palindrome';
//   }
// }
// console.log(palindrome('abhishek'));
// console.log(global)

// point to remember that 
// console.log(globalThis === global);
let {calculate,multiple} = require("./export")
console.log(calculate(10,20));
console.log("----------------------------------------------------------");
console.log(multiple(10,10));