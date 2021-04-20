import express from 'express'
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';



import postRoutes from './routes/posts.js';
/* initialiser notre application */
const app=express();


app.use('/posts',postRoutes);

app.use(bodyParser.json({limit:'30mb',extended:true})); 
/* 30 mega bite parsque nous allons utiliser des image de tres hohaute resolution */
app.use(bodyParser.urlencoded({limit:'30mb',extended:true})); 

app.use(cors()); 


const CONNECTION_URL='mongodb+srv://PFE:J7y36ZQF7S4FAUiX@cluster0.etcqo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT= process.env.PORT || 5000; //5000 va etre cjanger lors de lutilisation de heroku part defaut PORT


/* pour se connecter sur notre BDD
on va utiliser la fonction mngoose qui accepte 2 parametres
le premier est CONNECTION_URL 
le dexieme est un objet avec tt option(ds notre cas on vas utiliser 2 options) */
mongoose.connect(CONNECTION_URL,{useNewUrlParser:true, useUnifiedTopology:true})
   .then(()=>app.listen(PORT,()=>console.log(`Server running on port: ${PORT}`)))
   /* en cas de succee de notre app */
   .catch((error)=>console.log(error.message))/* en cas d'erreur */

mongoose.set('useFindAndModify',false);   /* ca pour etre sur qu'il n y a pas une erreur dans notre connection*/ 
/* https://www.mongodb.com/clous/atlas */




