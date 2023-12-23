/** @type import('hardhat/config').HardhatUserConfig */
require('@nomiclabs/hardhat-waffle')
require('@nomiclabs/hardhat-ethers')

const MYGANACHE_PRIVATE_KEY =
  '0x5dddda60be694ede0f44cced3d47a83c60219ea12ff41086caeafa4199e44903'

module.exports = {
  solidity: '0.8.19',

  networks: {
    ganache: {
      url: `HTTP://127.0.0.1:7545`,
      accounts: [`${MYGANACHE_PRIVATE_KEY}`],
    },
  },
}

//npx hardhat run --network sepolia scripts/deploy.js
