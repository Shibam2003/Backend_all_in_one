const path = require('path');
const express = require('express');
const app = express();

// console.log(__dirname);

// console.log(path.join(__dirname, "../publc"));
const staticPath = path.join(__dirname, "../public");

//built in middle ware
app.use(express.static(staticPath));

app.get("/", (req, res)=> {
    res.send("<h1>Welcome to my home page</h1>");
});
app.get("/about", (req, res) => {
    res.send("welcome to my about page");
});
app.get("/contact", (req, res) => {
    res.send("welcome to my conatct page");
});
app.get("/temp", (req, res) => {
    res.send("welcome to my temp page");
});

//listening to port
app.listen(8000, ()=>{
    console.log("Listening at port 8000");
});
