const { applicationDetails, findAppliedjob, updateStatus, myapplications } = require('../controllers/appli')

const router=require('express').Router()



router.post('/application/:jobid',applicationDetails)
router.get('/findappjob/:id',findAppliedjob)

router.patch('/update/:id',updateStatus)

router.get('/myapp',myapplications)

module.exports=router