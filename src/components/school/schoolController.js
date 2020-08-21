const SchoolService = require('./schoolService');
const _ = require('lodash');


module.exports.getList = async (req, res) =>{
    try{
        const data = await SchoolService.getList();
        res.json(data);
    }
    catch(error){
        console.log(error);
    }
}

module.exports.getDetailById = async (req, res) => {
    const id = req.params.id;
    console.log(id);
    try{
        const data = await SchoolService.getDetailById(id);
        res.json(data);
    }
    catch{
        console.log('Error...')
    }
}

module.exports.createSchool = async (req, res) => {
    try{
        const school = {
            name: _.get(req, 'body.name', ''),
            address: _.get(req, 'body.address', ''),
            phone: _.get(req, 'body.phone', ''),
            email: _.get(req, 'body.email', ''),
            description: _.get(req, 'body.description', '')
        };
        const newSchool = await SchoolService.createSchool(school);
        res.json(newSchool);
    }
    catch(error){
        res.json(error);
    }
}

module.exports.updateSchoolById = async (req, res) =>{
    const id = req.params.id;
    try{
        const school = {
            name: _.get(req, 'body.name', ''),
            address: _.get(req, 'body.address', ''),
            phone: _.get(req, 'body.phone', ''),
            email: _.get(req, 'body.email', ''),
            description: _.get(req, 'body.description', '')
        };
        const result = await SchoolService.updateSchoolById(id,school);
        const newSchool = await SchoolService.getDetailById(id);
        if(result){
            res.json(newSchool)
        }
    }
    catch(error){
        res.json(error);
    }
}



module.exports.deleteSchoolById = async (req, res) =>{
    const id = req.params.id;
    try{
        const result = await SchoolService.deleteSchoolById(id);

        if(result){
            res.json("Success")
        }
        else{
            res.json("Fail")
        }
    }
    catch(error){
        res.json(error);
    }
}

