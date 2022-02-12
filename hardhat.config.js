require("@nomiclabs/hardhat-waffle");
let secret = require('./secret.json');
require("@nomiclabs/hardhat-etherscan")
// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.7",
  networks:{
    bsctestnet:{
      url: secret.url,
      accounts: [secret.P_key],
      chainId: 97,
      gasPrice: 20000000000,
     }
   },
   etherscan:{
     apiKey:"JW5Z1USCQZHWCMHXQ2FU4YPPFHGP27YWJQ"
   }

    

  
};
