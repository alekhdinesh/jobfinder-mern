const mongoose=require('mongoose')

const applicationModel=mongoose.Schema({
    jobid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'job',
        required:true
    },
    userid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user',
        required:true
    },
    resume:{
        type:String,
        required:true
    },
    status:{
        type:String,
        default:"pending"
    },
    appliedAt:{
        type:Date,
        default:Date.now
    }
})


module.exports=mongoose.model('application',applicationModel)