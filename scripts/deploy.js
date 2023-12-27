// const ethers = require('ether')

async function main() {
  const Doc_verification = await ethers.getContractFactory('DocVerification')
  const doc_ver = await Doc_verification.deploy(
    '0xae85ac81cAa5b9D745cC690f890F6eA68c15AA10'
  )
  console.log('Goverment address : ', doc_ver.address)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
