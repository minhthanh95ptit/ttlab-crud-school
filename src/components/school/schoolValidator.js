const BaseJoi = require('@hapi/joi');
const Extension = require('@hapi/joi-date');

const Joi = BaseJoi.extend(Extension);

const validSchema = Joi.object().keys({
    name: Joi.string().max(100).required(),
    address: Joi.string().max(255).allow(null).allow(''),
    phone: Joi.string().max(255).allow(null).allow(''),
    description: Joi.string().max(255).allow(null).allow(''),
});

module.exports.createValidator = async (req, res, next) =>{
    const body = req.body;
    const result = Joi.validate(body, validSchema);
    if(result.error){
        res.json(result.error.details);
        return;
    }
    next();
}
module.exports.updateValidator = async (req, res, next) => {
    const body = req.body;
    const result = Joi.validate(body, validSchema);
    if(result.error){
        res.json(result.error.details);
        return;
    }
    next();
}
