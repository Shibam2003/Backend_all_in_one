const fs = require('fs');
const http = require('http');

const server = http.createServer();

// server.on('request',(req, res)=>{
//     var fs = require('fs');
//     fs.readFile('input.txt', (err, data)=>{
//         if(err) console.log(err);
//         res.end(data.toString());
//     });
// });
// server.listen(8000, "127.0.0.1");




//2nd way

// server.on('request',(req, res)=>{
//     const rstream = fs.createReadStream('input.txt');
//     rstream.on('data', (chunkdata)=>{
//         res.write(chunkdata);
//     });
//     rstream.on('end', ()=>{
//         res.end();
//     });
//     rstream.on('error', (err)=>{
//         console.log(err);
//         res.end('file not found');
//     });
// });


//3rd and smallest way 
server.on('request',(req, res)=>{
    const rstream = fs.createReadStream('input.txt');//reading the file using readstream
    rstream.pipe(res);//pipe it read and write faster than other methods//writing this in res after reading 
});

server.listen(8000, "127.0.0.1");


