const Joi = require('joi')

exports.costume={
  name: Joi.string().required(),
}