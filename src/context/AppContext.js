import { createContext, useState } from "react";
import toast from "react-hot-toast";
const {ethers} = require("ethers");

export const AppContext = createContext();

export default function AppContextProvider ({children}) {

    const [dashboardLoading, setDashboardLoading] = useState(false);
    const [result, setResult] = useState({
      isLoading: true,
      isAuthorized: false,
      username: "",
      email: "",
      id: ""
    });

    const [c1, setC1] = useState();
    const [c2, setC2] = useState();

    const [call, setCall] = useState(false);
    const [account, setAccount] = useState("");
    const [contract, setContract] = useState(null);
    const [provider, setProvider] = useState(null);
    const [contractAddress, setContractAddress] = useState("0x52373c67816378C9a46470E241A41f64C9De25B8");
    const [certificateData, SetCertificateData] = useState({});
    const [showSlider, SetShowSlider] = useState(false);
    const [index,setIndex] = useState(0);
    const [warning, setWarning] = useState(true);
    const [showshare, setShowshare] = useState(false);
    const [showLink, setShowLink] = useState(false);
    const [scanResult, setScanResult] = useState(null);
    // const [qr, SetQr] = useState();
    // const [ipfsHash, SetIpfsHash] = useState("");
    const [encryptedData, SetEncryptedData] = useState("");

    async function getCertificateOwners(_transactionHash){
      const toastId = toast.loading("Loading...");
      try{
        const data = await contract.getCertificateOwners(_transactionHash);
        console.log(data);
        toast.dismiss(toastId);
        return data;
      } catch(error)
      {
          if (error.data) {
              const abiCoder = new ethers.utils.AbiCoder();
              const data = abiCoder.decode(["string"], error.data);
              const reason = data[0];
              console.error("Revert reason:", reason);
          } else {
              console.error("Error data not available.");
          }
        const data = false;
        toast.dismiss(toastId);
        return data;
      }
    }

    async function getCourses(_instituteAddress){
      const toastId = toast.loading("Loading...");
      try{
        const data = await contract.getCourses(_instituteAddress);
        console.log(data);
        toast.dismiss(toastId);
        return data;
      } catch(error)
      {
        if (error.data) {
            const abiCoder = new ethers.utils.AbiCoder();
            const data = abiCoder.decode(["string"], error.data);
            const reason = data[0];
            console.error("Revert reason:", reason);
        } else {
            console.error("Error data not available.");
        }
        const data = false;
        toast.dismiss(toastId);
        return data;
      }
    }

    async function getEnrolledStudentsInCourse(_instituteAddress,_courseName){
      const toastId = toast.loading("Loading...");
      try{
        const data = await contract.getEnrolledStudentsInCourse(_instituteAddress,_courseName);
        console.log(data);
        toast.dismiss(toastId);
        return data;
      } catch(error)
      {
        if (error.data) {
            const abiCoder = new ethers.utils.AbiCoder();
            const data = abiCoder.decode(["string"], error.data);
            const reason = data[0];
            console.error("Revert reason:", reason);
        } else {
            console.error("Error data not available.");
        }
        toast.dismiss(toastId);
        const data = false;
        return data;
      }
    }

    async function getInstituteInfo(_instituteAddress){
      const toastId = toast.loading("Loading...");
      try{
        const data = await contract.getInstituteInfo(_instituteAddress);
        console.log(data);
        toast.dismiss(toastId);
        return data;
      } catch(error)
      {
        if (error.data) {
            const abiCoder = new ethers.utils.AbiCoder();
            const data = abiCoder.decode(["string"], error.data);
            const reason = data[0];
            console.error("Revert reason:", reason);
        } else {
            console.error("Error data not available.");
        }
        const data = false;
        toast.dismiss(toastId);
        return data;
      }
    }

    async function getIpfsHash(_studentAddress,_transactionHash){
      const toastId = toast.loading("Loading...");
      try{
        const data = await contract.getIpfsHash(_studentAddress,_transactionHash);
        console.log(data);
        toast.dismiss(toastId);
        return data;
      } catch(error)
      {
        if (error.data) {
            const abiCoder = new ethers.utils.AbiCoder();
            const data = abiCoder.decode(["string"], error.data);
            const reason = data[0];
            console.error("Revert reason:", reason);
        } else {
            console.error("Error data not available.");
        }
        const data = false;
        toast.dismiss(toastId);
        return data;
      }
    }

    async function getStudentInfo(_studentAddress){
      const toastId = toast.loading("Loading...");
      try{
        const data = await contract.getStudentInfo(_studentAddress);
        console.log(data);
        toast.dismiss(toastId);
        return data;
      } catch(error)
      {
        if (error.data) {
            const abiCoder = new ethers.utils.AbiCoder();
            const data = abiCoder.decode(["string"], error.data);
            const reason = data[0];
            console.error("Revert reason:", reason);
        } else {
            console.error("Error data not available.");
        }
        const data = false;
        toast.dismiss(toastId);
        return data;
      }
    }

    async function verification(_transactionHash){
      const toastId = toast.loading("Loading...");
      try{
        const data = await contract.verification(_transactionHash);
        console.log(data);
        toast.dismiss(toastId);
        if(data)
        {
          toast.success("Certificate Verified")
        } else {
        toast.error("Fake Certificate")
        }
        return data;
      } catch(error)
      {
        if (error.data) {
            const abiCoder = new ethers.utils.AbiCoder();
            const data = abiCoder.decode(["string"], error.data);
            const reason = data[0];
            console.error("Revert reason:", reason);
        } else {
            console.error("Error data not available.");
        }
        const data = false;
        toast.dismiss(toastId);
        toast.error("Verification Failed")
        return data;
      }
    }

    async function addCourses(_instituteAddress,_courseNames){
      const toastId = toast.loading("Loading...");
      try{
        await contract.addCourses(_instituteAddress,_courseNames);
        toast.dismiss(toastId);
        toast.success("Added Successfully")
      } catch(error){
            if (error.data) {
              const abiCoder = new ethers.utils.AbiCoder();
              const data = abiCoder.decode(["string"], error.data);
              const reason = data[0];
              console.error("Revert reason:", reason);
          } else {
              console.error("Error data not available.");
          }
        toast.dismiss(toastId);
        toast.error("Course not added")
      }
    }

    async function approveInstitute(_instituteAddress){
      const toastId = toast.loading("Loading...");
      try{
        await contract.approveInstitute(_instituteAddress);
        toast.dismiss(toastId);
        toast.success("Approved")
      } catch(error){
            if (error.data) {
              const abiCoder = new ethers.utils.AbiCoder();
              const data = abiCoder.decode(["string"], error.data);
              const reason = data[0];
              console.error("Revert reason:", reason);
          } else {
              console.error("Error data not available.");
          }
        toast.dismiss(toastId);
        toast.error("Not Approved")
      }
    }

    async function createCertificate(_studentAddress,_instituteAddress,_courseName,_transactionHash,_ipfsHash){
      const toastId = toast.loading("Loading...");
      console.log("inside app context"+_transactionHash)
      try{
        await contract.createCertificate(_studentAddress,_instituteAddress,_courseName,_transactionHash,_ipfsHash);
        toast.dismiss(toastId);
        toast.success("Certificate Created")
      } catch(error){
            if (error.data) {
              const abiCoder = new ethers.utils.AbiCoder();
              const data = abiCoder.decode(["string"], error.data);
              const reason = data[0];
              console.error("Revert reason:", reason);
          } else {
              console.error("Error data not available.");
          }
        toast.dismiss(toastId);
        toast.error("Failed")
      }
    }

    async function registerInstitute(_instituteAddress,_instituteData){
      const toastId = toast.loading("Loading...");
      try{
        await contract.registerInstitute(_instituteAddress,_instituteData);
        console.log("success");
        toast.dismiss(toastId);
        toast.success("Registered Successfully")
      } catch(error){
            if (error.data) {
              const abiCoder = new ethers.utils.AbiCoder();
              const data = abiCoder.decode(["string"], error.data);
              const reason = data[0];
              console.error("Revert reason:", reason);
          } else {
              console.log(error);
          }
        toast.dismiss(toastId);
        toast.error("Registration Failed")
      }
    }

    async function registerStudent(_studentAddress,_studentData){
      const toastId = toast.loading("Loading...");
      try{
        await contract.registerStudent(_studentAddress,_studentData);
        toast.dismiss(toastId);
        toast.success("Registered Successfully")
      } catch(error){
            if (error.data) {
              const abiCoder = new ethers.utils.AbiCoder();
              const data = abiCoder.decode(["string"], error.data);
              const reason = data[0];
              console.error("Revert reason:", reason);
          } else {
              console.error("Error data not available.");
          }
        toast.dismiss(toastId);
        toast.error("Registration Failed")
      }
    }

    async function rejectInstitute(_instituteAddress){
      const toastId = toast.loading("Loading...");
      try{
        await contract.rejectInstitute(_instituteAddress);
        toast.dismiss(toastId);
        toast.success("Resitration Canceled")
      } catch(error){
            if (error.data) {
              const abiCoder = new ethers.utils.AbiCoder();
              const data = abiCoder.decode(["string"], error.data);
              const reason = data[0];
              console.error("Revert reason:", reason);
          } else {
              console.error("Error data not available.");
          }
        toast.dismiss(toastId);
      }
    }

    async function enrollStudentInCourse(_studentAddress, _instituteAddress, _courseName){
      const toastId = toast.loading("Loading...");
      try{
        await contract.enrollStudentInCourse(_studentAddress, _instituteAddress, _courseName);
        toast.dismiss(toastId);
        toast.success("Enrolled Successfully")
      } catch(error){
            if (error.data) {
              const abiCoder = new ethers.utils.AbiCoder();
              const data = abiCoder.decode(["string"], error.data);
              const reason = data[0];
              console.error("Revert reason:", reason);
          } else {
              console.error("Error data not available.");
          }
        toast.dismiss(toastId);
        toast.error("Failed")
      }
    }
     
    const value = {
      account,
      setAccount,
      contract,
      setContract,
      provider,
      setProvider,
      contractAddress, 
      setContractAddress,
      index,
      setIndex,
      certificateData, 
      SetCertificateData,
      showSlider, 
      SetShowSlider,
      encryptedData, 
      SetEncryptedData,
      getCertificateOwners,
      getCourses,
      getEnrolledStudentsInCourse,
      enrollStudentInCourse,
      getInstituteInfo,
      getIpfsHash,
      getStudentInfo,
      verification,
      addCourses,
      approveInstitute,
      createCertificate,
      registerInstitute,
      registerStudent,
      rejectInstitute,
      dashboardLoading, 
      setDashboardLoading,
      result, 
      setResult,
      call, 
      setCall,
      c1, setC1,
      c2, setC2,
      warning, setWarning,
      showshare, setShowshare,
      showLink, setShowLink,
      scanResult, setScanResult
    }

    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>;
}