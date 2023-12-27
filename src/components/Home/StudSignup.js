import React, { useEffect, useContext } from 'react'
import { useForm } from 'react-hook-form'
import { createStudent } from '../../services/operations/StudentOperations'
import { AppContext } from '../../context/AppContext'
import CryptoJS from 'crypto-js'
import { abi } from '../../Abi'
import { AiOutlineMail } from 'react-icons/ai'
import { FcContacts } from 'react-icons/fc'
import { BiSolidInstitution } from 'react-icons/bi'
import { AwesomeButton } from 'react-awesome-button'
import 'react-awesome-button/dist/styles.css'
import '../../App.css'

const { ethers } = require('ethers')

function StudSignup() {

  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm()
  const { registerStudent } = useContext(AppContext)

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

  const onSubmit = async (data) => {
    try {
      data.AccountNumber = account
      console.log(data)
      const response1 = await createStudent(data)
      console.log(response1)
      const secretKey = 'secret'

      const encryptedData = CryptoJS.AES.encrypt(
        JSON.stringify(data),
        secretKey
      ).toString()
      
      const _studentAddress = data.AccountNumber
      const _studentData = encryptedData
       await registerStudent(_studentAddress,_studentData);
       window.location.href = '/';
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div
      class="h-[100vh] flex items-center justify-center  bg-cover bg-center bg-no-repeat bg-fixed "
      style={{
        backgroundImage: `url('https://i.ibb.co/Js9701v/Desktop-2-2.png')`,
      }}
    >
      {/* <img class="   h-full w-full object-cover" src={circle} alt="Your Image" /> */}

      <form
        onSubmit={handleSubmit(onSubmit)}
        class=" absolute  sm:top-10 md:top-14 lg:top-28 rounded-xl shadow-2xl  bg-white     max-sm:p-2 sm:p-4   md:p-10   lg:p-12 flex flex-col justify-center items-center mt-20"
      >
        <div className="  flex flex-col mb-4  lg:gap-3 md:gap-2 sm:gap-1 ">
          <h2 class="  sm:text-sm  md:text-lg  lg:text-xl font-bold     font-robo  ">
            Sign Up
          </h2>
          <div className="  flex  items-end       h-[2px]    w-full    bg-red-500"></div>
        </div>

        <div class="flex flex-col   max-sm:w-60 sm:w-64 md:w-72 lg:w-80 max-sm:mb-2 sm:mb-2 md:mb-3 lg:mb">
          <label class="flex items-center border-b border-gray-400 py-2">
            <svg
              class="w-6 h-6 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <BiSolidInstitution />
            </svg>
            {/* <img className='  w-4  mr-4' src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/MetaMask_Fox.svg/768px-MetaMask_Fox.svg.png' alt='sf'></img> */}

            <input
              placeholder="Student Name"
              class="w-full focus:outline-none"
              type="text"
              {...register('name', {
                required: 'Student Name is required',
              })}
            />
          </label>
          {errors.name && <p>{errors.name.message}</p>}
        </div>

        <div class="flex flex-col   max-sm:w-60 sm:w-64 md:w-72 lg:w-80 max-sm:mb-2 sm:mb-2 md:mb-3 lg:mb">
          <label class="flex items-center border-b border-gray-400 py-2">
            <svg
              class="w-6 h-6 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <BiSolidInstitution />
            </svg>
            {/* <img className='  w-4  mr-4' src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/MetaMask_Fox.svg/768px-MetaMask_Fox.svg.png' alt='sf'></img> */}

            <input
              type="tel"
              {...register('tel', {
                required: 'Phone Number is required',
                pattern: {
                  value: /^\d{10}$/,
                  message: 'Please enter a valid phone number (10 digits)',
                },
              })}
              placeholder="Phone number"
              class="w-full focus:outline-none"
            />
          </label>
          {errors.tel && <p>{errors.tel.message}</p>}
        </div>
        <div class="flex flex-col   max-sm:w-60 sm:w-64 md:w-72 lg:w-80 max-sm:mb-2 sm:mb-2 md:mb-3 lg:mb">
          <label
            htmlFor="PrivateKey"
            class="flex items-center border-b border-gray-400 py-2"
          >
            <svg
              class="w-6 h-6 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <FcContacts />
            </svg>
            <input
              type="email"
              {...register('email', { required: 'Email is required' })}
              placeholder="Email"
              class="w-full focus:outline-none"
            />
          </label>
          {errors.email && <p>{errors.email.message}</p>}
        </div>
        <div class="flex flex-col   max-sm:w-60 sm:w-64 md:w-72 lg:w-80 mb-8">
          <label
            htmlFor="email"
            class="flex items-center border-b border-gray-400 py-2"
          >
            <svg
              class="w-6 h-6 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <AiOutlineMail />
            </svg>
            <input
              type="date"
              {...register('date', { required: 'Date of Birth is required' })}
              placeholder="Email"
              class="w-full focus:outline-none"
            />
          </label>
          {errors.date && <p>{errors.date.message}</p>}
        </div>

        <AwesomeButton
          // onPress={onSubmit}
          className=" mb-6  w-28   h-12"
          type="primary"
        >
          Sign up
        </AwesomeButton>

        <p class="text-sm">
          Already have an account?{' '}
          <a href="#" class="text-blue-500">
            Sign In
          </a>
        </p>
      </form>
    </div>
  )
}

export default StudSignup
