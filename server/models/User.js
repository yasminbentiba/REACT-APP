const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    id:{
        type: String,
        unique:true
    },

    name: {
        type: String,
        default: '',
        required:true
    },

    email: {
        type: String,
        default: '',
        required:true,
        unique:true
    },

    password: {
        type: String,
        default: '',
        required:true,

    },

    position: {
        latitude: {type : String},
        longitude : {type : String}   
      },

    userType:{
        type: String,
        enum:['Concessionnaire','Tolier','Mécanicien','Electricien'],
        required:true,


    },

    register_date:{
        type:Date,
        default:Date.now
    },
    
     image:{
         type:String,
    
     }

});

//pour exporter le modéle :besh nasen3oulou methode
module.exports = User = mongoose.model('User', UserSchema);