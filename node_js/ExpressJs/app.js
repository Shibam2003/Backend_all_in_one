const express = require('express');
const app = express();

// app.get(route, callback)
app.get("/", (req, res) => {
    res.send("Hello Shibam");//incase of express instead of res.end we use res.send 
});
app.get("/about", (req, res) => {
    res.send("hello from the about");
})


// app.listen(port, callback);
app.listen(8000, () => {
    console.log("listening at port 8000");
})

