import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../context/AppContext'
import { getNonApprovedApplications } from '../../services/operations/InstituteOperations'
import { getStudentData } from '../../services/operations/StudentOperations'
import { approveCertificate } from '../../services/operations/InstituteOperations'
import CertificateSlider from './CertificateSlider'
import SidebarInstitute from './SidebarInstitude'
import CryptoJS from 'crypto-js'
import { BiSolidChevronsDown } from 'react-icons/bi'
import { BiSolidChevronsUp } from 'react-icons/bi'
import { IoMdDoneAll } from "react-icons/io";
import cicon from"../../assets/certificate.png";
import SkeletonLoader from '../Home/SkeletonLoader'

function CertificateApplication() {
  const [data, setData] = useState([])
  const initialShowMoreState = data.map(() => false)
  const [showMore, setShowMore] = useState(initialShowMoreState);
  const [loading, setLoading] = useState();

  const toggleShowMore = (index) => {
    const newShowMore = [...showMore]
    newShowMore[index] = !newShowMore[index]
    setShowMore(newShowMore)
  }
  const { 
    account, 
    result, 
    certificateData, 
    SetCertificateData,
    showSlider, 
    SetShowSlider, 
    SetEncryptedData,
    call, 
    setCall,
    c1, 
    setC1,
    c2, 
    setC2} = useContext(AppContext);


  const fetchData = async () => {
    try {
      setLoading(true);
      console.log(result.id);
      const response = await getNonApprovedApplications(result.id);
      const sample = response.data.CertificateRequest;
      console.log(sample);
      setData(sample);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [result.id]);


  useEffect(() => {
    const fetchData2 = async () => {
      try {
        if (call === true) {
          console.log("Backend m approve hone aa gaya ...............");
          console.log(c1);
          console.log(c2);
          console.log("ab hogi call");
  
          // Assuming approveCertificate is an asynchronous function
          await approveCertificate(c1, c2);
          
          console.log("ho gai --------------");
          SetShowSlider(false);
          setCall(false);
          fetchData();
        }
      } catch (error) {
        console.error("Error in useEffect:", error);
        // Handle the error as needed
      }
    };
  
    // Call the asynchronous function
    fetchData2();
  
    // Dependencies array with only 'call'
  }, [call]);
  
  const handleApprove = async (data) => {
  try {
    const result = await getStudentData(data.StudentId);
    console.log(result);

    const newCertificateData = {
      instituteName: data.instituteName,
      StartDate: new Date(data.StartDate).toISOString().slice(2, 10),
      EndDate: new Date(data.EndDate).toISOString().slice(2, 10),
      AppliedAt: new Date(data.AppliedAt).toISOString().slice(2, 10),
      StudentName: data.StudentName,
      courseName: data.courseName,
      studentAccount: result.data.AccountNumber,
      instituteAccount: account
    };

    setC1(data.InstituteId);
    setC2(data._id);

    // Set the new certificate data
    SetCertificateData(newCertificateData);
    console.log(certificateData);
    // Call a function to handle side effects after state updates
    handleAfterApprove(newCertificateData);
  } catch (error) {
    console.error(error);
  }
};

  
  
  // Separate function to handle side effects after state updates
  const handleAfterApprove = (newCertificateData) => {
    console.log("ye h certificate ka data");
    console.log(newCertificateData);
  
    // Make sure the data is not undefined before encrypting
    if (newCertificateData) {
      const secretKey = 'secret';
      const encryptedData = CryptoJS.AES.encrypt(JSON.stringify(newCertificateData), secretKey).toString();
  
      // Use the callback form of setEncryptedData to ensure the latest state
      SetEncryptedData(prevEncryptedData => {
        console.log("Previous encrypted data:", prevEncryptedData);
        console.log("New encrypted data:", encryptedData);
        SetShowSlider(true);
        return encryptedData;
      });
  
      console.log("data lelo");
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-based
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };

  return (
    <div className="    pt-16 flex flex-col">
      <SidebarInstitute />
      
      {showSlider ? (
        <CertificateSlider />
      ) : (
        <div className=" pl-80 pt-7">
          <h2 className='font-inter font-semibold text-6xl m-2'>Applications for certificates...</h2>
          <div className=' w-full'>
            {loading ? (
              <SkeletonLoader/>
            ) : (
              <div className=' my-10 mx-4 w-full'>
                {data.map((item, index) => (
                  <div
                    className="flex transition-transform transform transition-delay-500 hover:translate-x-6 flex-row m-4 items-center"
                    key={item._id}
                  >

                    <img src={cicon} className=' h-16 mr-6 shadow-xl rounded-full' alt=''/>

                    <div className=" shadow-xl bg-slate-200 text-richblack-900 mb-2 font-medium w-[80%] rounded-full px-16 py-4">
                      <p>
                            <span className=" text-red-500 font-semibold">
                                courseName:{' '}
                              </span>{' '}
                              {item.courseName}
                            </p>
                      <p>
                        <span className=" text-red-500 font-semibold">
                          StudentName:{' '}
                        </span>{' '}
                        {item.StudentName}
                        {/* Render additional content if showMore is true */}
                        {showMore[index] && (
                          <>
            
                            <p>
                              <span className=" text-red-500 font-semibold">
                                Institute Name:
                              </span>{' '}
                              {item.instituteName}
                            </p>
                            
                            <p>
                              <span className="text-red-500 font-semibold">AppliedAt:</span>{' '}
                              {formatDate(item.AppliedAt)}
                            </p>
                            <p>
                              <span className="text-red-500 font-semibold">StartDate:</span>{' '}
                              {formatDate(item.StartDate)}
                            </p>
                            <p>
                              <span className="text-red-500 font-semibold">EndDate:</span>{' '}
                              {formatDate(item.EndDate)}
                            </p>
                            <p>
                              <span className=" text-red-500 font-semibold">
                                Status:
                              </span>{' '}
                              {item.status}
                            </p>
                          </>
                        )}
                        {/* Toggle button based on showMore state */}
                      </p>

                      <div className=' flex flex-row gap-4'>
                      <button
                        className=" bg-blue-500 px-2 py-1 text-white text-sm mt-1 rounded-xl font-semibold flex flex-row justify-center items-center"
                        onClick={() => toggleShowMore(index)}
                      >
                        {showMore[index] ? (
                          <>
                            Show Less <BiSolidChevronsUp />
                          </>
                        ) : (
                          <>
                            Show More <BiSolidChevronsDown />
                          </>
                        )}
                      </button>

                      {item.status === 'NotApproved' && (
                      <button className=' bg-red-500 px-2 py-1 text-white text-sm mt-1 rounded-xl gap-1 font-semibold flex flex-row justify-center items-center' onClick={() => handleApprove(item)}>Approve{<IoMdDoneAll className="" />}</button>
                       )}
                      </div>
                      
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default CertificateApplication
