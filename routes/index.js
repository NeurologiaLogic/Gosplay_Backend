const defaultRoute = require('./defaultRoute')
const costumeRoute = require('./costumeRoute')
exports.routes = [].concat(
  defaultRoute,
  costumeRoute
)