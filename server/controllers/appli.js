const jwt=require('jsonwebtoken')
const appModel=require('../models/applicationModel')
const jobModel=require("../models/jobModel")


async function applicationDetails(req,res){
    try{
        const token=req.headers.authorization;
        const decode=jwt.verify(token,process.env.Seckey)
        console.log('decode value',decode);

        const job = await jobModel.findById(req.params.jobid);
if (job.employer.toString() === decode.id) {
    return res.status(400).json("Employers cannot apply to their own job");
}
        

        const exist=await appModel.findOne({
            jobid:req.params.jobid,
            userid:decode.id

        })

        if(exist){
           return res.status(401).json("already applied")
        }
        const apply=await appModel.create({
            jobid:req.params.jobid,
            userid:decode.id,
            resume:req.body.resume
        })

        console.log('apply',apply);
        

        res.status(200).json("application successfull")




    }
    catch(err){
            res.status(502).json(err.message)
    }
}

async function findAppliedjob(req,res){
    try{
        
        const token=req.headers.authorization;
        const decode=jwt.verify(token,process.env.Seckey)


        console.log("------",decode);
        

        console.log('>>>>>>>',req.params.id);

        const jober=await jobModel.findById(req.params.id)

        console.log(">>><<<<",jober);
        if(!jober) return res.status(404).json("job not found")
        console.log("joberemployer",jober.employer.toString());

        if(jober.employer.toString()!==decode.id)
            return  res.status(403).json("you are not the owner of the job");
        

        
        const apps=await appModel.find({jobid:req.params.id})
        .populate("userid","name email")
        .populate("jobid","title company")

        res.status(200).json(apps);
        
        


        
        

        // const job=await appModel.findById(req.params.id);
        // console.log(".........",job);

        // console.log("userid of job>>>>>",job.userid.toString());
        // console.log("decode userid<<",decode.id);
        


        
        

        
        // if(job.userid.toString()!==decode.id)
        //     return res.status(403).json("you are not the owner of the job");

        // const apps=await appModel.find({jobid:req.params.id})
        // .populate("userid","name email")
        // .populate("jobid","title company");

        // res.status(200).json(apps)

        
        // const dataapplied=await appModel.find()
        // console.log('jobid is ',req.params.id);
        
        // console.log('{{{{{{{{{{{{',dataapplied);
        
        // res.json(dataapplied)
    }
    catch(err){
        res.status(500).json(err.message)
    }
}


async function updateStatus(req,res){
    try{

        const token=req.headers.authorization
        const decode=jwt.verify(token,process.env.Seckey)

        const {status}=req.body
        console.log({status});
        


        const application=await appModel.findById(req.params.id)
        .populate("jobid")

        console.log("<<<>>>",application.jobid.employer.toString());
        

        if(!application) return res.status(403).json("application not found")
        
        if(application.jobid.employer.toString()!==decode.id)
            return res.status(404).json("you cannot update this application")

        application.status=status;
        await application.save()


        res.status(200).json("status updated")

        // await appModel.findByIdAndUpdate(req.params.id,{
        //     status:req.body.status
        // })
        // res.status(200).json("status updated")

    }
    catch(err){

    }
}


async function myapplications(req,res) {
    try{
        const token=req.headers.authorization
        const decode=jwt.verify(token,process.env.Seckey)

        const app=await appModel.find({userid:decode.id})
        .populate("jobid","title company salary description")
        res.status(200).json(app)

    }
    catch(err){
        res.status(500).json(err.message)
    }
    
}

module.exports={applicationDetails,findAppliedjob,updateStatus,myapplications}