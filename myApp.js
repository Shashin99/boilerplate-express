let express = require('express');
let app = express();

// #1
console.log("Hello World");

// #2
app.get("/", (req,res) =>{
    res.send("Hello Express");
})

// #3
app.get ("/", (req,res) => {
    res.sendFile( __dirname + "/views/index.html")
});

































 module.exports = app;
