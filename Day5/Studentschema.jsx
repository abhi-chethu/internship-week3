const mongoose = require('mongoose')
const studentSchema = new mongoose.Schema({
  fname:{ // method
    type : String, // datatype
    required:true, // 
  }, 

  lname:{
    type:String,
},
email:{
    type:String,
    require:true,
    unique:true,
},
password:{
  type : String,
  required: true,

},
 mobile:{
  type : Number,
  required : true,
 },
 address:{
  type:String,
 }
},
{timestamps : true
})
module.exports = mongoose.model('Student',studentSchema)
