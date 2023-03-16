require('dotenv').config();

module.exports = {
  SERVER_HOST: process.env.SERVER_HOST,
  SERVER_PORT: process.env.SERVER_PORT,
  CACHE_HOST: process.env.CACHE_HOST,
  CACHE_PORT: process.env.CACHE_PORT,
  mongodbUri: process.env.MONGODB_URI,
  mongodbDatabase: process.env.MONGODB_DATABASE,
  rajaOngkir: process.env.RAJA_ONGKIR,
  merchantIdSandbox: process.env.MERCHANT_ID_SANDBOX,
  clientKeySandbox: process.env.CLIENT_KEY_SANDBOX,
  serverKeySandbox: process.env.SERVER_KEY_SANDBOX,
}