const express = require("express");
const router = express.Router();
const db = require("../models");

// LOGIN
router.post("/api/login", (req, res) => {
    db.User.findOne({email: req.body.email}).then((foundUser) => {
        if(foundUser.password === req.body.password){
        res.json({
            error: false,
            // need to add my jwt
            data: "token",
            message: "Successfully authenticated user"
        });
    } else{
        res.status(401).json({
            error:true, 
            data:null,
            message: "Unable to authenticated user"
        })
    }
    


    });

});

module.exports = router;