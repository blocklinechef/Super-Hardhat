const ethers = require("ethers");

const nethermind = new ethers.providers.WebSocketProvider("ws://localhost:8545");

const apecoinABI = new ethers.utils.Interface(["event Transfer(address indexed from, address indexed to, uint256 amount)"]);

const apecoin = new ethers.Contract("0x4d224452801ACEd8B2F0aebE155379bb5D594381", apecoinABI, nethermind);

function tx() {
  console.log(apecoin.address);
}

tx();
