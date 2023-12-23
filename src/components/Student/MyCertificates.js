import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../context/AppContext'
import { getCerificates } from '../../services/operations/StudentOperations'
import SidebarStudent from './SidebarStudent'
import CryptoJS from 'crypto-js'
import Share from './Share'

function MyCertificates() {

  const { result, 
    account,
    getStudentInfo,
    dashboardLoading, 
    setDashboardLoading,
    getIpfsHash,showshare, setShowshare,showLink,setShowLink } =useContext(AppContext);

  const [data, setData] = useState([])
  const [approvedCertificates, setApprovedCertificates] = useState([]);
  const secretKey = 'secret';
  const [decryptedDataArray, setDecryptedDataArray] = useState([]);

  const fetchData = async () => {
    try {
      // not approved certificates
      console.log(result.id)
      const response1 = await getCerificates(result.id)
      setData(response1.data.Applications)
      console.log(data)

      // approved certificates
      console.log(account);
      const response2 = await getStudentInfo(account);
      console.log(response2[2]);
      setApprovedCertificates(response2[2]);
      setDashboardLoading(false);
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
      setDashboardLoading(false);
    } catch (error) {
      console.error('Error decrypting data:', error);
      setDashboardLoading(false);
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
      <button onClick={handleDownload}>
        Download Certificate
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
    <div className="    pt-16   flex flex-col">
      <SidebarStudent />
      <div className="      pl-80 pt-7">
      {showshare && <Share/>}
        <div>
          <h2>My Certificates</h2>
          <div>
            {dashboardLoading ? (
              <div>loading..</div>
            ) : (
              <div>
                <h3>Certificates for approval</h3>
                {data.map((item) => (
                  <div key={item._id}>
                   { item.status == "NotApproved" ? (<div>
                    <p>AppliedAt: {item.AppliedAt}</p>
                    <p>StartDate: {item.StartDate}</p>
                    <p>EndDate: {item.EndDate}</p>
                    <p>Institute Id: {item.InstituteId}</p>
                    <p>Name on certificate: {item.StudentName}</p>
                    <p>Course: {item.courseName}</p>
                    <p>Status: {item.status}</p>
                   </div>) : (null)
                    }
                  </div>
                ))}

                <h3>Approved certificates</h3>
                {decryptedDataArray.map((certificate, index) => (
                <div key={index} className="certificate-item">
                  <h4>{certificate.instituteName}</h4>
                  <p>Start Date: {certificate.StartDate}</p>
                  <p>End Date: {certificate.EndDate}</p>
                  <p>Applied At: {certificate.AppliedAt}</p>
                  <p>Student Name: {certificate.StudentName}</p>
                  <p>Course Name: {certificate.courseName}</p>
                  <p>Student Account: {certificate.studentAccount}</p>
                  <p>Institute Account: {certificate.instituteAccount}</p>
                  <DownloadButton ed={certificate.ed} fileName={certificate.courseName} />
                  <button className=' ml-4' onClick={() => Shareing(certificate.ed)}>Share</button>
                </div>
              ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyCertificates
