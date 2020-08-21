import SchoolModel from '../../models/School'

export function getList(){
    const rawData = SchoolModel.findAll({});
    return rawData;
}

export function getDetailById(id){
    const rawData = SchoolModel.findOne({
        where:{
            id
        }
    });
    return rawData;
}

export function createSchool(school){
    const rawData = SchoolModel.create(school)
    return rawData;
}

export function updateSchoolById(id, school){
    const result = SchoolModel.update(school,{
        where:{
            id
        }
    });
    return result;
}
export function deleteSchoolById(id){
    const result = SchoolModel.destroy({
        where:{
            id
        }
    })
    return result;
}
