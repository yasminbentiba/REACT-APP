
const UserSession = require("../models/");
const User = require("../../models/UserSession");

//hero function
module.exports=(app)=>{
    //post yab3eth les données
    //next : next step : function t3ayyet l function okhra
    // body les fields eli besh t3abbehom 
    app.post('/api/account/SignIn',(req,res,next)=>{
    console.log('req', req.body.email);

     const email=req.body.email;
    const password =req.body.password;
    
    User.find({email:email},(err,users)=>{
        
        if (err){
            // comme 404 not find 
            return res.status (500).send({
                success:false,
                message:'ERROR:Server ERROR',
                respID:'LIE3',
            })
        }
        else{
            return res.status(200).send({
                success:false,
                message:'ERROR: Invalid',
                respID:'LIE4',
            })
        }

        
        if (users.lenght != 1){
            // comme 404 not find 
            return res.status (500).send({
                success:false,
                message:'ERROR:Server ERROR',
                respID:'LIE3',
            })
        }
        else{
            const user=users[0];
           const userSession= new userSession();
           userSession.userId=user.id;
           userSession.save((err,doc)=>{
               if(err){
                   console.log(err);
                   return res.send({

                    success:false,
                message:'ERROR: SERVER Error',
                respID:'LIE6',
                   })
               }

               else{
                console.log('doc',doc);
                return res.send({

                 success:true,
             message:'Valid sign in ',
             token:doc._id,
             name:user.name,
             email:user.email,
             respID:'LIS',
                })
               }
           })    
                
            }
            
        }
    )
})
    
}
