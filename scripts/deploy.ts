import { ethers } from "hardhat";

async function main() {
  
  
  // deploy first contract w/o lib
  const Erc20Factory = await ethers.getContractFactory("MockERC20");
  const erc20a = await Erc20Factory.deploy();
  await erc20a.deployed();
  
  // deploy second contract w/ deployed lib
  const libFactory = await ethers.getContractFactory("MockLibrary");
  const lib = await libFactory.deploy();
  await lib.deployed();
  const Erc20WithLibFactory = await ethers.getContractFactory(
    "MockERC20WithLib",
    {libraries: {MockLibrary: lib.address}}
  );
  const erc20WithLib = await Erc20WithLibFactory.deploy();
  await erc20WithLib.deployed();

  // deploy third contract w/o lib
  const erc20b = await Erc20Factory.deploy();
  await erc20b.deployed();
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
