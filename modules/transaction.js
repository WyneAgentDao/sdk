const Web3 = require('web3');
const { rpcUrl, privateKey } = require('../config/env');

const web3 = new Web3(rpcUrl);

async function sendTransaction(to, value) {
const account = web3.eth.accounts.privateKeyToAccount(privateKey);

const tx = {
to,
value: web3.utils.toWei(value, 'ether'),
gas: 21000
};

const signed = await account.signTransaction(tx);
return web3.eth.sendSignedTransaction(signed.rawTransaction);
}

module.exports = { sendTransaction };
