const mongoose=require("mongoose")



const jobModel=mongoose.Schema({
    title:String,
    company:String,
    description:String,
    salary:String,
    employer:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    },
    createdAt:{
        type:String,
        default:Date.now

    }
})

module.exports=mongoose.model('job',jobModel)