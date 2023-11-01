const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema({
    coursename : {
        type : String,
    },
    courselname : {
        type : String,
    },
    courseemail : {
        type : String,
        require : true,
        unique : true,
    },
    coursesub : {
        type : String,
        require : true,
    },
    address : {
        type : String,
    }
    },  {timestamps : true

})

module.exports = mongoose.model('Student',studentSchema)
