
// const fs = require('fs');//requiring fs module
// fs.writeFileSync('read.txt', "welcome to my page");
// fs.writeFileSync('read.txt', "welcome to my page2");//over write the data
// fs.appendFileSync('read.txt', "\n Hello how are you");


// const buf_data = fs.readFileSync('read.txt');//buffer data
// console.log(buf_data);
{/* <Buffer 77 65 6c 63 6f 6d 65 20 74 6f 20 6d 79 20 70 61 67 65 32 48 65 6c 6c 6f 20 68 6f 77 20 61 72 65 20 79 6f 75 20 48 65 6c 6c 6f 20 68 6f 77 20 61 72 65 ... 23 more bytes> */}

// const buf_data = fs.readFileSync('read.txt');//buffer data
// // console.log(buf_data);

//converting buffer data to it's equivalent string 
// const original_data = buf_data.toString();
// console.log(original_data);

//to rename a file
// fs.renameSync('read.txt','readwrite.txt');


//CRUD operation in node.js(create, read, update, delete)
const fs = require('fs');//importing fs module to play with file system
// fs.mkdirSync("shibam");
// fs.writeFileSync('shibam/bio.txt','my name is shibam');//creating and writing data
// fs.appendFileSync('shibam/bio.txt'," hello there");//updating data

//reading file data

//without encoding 
// const data = fs.readFileSync('shibam/bio.txt');//without encoding it will give us buffer data
// console.log(data);//give us the buffer data

//encoding with utf-8
// const data = fs.readFileSync('shibam/bio.txt','utf8');
// console.log(data);


//renaming file
// fs.renameSync('shibam/bio.txt','shibam/myBio.txt');

//deleting

//deleting file
// fs.unlinkSync('shibam/myBio.txt');//it removes the file

//deleting folder
// fs.rmdirSync('shibam');

