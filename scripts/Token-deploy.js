const { ethers } = require("hardhat");

async function main(){
  const [depolyer] = await ethers.getSigners();
  console.log(`deploying token with the account1:${depolyer.address}`);

  const balance = await depolyer.getBalance();
  console.log(`account balance:${balance.toString()}`);

  const SRToken = await ethers.getContractFactory('SRToken')
  const token = await SRToken.deploy();
   console.log(`Token address:${token.address}`)
}

main().then(()=> process.exit(0)).catch((error)=>{
    console.error(error);
    process.exit(1)
})