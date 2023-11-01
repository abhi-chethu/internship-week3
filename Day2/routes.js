const express = require('express')

const mongoose = require('mongoose')
const { createStudent } = require('../Controller/studentcontrol')
const router = express.Router()

router.get('/',(req,res)=>{
   res.send("Router Method !!")
})

router.post('/create',createStudent)

module.exports = router;
