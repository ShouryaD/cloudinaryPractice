const mongoose = require('mongoose')

let UserSchema = new mongoose.Schema({
    name:String,
    email:{
        type:String,
        required:true
    },
    password:{
        type:String
    },
    profilePic:String
},{timestamps:true})

module.exports = mongoose.model('chacha', UserSchema)