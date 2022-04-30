/* eslint-disable prettier/prettier */
require("dotenv").config();
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan");
require("@nomiclabs/hardhat-waffle");
require("hardhat-gas-reporter");
require("solidity-coverage");
const privateKeyToAddress = require("ethereum-private-key-to-address");
const ethers = require("ethers");
const mainnetURL = `https://speedy-nodes-nyc.moralis.io/${process.env.MORALIS_API_KEY}/eth/mainnet`;
const ropstenURL = `https://speedy-nodes-nyc.moralis.io/${process.env.MORALIS_API_KEY}/eth/ropsten`;
const goerliURL = `https://speedy-nodes-nyc.moralis.io/${process.env.MORALIS_API_KEY}/eth/goerli`;
const rinkebyURL = `https://speedy-nodes-nyc.moralis.io/${process.env.MORALIS_API_KEY}/eth/rinkeby`;
const kovanURL = `https://speedy-nodes-nyc.moralis.io/${process.env.MORALIS_API_KEY}/eth/kovan`;
const bscURL = `https://speedy-nodes-nyc.moralis.io/${process.env.MORALIS_API_KEY}/bsc/mainnet`;
const bscTestnetURL = `https://speedy-nodes-nyc.moralis.io/${process.env.MORALIS_API_KEY}/bsc/testnet`;
const polygonURL = `https://speedy-nodes-nyc.moralis.io/${process.env.MORALIS_API_KEY}/polygon/mainnet`;
const polygonMumbaiURL = `https://speedy-nodes-nyc.moralis.io/${process.env.MORALIS_API_KEY}/polygon/mumbai`;
const arbitrumOneURL = `https://speedy-nodes-nyc.moralis.io/${process.env.MORALIS_API_KEY}/arbitrum/mainnet`;
const arbitrumTestnetURL = `https://speedy-nodes-nyc.moralis.io/${process.env.MORALIS_API_KEY}/arbitrum/testnet`;
const avalancheURL = `https://speedy-nodes-nyc.moralis.io/${process.env.MORALIS_API_KEY}/avalanche/mainnet`;
const avalancheFujiTestnetURL = `https://speedy-nodes-nyc.moralis.io/${process.env.MORALIS_API_KEY}/avalanche/testnet`;
const operaURL = `https://speedy-nodes-nyc.moralis.io/${process.env.MORALIS_API_KEY}/fantom/mainnet`;

const mainnetProvider = new ethers.providers.JsonRpcProvider(mainnetURL);
const ropstenProvider = new ethers.providers.JsonRpcProvider(ropstenURL);
const goerliProvider = new ethers.providers.JsonRpcProvider(goerliURL);
const rinkebyProvider = new ethers.providers.JsonRpcProvider(rinkebyURL);
const kovanProvider = new ethers.providers.JsonRpcProvider(kovanURL);
const bscProvider = new ethers.providers.JsonRpcProvider(bscURL);
const bscTestnetProvider = new ethers.providers.JsonRpcProvider(bscTestnetURL);
const polygonProvider = new ethers.providers.JsonRpcProvider(polygonURL);
const polygonMumbaiProvider = new ethers.providers.JsonRpcProvider(polygonMumbaiURL);
const arbitrumOneProvider = new ethers.providers.JsonRpcProvider(arbitrumOneURL);
const arbitrumTestnetProvider = new ethers.providers.JsonRpcProvider(arbitrumTestnetURL);
const avalancheProvider = new ethers.providers.JsonRpcProvider(avalancheURL);
const avalancheFujiTestnetProvider = new ethers.providers.JsonRpcProvider(avalancheFujiTestnetURL);
const operaProvider = new ethers.providers.JsonRpcProvider(operaURL);
// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

