const mongoose = require('mongoose');


const formData = new mongoose.Schema(
    { 
    firstname: String,

    lastname: String,

    email: String,

    password : String,
    
    }

);

const FormInfo = mongoose.model('FormDetails', formData);

module.exports = FormInfo;