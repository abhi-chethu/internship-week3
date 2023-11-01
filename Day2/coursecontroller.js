const course

const createCourse = async function (req,res) {
 try {
    let course = req.body;
    let { coursecode, name, dscription,students } = course;

    let uniqeCode = await courseModel.findOne({coursecode})
    if(uniqeCode) return res.send({message: corsecreate})
    
 }
}
