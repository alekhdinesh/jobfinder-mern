
const userModel=require('../models/user')
const argon=require('argon2')
const jwt=require('jsonwebtoken')


async function loginuser(req,res){
    try{
        const findMail=await userModel.findOne({email:req.body.email})

        if(!findMail){
            res.status(400).json("email valid")
        }
        console.log('$$$',findMail);
        
        if(await argon.verify(findMail.password,req.body.password))
        {
            var token=jwt.sign({id:findMail._id,role:findMail.role},process.env.Seckey,{expiresIn:'1d'})
            res.status(200).json({message:"success",token,id:findMail._id})
            res.s
        }
    }
    catch(err){
            res.status(500).json('wrong email or password')
    }
}

module.exports={loginuser}