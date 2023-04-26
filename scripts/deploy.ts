import { ethers } from "hardhat";

async function main() {
  
  // deploy first contract w/o lib
  const Erc20AFactory = await ethers.getContractFactory("MockERC20A");
  const erc20A = await Erc20AFactory.deploy();
  await erc20A.deployed();
  
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
  const Erc20BFactory = await ethers.getContractFactory("MockERC20B");
  const erc20B = await Erc20BFactory.deploy();
  await erc20B.deployed();
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
