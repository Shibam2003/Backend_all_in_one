const fs = require('fs');
const bioData = {
    name:"Shibam",
    age:19,
    channel:"Shibam gaming",
}

//converring object to JSON
const jsonData = JSON.stringify(bioData);

//copying jsonData into another file

// fs.writeFile("json1.json", jsonData, (err)=>{
//     console.log('done');
// });

fs.readFile('json1.json', 'utf8', (err, data)=>{
    // console.log(data);
    const orgData = JSON.parse(data);
    console.log(orgData);

});



