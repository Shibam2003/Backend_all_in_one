const express = require('express');
const app = express();
const PORT = 5000;
const sendMail = require("./controllers/sendMail")

app.get("/",(req,res)=>{
    res.send("I am a server");
});

app.get("/mail", sendMail);

const start = async() =>{
    try {
        app.listen(PORT,()=>{
            console.log(`I am listening at portno. ${PORT}`);
        });
    } catch (error) {
        
    }
};

start();
