import BaseJoi from '@hapi/joi';
import Extension from '@hapi/joi-date'

const Joi = BaseJoi.extend(Extension);

const validSchema = Joi.object().keys({
    name: Joi.string().max(100).required(),
    address: Joi.string().max(255).allow(null).allow(''),
    phone: Joi.string().max(255).allow(null).allow(''),
    description: Joi.string().max(255).allow(null).allow(''),
});

export async function createValidator(req, res, next) {
    const body = req.body;
    const result = Joi.validate(body, validSchema);
    if(result.error){
        res.json(result.error.details);
        return;
    }
    next();
}
export async function updateValidator(req, res, next) {
    const body = req.body;
    const result = Joi.validate(body, validSchema);
    if(result.error){
        res.json(result.error.details);
        return;
    }
    next();
}
