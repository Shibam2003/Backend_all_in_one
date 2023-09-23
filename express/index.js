const express = require('express');
const app = express();
const port = 4000;
const path = require('path');
const bodyParser = require('body-parser');
const router = require('./UserRoutes');



app.use(bodyParser.urlencoded({extended: false}));

app.use(express.json());
app.use("/api/v1",router);

// console.log(__dirname+"/form_validation/index.html");

// app.get("/", (req, res)=>{
//     res.sendFile(path.join(__dirname+"/index.html"));
// });

// app.post("/api/v1/login", (req, res) => {
//     res.send(`<h1>DONE Mr.${req.body.name}</h1> <h2>Your email is ${req.body.email} </h2> <h3>Password is ${req.body.password} </h3>`);
//     console.log(req.body);
// });
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname+"/index.html"));
});


app.listen(port, (req, res)=>{
    console.log(`server is listening on port ${port}`);
});
