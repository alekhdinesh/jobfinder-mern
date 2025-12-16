const jobModel=require('../models/jobModel')
const jwt=require('jsonwebtoken')
const router = require('../routes/regrouter')

async function jobupload(req,res){

    try{
    const token=req.headers.authorization
    console.log('****',token);
    
    const decode=jwt.verify(token,process.env.Seckey)
    console.log("DECODED TOKEN:", decode);
    

    


    if(decode.role!=='employer'){
        res.status(401).json("only employer can post job")
    }
    else{
         const job=await jobModel.create({
             title: req.body.title,
            company: req.body.company,
            description: req.body.description,
            salary: req.body.salary,
            employer: decode.id 
         })
    res.status(201).json(job)
    }
   

    }
    catch(err){
        res.status(501).json(err.message)
    }
    
}

async function jobview(req,res) {
    try{

        const token=req.headers.authorization
        const decode=jwt.verify(token,process.env.Seckey)



        const jobs=await jobModel.find({employer:decode.id})
        res.status(200).json(jobs)
    }catch(err){
        res.status(500).json(err.message)
    }
    
}

async function viewalljob(req,res){
    try{
            const jbs=await jobModel.find()
    res.status(200).json(jbs)

    }
    catch(err){
        res.status(500).json(err.message)
    }
    
}





module.exports={jobupload,jobview,viewalljob}