const Web3 = require('web3');
const testnet = 'https://ropsten.infura.io/';
const walletAddress = '0x8690F1feff62008A396B31c2C3f380bD0Ca6d8b8';

const web3 = new Web3(new Web3.providers.HttpProvider(testnet));
//const web3 = new Web3(Web3.givenProvider || "ws://localhost:8545");
console.log(Web3.eth.getAccounts())