const config = require("../config/index.js");
const mongoose = require("mongoose");

function makeConnection() {
  mongoose
    .connect(config.mongodbUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((client) => {
      return client.connection.getClient();
    })
    .catch((e) => {
      console.log(err);
    });
}
module.exports = { makeConnection };
