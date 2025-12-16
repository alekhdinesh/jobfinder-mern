const { loginuser } = require('../controllers/loginuser')
const { route } = require('./regrouter')

const router=require('express').Router()


router.post('/loggedData',loginuser)






module.exports=router