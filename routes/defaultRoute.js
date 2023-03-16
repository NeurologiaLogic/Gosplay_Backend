module.exports = [{
    method: 'GET',
    path: '/',
    options:{
      auth:'simple'
    },
    handler: (request, h) => {
      return 'Hello World!';
    },
  }
]