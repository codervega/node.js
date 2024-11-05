equire("events")
let emitter = new events()
emitter.on("execute",(sender,reciver)=>{
  console.log(`${sender} is sending msz to ${reciver}`);
})
emitter("execute","bulati hain","magar jaane ka nhi")