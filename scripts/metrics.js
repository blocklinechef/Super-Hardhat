const ethers = require("ethers");

const customProvider = new ethers.providers.WebSocketProvider("ws://localhost:8545");

customProvider.on("pending", (tx) => {
  customProvider.getTransaction(tx).then(function (transaction) {
    console.log(transaction);
  });
});