task("balance", "Prints the balance of your account.", async () => {
  const account = privateKeyToAddress(process.env.PRIVATE_KEY);
  const mainnetBalance = await mainnetProvider.getBalance(account);
  const ropstenBalance = await ropstenProvider.getBalance(account);
  const goerliBalance = await goerliProvider.getBalance(account);
  const rinkebyBalance = await rinkebyProvider.getBalance(account);
  const kovanBalance = await kovanProvider.getBalance(account);
  const bscBalance = await bscProvider.getBalance(account);
  const bscTestnetBalance = await bscTestnetProvider.getBalance(account);
  const polygonBalance = await polygonProvider.getBalance(account);
  const polygonMumbaiBalance = await polygonMumbaiProvider.getBalance(account);
  const arbitrumOneBalance = await arbitrumOneProvider.getBalance(account);
  const arbitrumTestnetBalance = await arbitrumTestnetProvider.getBalance(account);
  const avalancheBalance = await avalancheProvider.getBalance(account);
  const avalancheFujiTestnetBalance = await avalancheFujiTestnetProvider.getBalance(account);
  const operaBalance = await operaProvider.getBalance(account);

  console.log(`Mainnet Balance: ${ethers.utils.formatEther(mainnetBalance)} ETH`);
  console.log(`Ropsten Balance: ${ethers.utils.formatEther(ropstenBalance)} ETH`);
  console.log(`Goerli Balance: ${ethers.utils.formatEther(goerliBalance)} ETH`);
  console.log(`Rinkeby Balance: ${ethers.utils.formatEther(rinkebyBalance)} ETH`);
  console.log(`Kovan Balance: ${ethers.utils.formatEther(kovanBalance)} ETH`);
  console.log(`BSC Balance: ${ethers.utils.formatEther(bscBalance)} ETH`);
  console.log(`BSC Testnet Balance: ${ethers.utils.formatEther(bscTestnetBalance)} ETH`);
  console.log(`Polygon Balance: ${ethers.utils.formatEther(polygonBalance)} ETH`);
  console.log(`Polygon Mumbai Balance: ${ethers.utils.formatEther(polygonMumbaiBalance)} ETH`);
  console.log(`Arbitrum One Balance: ${ethers.utils.formatEther(arbitrumOneBalance)} ETH`);
  console.log(`Arbitrum Testnet Balance: ${ethers.utils.formatEther(arbitrumTestnetBalance)} ETH`);
  console.log(`Avalanche Balance: ${ethers.utils.formatEther(avalancheBalance)} ETH`);
  console.log(`Avalanche Fuji Testnet Balance: ${ethers.utils.formatEther(avalancheFujiTestnetBalance)} ETH`);
  console.log(`Opera Balance: ${ethers.utils.formatEther(operaBalance)} ETH`);
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  networks: {
    mainnet: {
      url: mainnetURL,
      accounts: [process.env.PRIVATE_KEY] || "",
    },
    ropsten: {
      url: ropstenURL,
      accounts: [process.env.PRIVATE_KEY] || "",
    },
    goerli: {
      url: goerliURL,
      accounts: [process.env.PRIVATE_KEY] || "",
    },
    rinkeby: {
      url: rinkebyURL,
      accounts: [process.env.PRIVATE_KEY] || "",
    },
    kovan: {
      url: kovanURL,
      accounts: [process.env.PRIVATE_KEY] || "",
    },
    bsc: {
      url: bscURL,
      accounts: [process.env.PRIVATE_KEY] || "",
    },
    bscTestnet: {
      url: bscTestnetURL,
      accounts: [process.env.PRIVATE_KEY] || "",
    },
    polygon: {
      url: polygonURL,
      accounts: [process.env.PRIVATE_KEY] || "",
    },
    polygonMumbai: {
      url: polygonMumbaiURL,
      accounts: [process.env.PRIVATE_KEY] || "",
    },
    arbitrumOne: {
      url: arbitrumOneURL,
      accounts: [process.env.PRIVATE_KEY] || "",
    },
    arbitrumTestnet: {
      url: arbitrumTestnetURL,
      accounts: [process.env.PRIVATE_KEY] || "",
    },
    avalanche: {
      url: avalancheURL,
      accounts: [process.env.PRIVATE_KEY] || "",
    },
    avalancheFujiTestnet: {
      url: avalancheFujiTestnetURL,
      accounts: [process.env.PRIVATE_KEY] || "",
    },
    opera: {
      url: operaURL,
      accounts: [process.env.PRIVATE_KEY] || "",
    },
  },
  gasReporter: {
    enabled: process.env.REPORT_GAS !== undefined,
    currency: "USD",
  },
  etherscan: {
    apiKey: {
      // ethereum
      mainnet: process.env.ETHERSCAN_API_KEY,
      ropsten: process.env.ETHERSCAN_API_KEY,
      rinkeby: process.env.ETHERSCAN_API_KEY,
      goerli: process.env.ETHERSCAN_API_KEY,
      kovan: process.env.ETHERSCAN_API_KEY,
      // binance smart chain
      bsc: process.env.BSCSCAN_API_KEY,
      bscTestnet: process.env.BSCSCAN_API_KEY,
      // fantom mainnet
      opera: process.env.FTMSCAN_API_KEY,
      ftmTestnet: process.env.FTMSCAN_API_KEY,
      // optimism
      optimisticEthereum: process.env.OPTIMISTIC_ETHERSCAN_API_KEY,
      optimisticKovan: process.env.OPTIMISTIC_ETHERSCAN_API_KEY,
      // polygon
      polygon: process.env.POLYGONSCAN_API_KEY,
      polygonMumbai: process.env.POLYGONSCAN_API_KEY,
      // arbitrum
      arbitrumOne: process.env.ARBISCAN_API_KEY,
      arbitrumTestnet: process.env.ARBISCAN_API_KEY,
      // avalanche
      avalanche: process.env.SNOWTRACE_API_KEY,
      avalancheFujiTestnet: process.env.SNOWTRACE_API_KEY,
    },
  },
};
