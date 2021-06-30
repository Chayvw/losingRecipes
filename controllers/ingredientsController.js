const express = require("express");
const router = express.Router();
const db = require("../models");


// Read All
//route to be able to 
router.get("/api/ingredients", (req, res) =>{
    //.find{} we can pass in our search query
    db.Ingredient.find({}).then((foundIngredients) =>{
        // will return an object and just not foundIngredients 
        res.json({
            error:false,
            data:foundIngredients,
            message:"Successfully retrieved all ingredients",
        })

    }).catch((err) =>{
        // if it is an error than .catch will give you a 500 status error 
        res.status(500).json({
            error:true,
            data:null,
            message:"Unable to new ingredient"
        })

    })
});
// CREATE
router.post("/api/ingredients", (req, res) =>{
    db.Ingredient.create(req.body).then((createdIngredient) => {
        res.json({
            error:false,
            data:createdIngredient,
            message:"Successfully created an ingredient",
        });
    


    }).catch((err) =>{
        // if it is an error than .catch will give you a 500 status error 
        res.status(500).json({
            error:true,
            data:null,
            message:"Unable to retrieve all ingredients"
        })

    })
});

//UPDATE

// DELETE
router.delete("/api/ingredients/:id", (req, res) => {
    // console.log(req.params.id);
    db.Ingredient.findByIdAndDelete(req.params.id)
    .then((result)=>{
        res.json({
            error:false,
            data:result,
            message:"Successfully deleted an ingredient",
        });
    }).catch((err) =>{
        // if it is an error than .catch will give you a 500 status error 
        res.status(500).json({
            error:true,
            data:null,
            message:"Unable to retrieve all ingredients"
        })

    })
  });

module.exports = router;