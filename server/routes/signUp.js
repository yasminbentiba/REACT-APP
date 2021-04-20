
const User = require("../models/User");

//hero function
module.exports=(app)=>{
    //post yab3eth les données
    //next : next step : function t3ayyet l function okhra
    // body les fields eli besh t3abbehom 
    app.post('/api/account/signup',(req,res,next)=>{
    console.log('req', req.body.email);

    const newUser= new User();
    newUser.email=req.body.email;
    newUser.password =req.body.password;
    newUser.name= req.body.name;
    
    newUser.save((err,user)=>{
        
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
