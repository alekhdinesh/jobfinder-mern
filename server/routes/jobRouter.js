const { jobupload, jobview, viewalljob } = require('../controllers/jobupload')

const router=require('express').Router()

router.post('/jobup',jobupload)
router.get('/getjobs',jobview)
router.get("/viewjobs",viewalljob)


module.exports=router

