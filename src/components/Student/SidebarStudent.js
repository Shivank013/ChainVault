import React, { useEffect, useContext } from 'react'
import { AiOutlineHome } from 'react-icons/ai'
import { FiUsers } from 'react-icons/fi'
import { PiCertificate } from "react-icons/pi";
import '../Goverment/Slidebar.css'
import Warning from '../Home/Warning'
import { Link } from 'react-router-dom'
import { AppContext } from '../../context/AppContext'
import { abi } from '../../Abi'
const ethers = require('ethers')

const SidebarStudent = () => {
  const { 
    setAccount, 
    warning, 
    setWarning, 
    result, 
    contractAddress, 
    setContract, 
    setProvider } =
    useContext(AppContext)

  useEffect(() => {
    const provider = new ethers.providers.Web3Provider(window.ethereum)

    const loadProvider = async () => {
      if (provider) {
        window.ethereum.on('chainChanged', () => {
          window.location.reload()
        })

        window.ethereum.on('accountsChanged', () => {
          window.location.reload()
        })
        await provider.send('eth_requestAccounts', [])
        const signer = provider.getSigner()
        const address = await signer.getAddress()
        setAccount(address)
        if(address === result.ac)
        {
          setWarning(false);
        } else {
          setWarning(true);
        }
        console.log(address);
        console.log(result.ac)
        console.log(warning);
        const contract = new ethers.Contract(contractAddress, abi, signer)
        setContract(contract)
        setProvider(provider)
      } else {
        console.error('Metamask is not installed')
      }
    }
    provider && loadProvider()
  }, [])

  return (
    <div className="body z-10">
     {warning && <Warning />}
      <div className="container">
        <div className="navigation">
          <ul>
            <li>
              {/* just a blank list item */}
            </li>
            <li>
              <Link to={'/dashboard/student/student-profile'}>
                <span className="icon">
                  <AiOutlineHome className="iccon" />
                </span>
                <span class="title">Student profile</span>
              </Link>
            </li>
            <li>
              <Link to={'/dashboard/student/student-application'}>
                <span className="icon">
                  <FiUsers className="iccon" />
                </span>
                <span class="title">Application</span>
              </Link>
            </li>
            <li>
              <Link to={'/dashboard/student/my-certificates'}>
                <span className="icon">
                  <PiCertificate className="iccon" />
                </span>
                <span class="title">My Certificates</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default SidebarStudent
