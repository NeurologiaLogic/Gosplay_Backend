const Joi = require('joi');
exports.bookSchema = Joi.object({
  title: Joi.string().required(),
  author: Joi.string().required(),
  isbn: Joi.string().length(10),
  pageCount: Joi.number(),
  datePublished: Joi.date().iso()
});