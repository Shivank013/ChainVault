import React, { useState, useEffect,useContext } from 'react'
import ReactConfetti from 'react-confetti'
import Lottie from 'lottie-react'
import vsucess from '../../assets/verifysuccess.json'
import { AppContext } from '../../context/AppContext'
import CryptoJS from 'crypto-js'
import PdfViewer from '../Home/PdfViewer'

const VerifiedSuccessfully = () => {
  const { scanResult,getIpfsHash } = useContext(AppContext);
  const [link, setLink] = useState("");
  const [data,setData] = useState(); 

  useEffect(() => {
    console.log(scanResult);

    const secretKey = 'secret'
    const decryptedBytes = CryptoJS.AES.decrypt(scanResult, secretKey);
    const decryptedData = JSON.parse(decryptedBytes.toString(CryptoJS.enc.Utf8));
    // setData(decryptedData)
    fetchData(decryptedData.studentAccount);

    console.log(decryptedData)
    
  }, [])

  const fetchData = async (p) => {
    const temp = await getIpfsHash(p, scanResult);
    console.log("link mil gai",temp);
    setLink(temp);
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-200 pt-12 relative">
      
      <h1 className="text-3xl font-bold mt-2 mb-4 text-center text-blue-500">
        Certificate Verified Successfully
      </h1>
      <div className=" w-4/6 flex flex-row justify-center items-center mt-4 p-8 bg-white rounded-md shadow-md">
      <div className=' w-[100%] scale-125 ml-2 h-[18rem] overflow-hidden'>
      {
        link?(<PdfViewer pdfUrl={link}/>):(null)
      }
      </div>
      
        <div className="w-full flex items-end justify-end">
          <Lottie className="max-w-full" loop={true} animationData={vsucess} />
        </div>
      </div>
    </div>
  )
}

export default VerifiedSuccessfully
