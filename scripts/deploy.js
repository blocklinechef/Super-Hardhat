/* eslint-disable prettier/prettier */
// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
require("dotenv").config();
const hre = require("hardhat");

async function main() {
  const contractName = process.env.CONTRACT_NAME;
  const constructorArgs = process.env.CONSTRUCTOR_ARGUMENTS;
  console.log(constructorArgs);
  const Factory = await hre.ethers.getContractFactory(contractName);
  const factory = await Factory.deploy(constructorArgs);
  await factory.deployed();
  console.log(`${process.env.CONTRACT_NAME} deployed to:`, factory.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
