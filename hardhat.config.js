/** @type import('hardhat/config').HardhatUserConfig */
require('@nomiclabs/hardhat-waffle')
require('@nomiclabs/hardhat-ethers')

const MYGANACHE_PRIVATE_KEY ='0x5dddda60be694ede0f44cced3d47a83c60219ea12ff41086caeafa4199e44903'
const PRIVATE_KEY = '15b3c0cd3ac484b776c2b1c628c497c8d1d8080cad4e808de9600a750a57df6a'
module.exports = {
  solidity: '0.8.19',

  networks: {
    ganache: {
      url: `HTTP://127.0.0.1:7545`,
      accounts: [`${MYGANACHE_PRIVATE_KEY}`],
    },
    sepolia:{
      url:`https://eth-sepolia.g.alchemy.com/v2/sf39tXYaITLKFylXyF8cTfkWnHRHqbpI`,
      accounts:[`${PRIVATE_KEY}`]
    }
  },
}

//npx hardhat run --network sepolia scripts/deploy.js
