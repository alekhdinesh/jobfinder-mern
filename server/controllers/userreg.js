const userModel=require('../models/user')

const argon=require('argon2')

async function registration(req,res){
    try{
        console.log(req.body.password);
          req.body.password=await argon.hash(req.body.password)
        const userdata=await userModel.create(req.body)
        res.status(200).json(userdata)
      
        
    }
    catch(err){
        res.status(500).json(err.message)

    }
}

module.exports={registration}