// const Joi = require('joi')
module.exports = [{
  method: 'GET',
  path: '/he/{name}',
  handler: (request, h) => {
    const name = request.params.name;
    h.state(
      'username',
      'Patrick',
    )
    return 'Hello ' + name + request.state.username
  },
  // options: {
  //   validate: {
  //     payload: Joi.object({
  //       post: Joi.string().max(140)
  //     })
  //   },
  //   response: {
  //     schema: Joi.array().items(bookSchema),
  //     failAction: 'log'
  //   }
  // }
}
]