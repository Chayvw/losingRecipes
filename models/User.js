const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  
    email: {
        type: String,
        trim: true,
        required: "Email address is required.",
        index:{
            unique: true
        }
    },
    password: {
        type: String,
        trim: true,
        required: "Email address is required."
    }
});

const User = mongoose.model("User", UserSchema);

module.exports = User;

