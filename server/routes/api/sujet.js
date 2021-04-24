
const Sujet = require("../../models/Sujet");

//hero function
module.exports=(app)=>{
    //post yab3eth les données
    //next : next step : function t3ayyet l function okhra
    // body les fields eli besh t3abbehom 
    app.post('/api/account/sujet',(req,res,next)=>{
    console.log('req', req.body.email);

    const newSujet= new Sujet();
    newSujet.email=req.body.email;
    newSujet.password =req.body.password;
    newSujet.name= req.body.name;
    
    newSujet.save((err,sujet)=>{
        
        if (err){
            // comme 404 not find 
            return res.status (500).send({
                message:'ERROR:Server ERROR',
            })
        }
        else{
            return res.status(200).send({
                message:'Signed Up'
                
            })
        }
    })
})
    
}
