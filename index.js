'use strict';
//import dependencies
const {
  server
} = require('@hapi/hapi');
const Joi = require('joi')
const Hapi = require('@hapi/hapi');
const {
  routes
} = require("./routes")
const config = require('./config')


//using a plugin
const init = async () => {
  const server = Hapi.server({
    port: config.port,
    host: config.host
  });
  server.route(routes)

  //cookies
  server.state('username', {
    ttl: null,
    isSecure: true,
    isHttpOnly: true
  });

  await server.start();
  console.log(`server starting at ${server.info.uri}`)
}

process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});

init();