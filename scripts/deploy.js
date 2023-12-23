// const ethers = require('ether')

async function main() {
  const Doc_verification = await ethers.getContractFactory('DocVerification')
  const doc_ver = await Doc_verification.deploy(
    '0x1095871eAaC35217dC88Ba8c6588A623f8F092B1'
  )
  console.log('Goverment address : ', doc_ver.address)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
