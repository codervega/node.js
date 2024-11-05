//? 1st step : import events
// let EventEmitter = require("events")

//? 2nd step :Create object using variable of import statement
// let event = new EventEmitter()
// console.log(event);

// //? 3rd Step : trigggering the event
// event.on("execute",()=>{
//   console.log("Successfully event is executed......!");
// })
// event.emit("execute");

/* 
todo : on(eventNmae,cbf)
  It is used to add a callback function & this callback function will be executed when event is triggered
todo : emit(EventName)
    It is used ti trigger any events
*/
let events = require("events")
let emitter = new events()
emitter.on("execute",(sender,reciver)=>{
  console.log(`${sender} is sending msz to ${reciver}`);
})
emitter.emit("execute","bulati hain","magar jaane ka nhi")