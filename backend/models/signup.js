const mongoose = require('mongoose');


const signData = new mongoose.Schema(
    { 
    name: String,

    email: String,

    password : String,
    
    }

);

const SignInfo = mongoose.model('SignUpDetails', signData);

module.exports = SignInfo;