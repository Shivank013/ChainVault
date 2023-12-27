import React, { useEffect,useContext } from 'react'
import {AiOutlineHome} from 'react-icons/ai';
import './Slidebar.css';
import { MdOutlineApproval } from "react-icons/md";
import { Link } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';
import {abi} from "../../Abi";
import Warning from '../Home/Warning';
import { RiRegisteredLine } from "react-icons/ri";
const ethers = require("ethers");

const Slidebar = () => {
    const {
        setAccount,
        contractAddress,
        setContract,
        setProvider,
        warning, 
        setWarning,
        result} = useContext(AppContext);

        useEffect(() => {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
        
            const loadProvider = async () => {
              if (provider) {
                window.ethereum.on("chainChanged", () => {
                  window.location.reload();
                });
        
                window.ethereum.on("accountsChanged", () => {
                  window.location.reload();
                });
                await provider.send("eth_requestAccounts", []);
                const signer = provider.getSigner();
                const address = await signer.getAddress();
                if(address === result.ac)
                {
                  setWarning(false);
                } else {
                  setWarning(true);
                }
                setAccount(address);
                console.log(warning);
                const contract = new ethers.Contract(contractAddress,abi,signer);
                setContract(contract);
                setProvider(provider);
              } else {
                console.error("Metamask is not installed");
              }
            };
            provider && loadProvider();
          }, []);
  return (
    <div className='body z-30'>
     {warning && <Warning />}
         <div className="container">
             <div className="navigation">
                 <ul>
                    <li>
                     {/* just a blank list item */}
                    </li>
                    <li>
                       <Link to={"/dashboard/goverment/goverment-profile"}>
                        <span className='icon'><AiOutlineHome className='iccon'/></span>
                        <span class="title">Gov Profile</span>
                        </Link> 
                    </li>
                    <li>
                       <Link to={"/dashboard/goverment/institute-applications"}>
                        <span className='icon'><MdOutlineApproval className='iccon'/></span>
                        <span class="title">Institute Applications</span>
                        </Link> 
                    </li>
                    <li>
                       <Link  to={"/dashboard/goverment/registered-institutes"}>
                        <span className='icon'><RiRegisteredLine className='iccon'/></span>
                        <span class="title">Registered Institute</span>
                        </Link> 
                    </li>
      
                 </ul>
             </div>
         </div>
    </div>
  )
}

export default Slidebar