const SchoolModel = require('./../../../models/School')

module.exports.getList = () =>{
    const rawData = SchoolModel.findAll({});
    return rawData;
}

module.exports.getDetailById = (id) =>{
    const rawData = SchoolModel.findOne({
        where:{
            id
        }
    });
    return rawData;
}

module.exports.createSchool = (school) =>{
    const rawData = SchoolModel.create(school)
    return rawData;
}

module.exports.updateSchoolById = (id, school) =>{
    const result = SchoolModel.update(school,{
        where:{
            id
        }
    });
    // console.log(rawData);
    return result;
}

module.exports.deleteSchoolById = (id) =>{
    const result = SchoolModel.destroy({
        where:{
            id
        }
    })
    return result;
}
