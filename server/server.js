const express=require('express')
const mongoose=require('mongoose')
const cors=require('cors')
const dotenv=require('dotenv');
const regrouter = require('./routes/regrouter');
const loginRouter=require('./routes/loginRouter');
const jobRouter=require('./routes/jobRouter')
const applyRouter=require('./routes/applicationRouter')

dotenv.config();

const app=express()

app.use(cors())
app.use(express.json())
app.use('/uploads', express.static('uploads'));


app.get('/',(req,res)=>{
    res.send('job portal API is running')
})

app.use('/reg',regrouter)
app.use('/login',loginRouter)
app.use('/job',jobRouter)
app.use('/jobapply',applyRouter)

mongoose.connect(process.env.mongoUrl)
.then(()=>{console.log('database is connected')})
.catch((err)=>console.log(err.message))







app.listen(3000,()=>{
    console.log('server is running....');
    
})