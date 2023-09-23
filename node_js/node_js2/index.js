// const fs = require('fs');
// fs.writeFile('read.txt',"tody is awesome day",
// (err)=>{
// console.log("file is created");
// }
// );
// fs.appendFile('read.txt', " are you guys agree with me",(err)=>{
//     console.log("appended");
// } );

// fs.readFile('read.txt','utf8',(err,data)=>{
// console.log(data);
// });


//CRUD OPERATION ASYNCHRONOUS  


const fs = require('fs');

//creating folder
// fs.mkdir('shibam',(err)=>{
//     console.log("folder created");
// });

//creating file inside the folder and adding some data into it
// fs.writeFile('shibam/bio.txt', "hello there how are you", (err)=>{
//     console.log("file created");
// });


//appending some more data inside the file
// fs.appendFile('shibam/bio.txt',".  I hope you are fine ", (err)=>{
//     console.log("appended");
// });

//reading the file
// fs.readFile('shibam/bio.txt','utf8',(err,data)=>{
//     console.log(data);
// });

//renaming the file
// fs.rename('shibam/bio.txt','shibam/myBio.txt',(err)=>{
//     console.log("file renaming done");
// });

//deleting the file
// fs.unlink('shibam/myBio.txt',(err)=>{
//     console.log("file deleted");
// });


//deleting the folder
// fs.rmdir('shibam',(err)=>{
//     console.log('folder deleted');
// });
