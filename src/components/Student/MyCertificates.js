import React, { useContext, useEffect, useState, useRef } from 'react'
import { AppContext } from '../../context/AppContext'
import { getCerificates } from '../../services/operations/StudentOperations'
import SidebarStudent from './SidebarStudent'
import CryptoJS from 'crypto-js'
import Share from './Share'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './slider.css'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { IoShareSocialSharp } from "react-icons/io5";
import { PiCertificateBold } from "react-icons/pi";

function MyCertificates() {

  const notApprovedArrowsRef = useRef(null)
  const arrowsRef = useRef(null)

  var settings = {
    arrows: false,
    className: 'center',
    centerMode: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  const { 
    result, 
    account,
    getStudentInfo,
    getIpfsHash,
    showshare, 
    dashboardLoading,
    setShowshare,
    showLink,
    setShowLink } =useContext(AppContext);

  const [data, setData] = useState([])
  const [approvedCertificates, setApprovedCertificates] = useState([]);
  const secretKey = 'secret';
  const [decryptedDataArray, setDecryptedDataArray] = useState([]);
  var notApprovedCount = 0;


  const fetchData = async () => {
    try {
      // not approved certificates
      console.log(result.id)
      const response1 = await getCerificates(result.id)
      console.log("count: ",notApprovedCount)

      console.log("ab to y aa raha h ",response1.data.Applications)
      setData(response1.data.Applications)


      // approved certificates
      console.log(account);
      const response2 = await getStudentInfo(account);
      console.log(response2[2]);
      setApprovedCertificates(response2[2]);
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }

  const decryptData = async () => {
    try {
        const decryptedArray = approvedCertificates.map((encryptedData) => {
        const bytes = CryptoJS.AES.decrypt(encryptedData, secretKey);
        const decryptedObject = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
        return {
          ...decryptedObject,
          ed: encryptedData,
        };
      });

      console.log("Decrypted Array:", decryptedArray);

      setDecryptedDataArray(decryptedArray);
    } catch (error) {
      console.error('Error decrypting data:', error);
    }
  }

  function DownloadButton({ ed, fileName }) {
    const handleDownload = async () => {
      try {
        console.log("this is ed")
        console.log(ed)

        const fileLink = await getIpfsHash(account, ed);

        const response = await fetch(fileLink);
        const data = await response.blob();
  
        const link = document.createElement('a');
        link.href = window.URL.createObjectURL(new Blob([data], { type: 'application/pdf' }));
        link.download = fileName + 'Certificate.pdf' || 'downloaded-file.pdf';
  
        document.body.appendChild(link);
        link.click();
  
        document.body.removeChild(link);
      } catch (error) {
        console.error('Error downloading file:', error);
      }
    };
  
    return (
      <button
       class="bg-gradient-to-r  from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150"
       onClick={handleDownload}>
        Download
      </button>
    );
  }

  const Shareing = async (ed) =>{
    console.log("this is ed")
    console.log(ed)

    const fileLink = await getIpfsHash(account, ed);
    console.log(fileLink);

    setShowLink(fileLink);
    setShowshare(true);

  } 

  useEffect(() => {
    fetchData()
  }, [result.id])

  useEffect(() => {
    decryptData();
  }, [approvedCertificates]);

  return (
    <div className="  overflow-y-hidden overflow-x-hidden pb-10 pt-16   flex flex-col">
      <SidebarStudent />
      <div className="  pl-72 pt-7">
      {showshare && <Share/>}
        <div>
          <h2 class=" font-semibold font-inter ml-10 text-6xl mb-12 m-2">My Certificates...</h2>
          <div>
            {dashboardLoading ? (
              <div>Loading...</div>
            ) : (
              <div>

              <div className='deep'>
              <h1 class=" mt-4 p-6 bg-slate-100 text-5xl text-center font-extrabold text-slate-500">Approved <span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Certificates</span></h1>

               <Slider ref={arrowsRef} {...settings} className=' overflow-y-hidden h-96'>
               {decryptedDataArray.map((certificate, index) => (
                        <div
                          key={index}
                          class="certificate-item relative  group duration-500 cursor-pointer group overflow-hidden  text-gray-50 h-72 w-60 mb-20  m-0  rounded-2xl hover:duration-700 "
                        >
                          <div class="w-60 h-72 mb-32 rounded-xl bg-gradient-to-r from-orange-600 to-orange-500 text-gray-800">
                            <div class="flex flex-row justify-between">
                              
                            </div>


                            <h1 class="mb-4 pl-2 pt-1 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-5xl dark:text-white">
                              {' '}
                              {certificate.courseName}
                            </h1>

                            <div className="    pl-2 font-semibold font-play mt-5 ">
                              <span className="pl-3   font-extrabold   font-robo">
                                Student :
                              </span>

                              {certificate.StudentName}
                            </div>
                            <div className="    pl-2 font-semibold font-play mt-2 ">
                              <span className="pl-3   font-extrabold   font-robo">
                                Institute :
                              </span>

                              {certificate.instituteName}
                              {/* {item.instituteName} */}
                            </div>
                            <div className="    pl-2 font-semibold font-play mt-2 ">
                              <span className="pl-3   font-extrabold   font-robo">
                                AppliedAt :
                              </span>

                              {certificate.AppliedAt}
                            </div>
                          </div>

                          <div class="absolute bg-slate-100 -bottom-24 w-60 p-3 flex border-t-4 border-black flex-col gap-1 group-hover:-bottom-0 group-hover:duration-600 duration-500">
                            <span class=" text-richblack-900 flex items-center gap-2 font-bold text-xs">
                              CERTIFICATE{<PiCertificateBold className=' text-xl text-red-600'/>}
                            </span>
                            <span class=" text-orange-500 font-robo font-bold    text-lg">
                              Download And Share
                            </span>

                            <div className=" flex flex-row   justify-evenly">
                              <DownloadButton
                                ed={certificate.ed}
                                fileName={certificate.courseName}
                              />
                              <button
                                onClick={() => Shareing(certificate.ed)}
                                class="bg-gradient-to-r ml-1 flex justify-center items-center gap-1  from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150"
                                type="submit"
                              >
                                Share {<IoShareSocialSharp/>}
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
               </Slider>
               {
                decryptedDataArray.length>3 ? (
                  <div className="buttons">
                      <button
                        onClick={() => arrowsRef.current.slickPrev()}
                        className="button back"
                      >
                        <IoIosArrowBack />
                      </button>
                      <button
                        onClick={() => arrowsRef.current.slickNext()}
                        className="button for mr-4"
                      >
                        <IoIosArrowForward />
                      </button>
               </div>
                ):(null)
               }
                </div>

              <div className='deep'>
                 <h1 class=" mt-4 p-6 bg-slate-100 text-5xl text-center font-extrabold text-slate-500">Certificates for <span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Approval</span></h1>
                <Slider ref={notApprovedArrowsRef} {...settings} className=' overflow-y-hidden h-96'>
                
                {data.map((item) => (
                      <div key={item.StudentName}>
                          <div class="  relative mb-32 group duration-500 cursor-pointer group overflow-hidden  text-gray-50 h-72 w-60 rounded-2xl hover:duration-700">
                            <div class="w-60 h-72 rounded-xl bg-gradient-to-r from-orange-600 to-orange-500 text-gray-800">
                              <div class="flex flex-row justify-between">
                              
                              </div>

                              <h1 class="mb-4 pl-2 pt-1 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl lg:text-5xl dark:text-white">
                                {' '}
                                {item.courseName}
                              </h1>

                              <div className="    pl-2 font-semibold font-play mt-5 ">
                                <span className="pl-3   font-extrabold   font-robo">
                                  Student :
                                </span>
                                {item.StudentName}
                              </div>
                              <div className="    pl-2 font-semibold font-play mt-2 ">
                                <span className="pl-3   font-extrabold   font-robo">
                                  Institute :
                                </span>
                                {item.instituteName}
                              </div>
                              <div className="    pl-2 font-semibold font-play mt-2 ">
                                <span className="pl-3   font-extrabold   font-robo">
                                  AppliedAt :
                                </span>
                                {item.AppliedAt.substring(2, 10)}
                              </div>
                            </div>

                            <div class="absolute border-t-4 border-black bg-slate-100 -bottom-24 w-60 p-3 flex flex-col gap-1 group-hover:-bottom-0 group-hover:duration-600 duration-500">
                              <span class=" text-richblack-900 pb-2 font-bold text-xs">
                                CERTIFICATE
                              </span>
                              <span class=" text-red-600 font-robo font-bold    text-lg">
                               Approval Pending
                              </span>
                              <p class="text-neutral-800   font-bold    font-inter">
                                your application is not approved
                              </p>
        
                            </div>
                          </div>
                  
                      </div>
                    ))}
                </Slider>
                {
                  data.length>3 ? (
                    <div className="buttons">
                    <button
                      onClick={() => notApprovedArrowsRef.current.slickPrev()}
                      className="button back bg-slate-300"
                    >
                      <IoIosArrowBack />
                    </button>
                    <button
                      onClick={() => notApprovedArrowsRef.current.slickNext()}
                      className="button for mr-4"
                    >
                      <IoIosArrowForward />
                    </button>
                </div>
                  ) : (null)
                }
                
              </div>
                
                

              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyCertificates