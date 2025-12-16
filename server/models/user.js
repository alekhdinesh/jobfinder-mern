const mongoose=require('mongoose')

const userModel=mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,unique:true,required:true},
    password:{type:String,required:true},
    role: {
    type: String,
    enum: ['user', 'employer'],
    default: 'user'
  }

})

module.exports=mongoose.model('user',userModel)