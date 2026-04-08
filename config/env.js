require('dotenv').config();

module.exports = {
port: process.env.PORT,
rpcUrl: process.env.RPC_URL,
privateKey: process.env.PRIVATE_KEY
};
