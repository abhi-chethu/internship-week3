const express = require('express')
const router=express.Router()
const {createStudent } = require('../controller/studentControl')

//router method
router.get('/',(req,res)=>{
   res.send("Router Method !!")
})
//router for create
router.post('/student',createStudent) //POST method for create

module.exports=router;
