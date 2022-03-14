const Joi = require('joi');

const schema = Joi.object({
 email: Joi.string().required().email(),
 password: Joi.string().required() })
 module.exports=schema;   