'use strict';
//import dependencies
const Hapi = require('@hapi/hapi');
const {
  routes
} = require("./routes")
const Config = require('./config/index.js')
//authentication
const {
  validate
} = require('./utils/validateAccount')


const Database = require('./database/MongoDB')

const add = (a, b) => a + b

const CatboxRedis = require('@hapi/catbox-redis');



//starting server
const init = async () => {
  Database.makeConnection()
  const server = Hapi.server({
    port: Config.SERVER_PORT,
    // cache:
    //   {
    //       name: 'my_cache',
    //       provider: {
    //           constructor: CatboxRedis,
    //           options: {
    //               partition : 'my_cached_data',
    //               host: 'redis',
    //               port: 6379,
    //               database: 0,
    //               tls: {}
    //           }
    //       }
    //   }
  });
  await server.register(require('@hapi/basic'));
  server.auth.strategy('simple', 'basic', {
    validate
  });
  // server.auth.default('simple');
  server.route(routes)
  // server.method(methods)
  server.method('sum', add, {
    cache: {
      expiresIn: 10 * 1000,
      generateTimeout: 2000,
    },
  });
  server.route({
    method: 'GET',
    path: '/sum',
    handler: async (request, h) => {
      const result = await server.methods.sum(1, 2);
      return result;
    }
  })
  //err end
  //cookies
  server.state('user', {
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