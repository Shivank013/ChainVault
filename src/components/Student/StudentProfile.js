import React, { useContext } from 'react'
import SidebarStudent from './SidebarStudent'
import { AppContext } from '../../context/AppContext'
import { useEffect, useState } from 'react'
import CryptoJS from 'crypto-js'
import { useNavigate } from 'react-router-dom'
import date from '../../assets/date.png'
import user from '../../assets/user.png'
import herobg from '../../assets/19197013.jpg'
import phone from '../../assets/phone.png'
import meta from '../../assets/metamask.png'
import email from '../../assets/email.png'
import study from '../../assets/study.png'
import { IoChevronForwardCircleOutline } from 'react-icons/io5'
import './studenthome.css'

function StudentProfile() {
  const { getStudentInfo, account, setDashboardLoading } =
    useContext(AppContext)

  const [data, setData] = useState([])
  const navigate = useNavigate()


  const fetchData = async () => {
    try {
      console.log(account)
      const response = await getStudentInfo(account)
      console.log(response[1])

      const secretKey = 'secret'
      const decryptedBytes = CryptoJS.AES.decrypt(response[1], secretKey)
      const decryptedData = JSON.parse(
        decryptedBytes.toString(CryptoJS.enc.Utf8)
      )

      console.log('----------')
      console.log(decryptedData)
      console.log('===========')

      setData(decryptedData)
      setDashboardLoading(false)
    } catch (error) {
      console.error('Error fetching data:', error)
      setDashboardLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])


  function goto1() {
      navigate('/dashboard/student/my-certificates');
      return null;
  }

  function goto2() {
      console.log("hello ji")
      navigate('/dashboard/student/student-application');
      return null;
  }

  return (
    <div className="   pt-16  flex flex-col">
      <SidebarStudent />
      {data ? (
        <div className="      pl-72 pt-2">
          <div className="w-full overflow-x-hidden">
            <div className=" bg-gradient-to-r from-slate-50 to-white text-black h-[33rem]">
              {/* -------------------hero Section---------- */}
              <section className="px-[4rem] flex flex-row justify-between items-center realtive">
                {/* left box */}
                <div className="flex flex-col pt-2 gap-4">
                  <div className=" pt-4">
                    <span class=" mt-4 text-4xl font-extrabold text-black">Welcome <span class=" bg-clip-text text-6xl text-red-500">{data?.name?.split(' ')[0]}</span></span>
                  </div>
                  <p className="mt-2 font-normal text-[2.3rem]">
                    Personal Details
                  </p>
                  <div className="flex flex-row items-center mt-2">
                    <img src={user} alt="nm" className="w-[2.25rem]" />
                    <p className="font-semibold  text-xl"> - {data.name}</p>
                  </div>
                  <div className="flex flex-row items-center">
                    <img src={meta} alt="nm" className="w-[2.25rem]" />
                    <p className="font-normal  text-lg">
                      {' '}
                      - {data.AccountNumber}
                    </p>
                  </div>
                  <div className="flex flex-row items-center">
                    <img src={email} alt="nm" className="w-[2.25rem]" />
                    <p className="font-normal  text-xl"> - {data.email}</p>
                  </div>
                  <div className="flex flex-row items-center">
                    <img src={phone} alt="nm" className="w-[2.25rem]" />
                    <p className="font-normal  text-lg"> - {data.tel}</p>
                  </div>
                  <div className="flex flex-row items-center">
                    <img src={date} alt="nm" className="w-[2.15rem]" />
                    <p className="font-normal  text-lg"> - {data.date}1</p>
                  </div>
                  <div>
                    <button onClick={goto1} className="px-6 py-2 bg-[#5a4bda]  hover:bg-[#4437b8] rounded-md mt-4 text-white">
                      My Certificates{' '}
                      <IoChevronForwardCircleOutline className=" inline-block text-[1.15rem]" />
                    </button>
                  </div>
                </div>

                {/* Right box */}
                <div>
                  <img
                    src={herobg}
                    alt="nm"
                    className="w-[30rem] study move"
                  ></img>
                </div>
              </section>
            </div>

            <div className="flex justify-end">
              <div className="w-[100%] h-[0.1rem] bg-slate-400 mt-6 "></div>
            </div>
            {/* ---------certificates apply----------- */}

            <section className="relative h-[19rem] bg-slate-200 flex  justify-center items-center mt-6">
              <div className="flex flex-col justify-center items-center ml-[5rem]">
                <div className=" font-semibold text-[1.3rem]">
                  Done with Learning, Apply now for Certificates from Your
                  Institute.
                </div>
                <div>
                  <button onClick={goto2} className="px-6 py-2 bg-[#5a4bda]  hover:bg-[#4437b8] rounded-md mt-4 text-white">
                    Apply Now{' '}
                    <IoChevronForwardCircleOutline className=" inline-block text-[1.15rem]" />
                  </button>
                </div>
              </div>
              <div>
                <img
                  src={study}
                  className="absolute left-[9%] top-[10%] study move"
                  alt="nm"
                />
              </div>
            </section>
          </div>
        </div>
      ) : null}
    </div>
  )
}

export default StudentProfile