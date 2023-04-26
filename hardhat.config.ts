import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import * as dotenv from "dotenv";
import * as tdly from "@tenderly/hardhat-tenderly";

dotenv.config();
tdly.setup({ automaticVerifications: true });

const config: HardhatUserConfig = {
  solidity: "0.8.17",
  networks: {
    tenderly: {
      url: process.env.TENDERLY_RPC_URL,
      accounts: [`${process.env.PRIVATE_KEY_DEPLOY}`]
    }
  },
  tenderly: {
    username: `${process.env.TENDERLY_USERNAME}`,
    project: `${process.env.TENDERLY_PROJECT}`,
    privateVerification: false
  }
};

export default config;
