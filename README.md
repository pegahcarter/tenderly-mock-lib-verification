# Sample Hardhat Project

### Steps to reproduce
- Create an Optimism fork from the tenderly dashboard used a previously indexed block
- Set your .env
- `npm install`
- `npx hardhat run scripts/deploy.ts --network tenderly`

All of your contracts will deploy, but anything deployed after verifying a contract with external libraries will not verify.  If you follow these steps you will see when you go to the verified contracts on the Tenderly dashboard that ERC20B was not successfully verified.
