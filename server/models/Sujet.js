const mongoose = require('mongoose');

const SujetSchema = new mongoose.Schema({
    id: {
        type: String
    },
    //date de creation du sujet 
    date:{
        type : Date,
        value : Date.now()
    },

    userId: {
        type: String
    },

//on a besoin du longeur du tableau msg (nb de réponse) et nb de vue


//les id des messages
    messageIds: {
        type: [String]
   

    },

    image:{
        type:String
    }

    //dernier msg =message[length] nekhdhou mennou l user w date
});

//pour exporter le modéle :besh nasen3oulou methode
module.exports = mongoose.model('Sujet', SujetSchema);