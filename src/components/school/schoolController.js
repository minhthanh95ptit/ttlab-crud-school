import { getList, getDetailById, createSchool, updateSchoolById, deleteSchoolById} from './schoolService';
import _ from 'lodash';



export async function getAll(req, res){
    try{
        const data = await getList();
        res.json(data);
    }
    catch(error){
        console.log(error);
    }
}

export async function getOne(req, res) {
    const id = req.params.id;
    console.log(id);
    try{
        const data = await getDetailById(id);
        res.json(data);
    }
    catch(err){
        console.log('Error...',err)
    }
}

export async function createNewSchool(req, res){
    try{
        const school = {
            name: _.get(req, 'body.name', ''),
            address: _.get(req, 'body.address', ''),
            phone: _.get(req, 'body.phone', ''),
            email: _.get(req, 'body.email', ''),
            description: _.get(req, 'body.description', '')
        };
        const newSchool = await createSchool(school);
        res.json(newSchool);
    }
    catch(error){
        res.json(error);
    }
}

export async function updateOneSchool(req, res){
    const id = req.params.id;
    try{
        const school = {
            name: _.get(req, 'body.name', ''),
            address: _.get(req, 'body.address', ''),
            phone: _.get(req, 'body.phone', ''),
            email: _.get(req, 'body.email', ''),
            description: _.get(req, 'body.description', '')
        };

        const result = await updateSchoolById(id,school);
        const newSchool = await getDetailById(id);
        if(result){
            res.json(newSchool)
        }
    }
    catch(error){
        res.json(error);
    }
}


export async function deleteOneSchool(req, res){
    const id = req.params.id;
    try{
        const result = await deleteSchoolById(id);

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

