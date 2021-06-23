const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("client/build"));

app.get("*", (req, res) =>{
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
} )

app.get("/api/config", (req, res) =>{
    res.json({success:true})
});


mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/losingrecipes", { useNewUrlParser: true , useUnifiedTopology: true }).then(()=>{console.log("Connected Successfully")}).catch((err)=>{console.log("Unable to connect")})

app.listen(PORT, () =>{
    console.log(`Express server running on http://localhost:${PORT}`)
});

// express app build 
// touch server.js
// npm init -y so we can npm i express 
// require express 
// app is = instance of express 
// port is equal process.env to 3001 because React is using 3000
// app.listen = to port

// add in middle in middleware to access api for our full stack app 
// npm i mongoose / mongoose.connect tp p.env or local // require mongoose


// npx create react app // useEffect to make an axios call to api/config 
// npm install concurrently 
// npm install if-env

// static client build servers up a would be built folder statically for heroku


