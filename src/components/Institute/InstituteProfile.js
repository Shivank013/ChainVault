import React from 'react'
import SidebarInstitute from './SidebarInstitude';
import { AppContext } from '../../context/AppContext';
import { useEffect, useState } from 'react';
import CryptoJS from 'crypto-js';
import { useContext } from 'react';

function InstituteProfile() {

  const{getInstituteInfo, 
    account, 
    setDashboardLoading, } = useContext(AppContext);

    const [data, setData] = useState([]);


    const fetchData = async () => {
      try {
        console.log(account);
        const response = await getInstituteInfo(account);
        console.log(response[1]);
  
        const secretKey = 'secret'
        const decryptedBytes = CryptoJS.AES.decrypt(response[1], secretKey);
        const decryptedData = JSON.parse(decryptedBytes.toString(CryptoJS.enc.Utf8));
  
        console.log("----------")
        console.log(decryptedData)
        console.log("===========")
  
        setData(decryptedData);
        setDashboardLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setDashboardLoading(false);
      }
    };
  
    useEffect(() => {
      fetchData();
    }, []);

  return(
    <div  className='    pt-16   flex flex-col'>
    <SidebarInstitute /> 
    <div className="      pl-80 pt-7">
        <h2>Institute Profile</h2>
        <p>Name: {data.instituteName}</p>
        <p>Acc Number: {data.AccountNumber}</p>
        <p>Email: {data.email}</p>
        <p>Phone: {data.contactNumber}</p>
      </div>
  </div>
  );
}

export default InstituteProfile