const express = require("express");

const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/losingrecipes", { useNewUrlParser: true },  { useUnifiedTopology: true }).then(()=>{console.log("Connected Successfully")}).catch((err)=>{console.log("Unable to connect")})

app.listen(PORT, () =>{
    console.log(`Express server running on http://localhost:${PORT}`)
});

