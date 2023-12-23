import React, { useEffect, useContext } from 'react'
import { AiFillApple } from 'react-icons/ai'
import { AiOutlineHome } from 'react-icons/ai'
import { FiUsers } from 'react-icons/fi'
import { BsChat } from 'react-icons/bs'
import { BsQuestionLg } from 'react-icons/bs'
import { AiOutlineSetting } from 'react-icons/ai'
import { BiLockAlt } from 'react-icons/bi'
import { PiSignInBold } from 'react-icons/pi'
import '../Goverment/Slidebar.css'

import { Link } from 'react-router-dom'
import { AppContext } from '../../context/AppContext'
import { abi } from '../../Abi'
const ethers = require('ethers')

const SidebarStudent = () => {
  const { account, setAccount, contractAddress, setContract, setProvider } =
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
    <div className="body">
      <div className="container">
        <div className="navigation">
          <ul>
            <li>
              <a href="#">
                <span className="icon">
                  <AiFillApple className="iccon" />
                </span>
                <span class="title">Brand Name</span>
              </a>
              <p>StudDashboard Acc: {account}</p>
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
                  <BsChat className="iccon" />
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
