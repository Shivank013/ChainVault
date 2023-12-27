import React from 'react'
import { createGoverment } from '../../services/operations/GovermentOperations'
import { useForm } from 'react-hook-form'
import { AwesomeButton } from 'react-awesome-button'
import 'react-awesome-button/dist/styles.css'
import '../../App.css'
import { FcKey } from 'react-icons/fc'
import { AiOutlineMail } from 'react-icons/ai'
import { MdPlace } from 'react-icons/md'

function GovSignup() {

  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm()

  const statesOfIndia = [
    'Andhra Pradesh',
    'Arunachal Pradesh',
    'Assam',
    'Bihar',
    'Chhattisgarh',
    'Goa',
    'Gujarat',
    'Haryana',
    'Himachal Pradesh',
    'Jharkhand',
    'Karnataka',
    'Kerala',
    'Madhya Pradesh',
    'Maharashtra',
    'Manipur',
    'Meghalaya',
    'Mizoram',
    'Nagaland',
    'Odisha',
    'Punjab',
    'Rajasthan',
    'Sikkim',
    'Tamil Nadu',
    'Telangana',
    'Tripura',
    'Uttar Pradesh',
    'Uttarakhand',
    'West Bengal',
  ]

  const onSubmit = async (data) => {
    console.log(data)
    const response = await createGoverment(data)
    console.log(response)
  }

  return (
    <div
      class="h-[100vh] flex items-center justify-center  bg-cover bg-center bg-no-repeat bg-fixed "
      style={{
        backgroundImage: `url('https://i.ibb.co/Js9701v/Desktop-2-2.png')`,
      }}
    >

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

        <div class="flex flex-row    max-sm:w-60 sm:w-64 md:w-72 lg:w-80  max-sm:mb-2 sm:mb-2 md:mb-3 lg:mb">
          <label
            htmlFor="state"
            class="flex items-center border-b border-gray-400 py-2"
          >
            <svg
              class="w-6 h-6 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <MdPlace />
            </svg>
            <input
              type="text"
              id="name"
              placeholder="State"
              class="w-full focus:outline-none"
            />
          </label>
          <select
            className="flex items-center border-b border-gray-400 py-2      font-play  font-semibold  "
            name="state"
            id="state"
            {...register('state', { required: true })}
          >
            <option value="">Select a State</option>
            {statesOfIndia.map((state, index) => (
              <option key={index} value={state}>
                {state}
              </option>
            ))}
          </select>
          {errors.state && (
            <p className="  text-sm text-red-500 font-robo">
              This field is required.
            </p>
          )}
        </div>
        <div class="flex flex-col   max-sm:w-60 sm:w-64 md:w-72 lg:w-80 max-sm:mb-2 sm:mb-2 md:mb-3 lg:mb">
          <label
            htmlFor="AccountNumber"
            class="flex items-center border-b border-gray-400 py-2"
          >
            <img
              className="  w-4  mr-4"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/MetaMask_Fox.svg/768px-MetaMask_Fox.svg.png"
              alt="sf"
            ></img>

            <input
              placeholder="AccountNumber"
              class="w-full focus:outline-none"
              type="text"
              name="AccountNumber"
              id="AccountNumber"
              {...register('AccountNumber', { required: true })}
            />
          </label>
          {errors.AccountNumber && (
            <p className="  text-sm text-red-500 font-robo">
              This field is required.
            </p>
          )}
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
              <FcKey />
            </svg>
            <input
              type="password"
              name="PrivateKey"
              id="PrivateKey"
              {...register('PrivateKey', { required: true })}
              placeholder="Account Private Key"
              class="w-full focus:outline-none"
            />
          </label>
          {errors.state && (
            <p className="  text-sm text-red-500 font-robo">
              This field is required.
            </p>
          )}
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
              type="email"
              name="email"
              id="email"
              {...register('email', { required: true })}
              placeholder="Email"
              class="w-full focus:outline-none"
            />
          </label>
          {errors.email && (
            <p className="  text-sm text-red-500 font-robo">
              This field is required.
            </p>
          )}
        </div>

        <AwesomeButton
          // onPress={handleclick}
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

export default GovSignup
