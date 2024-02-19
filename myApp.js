let express = require('express');
let app = express();

// #1
console.log("Hello World");

// #2
app.get("/", (req,res) =>{
    res.send("Hello Express");
})

// #4
app.use("/public", express.static( __dirname + "/public"))

// #7
app.use((req,res,next) => {
    console.log(`${req.method} ${req.path} ${req.ip}`)
    next()
});

// #3
app.get ("/", (req,res) => {
    res.sendFile( __dirname + "/views/index.html")
});

// #5
app.get ("/json", (req,res) => {
    res.json ({message: "Hello json"});
});

// #6
app.get ("/json", (req,res) => {
    if(process.env[MESSAGE_STYLE] == "uppercase"){
        res.json ({message: "HELLO JSON"}); 
    }
    res.json ({message: "Hello json"});
});

// #8
app.get("/now",(req,res,next) => {
    req.time = new Date().toString();
    next();
}, (req,res)=>{
    res.json({"time": req.time})
})





























 module.exports = app;
