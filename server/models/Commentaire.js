const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({
    //id du message
    id: {
        type: String
    },

    userId: {
        type: String

    },
    sujetId: {
        type: String
    },
    date: {
        type: Date,
        value: Date.now()
    },
    msg:{
        type:String
    }

});

//pour exporter le modéle :besh nasen3oulou methode
module.exports = mongoose.model('Message', MessageSchema);