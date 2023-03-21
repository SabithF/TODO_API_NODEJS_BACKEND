const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const connectDB = require('../config/db');

const userSchema = new mongoose.Schema({
    name: {
        type: String,        
        require: true,
        
    },
    email: {
        type: String,
        lowercase: true,
        require: true,
        unique: true
        
    },
    password: {
        type: String,
        require: true
    }
});

userSchema.pre('save', async function(){
    try {
        // this means above defined pswd
        var user = this;
        const salt = await(bcrypt.genSalt(10));
        const hashpass = await bcrypt.hash(user.password, salt);

        user.password= hashpass;

    } catch (error) {
        throw error;
        
    }
})

const UserModel = mongoose.model('USER TODO', userSchema);

module.exports = UserModel;