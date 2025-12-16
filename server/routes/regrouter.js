const { registration } = require('../controllers/userreg')

const router=require('express').Router()

router.post('/registerData',registration)






module.exports=router