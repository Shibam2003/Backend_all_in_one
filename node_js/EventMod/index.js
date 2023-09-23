const EventEmitter = require('events');
const event = new EventEmitter();
//what to do on firing event 
// event.on('sayMyName', ()=>{
//     console.log('hello shibam');
// });
// event.on('sayMyName', ()=>{
//     console.log('hello ');
// });

event.on('check',(sc, msg)=>{
    console.log(`your status is ${sc} and page is ${msg}`);
});

event.emit('check', 200, "ok");//firing event here
