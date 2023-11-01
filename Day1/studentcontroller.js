const studentModel = require('../models/studentsModels');
const {validEmail,validPass,validPhone}= require('../validation/valid')
const createStudent = async function(req,res){
  try{
  let student = req.body;
  let{ fname,lname,email,password,mobile,address}=student;

  //validation
 if (!fname || !lname || !email || !password || !mobile|| !address){
 return res.send({ message: "please provide all info "})
 }
if (!validEmail)return res.send({message:"please enter valid email"})
if (!validPass)return res.send({message:"please enter valid passward"})
if (!validPhone)return res.send({message:"please enter valid phone no"})

// unique validation
let uniqueEmail = await studentModel.findOne({email})
if(uniqueEmail) return res.send({message:"Email already exist "})
let uniquePhone = await studentModel.findOne({mobile})
if(uniquePhone) return res.send({message:"Email already exist "})



  let createStu =await studentModel.create(student)
  return res.send({message: createStu})
}catch(err){
  console.log(err)
}
}

module.exports.createStudent =createStudent;
