const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({

    firstName: {
        type: String,
        default: '',
        required:true
    },
    lastName: {
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

    atelierType:{
        type: String,
        enum:['pieceDetachee','pieceCarroserie','atelierMecanique','atelierElectrique','atelierTolerie','concessionnaire','atelierTeinture','atelierServiceRapide'],
        required:false,
    },

    role:{
        type: String,
        enum:['user','prestataire'],
        required:true,
    },

    //timestamps: true,
    
     image:{
         type:String,
    
     }

});

//pour exporter le modéle :besh nasen3oulou methode
module.exports = User = mongoose.model('User', UserSchema);