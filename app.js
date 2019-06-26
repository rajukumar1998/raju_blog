const express=require('express');
const app=express();
const socket=require('socket.io');
const Port=process.env.PORT || 8000;

const io=socket();


//   io.on("connection",function(socket){

// console.log("made connection");

//   });



 const server=app.listen(Port,()=>{

	console.log(`listening on port ${Port}`);
})