const express = require("express");
const router = express.Router();
const db = require("../models");
const jwt = require("jsonwebtoken");

// LOGIN
router.post("/api/login", (req, res) => {
    db.User.findOne({ email: req.body.email }).then((foundUser) => {
        if (foundUser.password === req.body.password) {
            const privateKey = privatekeytest
            jwt.sign({ email: foundUser.email }, privateKey, function (err, token) {
                console.log(token);
                res.json({
                    error: false,
                    // need to add my jwt
                    data: "token",
                    message: "Successfully authenticated user"
                });
            });
        } else {
            res.status(401).json({
                error: true,
                data: null,
                message: "Unable to authenticated user"
            })
        }



    });

});

module.exports = router;