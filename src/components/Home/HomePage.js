import img from "../../assets/Untitled__1_-removebg-preview.png";
import img1 from "../../assets/web3.jpeg";
import img2 from "../../assets/blockchain.png";
import img4 from "../../assets/digital-signature-electronic.jpg";
import img5 from "../../assets/ethereum.png";
import img6 from "../../assets/fingerprint.jpg";
import img9 from "../../assets/ipfsn.jpg";
import img10 from "../../assets/Cyber-Security.jpg";
import partner1 from "../../assets/partner.png";
import partner2 from "../../assets/partner2.png";
import backGradient from "../../assets/backgradient.png";
import { FaLongArrowAltRight } from "react-icons/fa";
import profile from "../../assets/profile.svg";
import fingerprint from "../../assets/fingerprint.svg";
import download from "../../assets/download-clod-data.svg";
import React, { useState, useEffect } from "react";
import one from "../../assets/logo-black.png";
import two from "../../assets/blockchain-2.svg";
import three from "../../assets/smartContract.png";
import four from "../../assets/security-107.svg";
import five from "../../assets/g20-logo.png";
import six from "../../assets/qrcode.png";
import seven from "../../assets/SIH-Logo.png";
import eight from "../../assets/uidai_english_logo.37b7e790.svg";
import "../../App.css";
import Marquee from "react-fast-marquee";
import vector1 from "../../assets/Vector.png";
import vector2 from "../../assets/Vector(1).png";
import verify from "../../assets/verification.webp";
import secure from "../../assets/secure.webp";
import { IoAddCircle } from "react-icons/io5";
import { MdPublish } from "react-icons/md";
import { MdMonitorHeart } from "react-icons/md";
import space from "../../assets/space.png";

function Homepage() {
  const texts = [
    "Revolutionize.",
    "Innovate.",
    "Decentralized.",
    "Secure.",
    "Futuristic.",
    "Seamless",
    "Empower.",
    // Add more texts as needed
  ];

  const [changingText, setChangingText] = useState(texts[0]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * texts.length);
      setChangingText(texts[randomIndex]);
    }, 2500);

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, [texts]);
  return (
    <div className=" mt-16 w-full overflow-x-hidden">
      {/* ----------Main box-------------- */}

      <div className="bg-gradient-to-r from-red-100 to-[#dbeafe]">
        <div className="h-[35rem] flex flex-row justify-center items-center overflow-hidden ">
          {/* <img src={bgImg1} alt="" className="w-[100%] absolute h-[120%] top-0 -z-20"/> */}

          {/* {right box} */}

          <div className=" w-[50%] h-[38rem] pt-[8rem] pl-8 gap-3">
            <div className=" flex flex-col justify-center">
              <div className="text-4xl text-[#09314D] font-semibold font-sans ">
                {changingText}
              </div>
              <div className=" text-5xl leading-none font-sans text-[#09314D] mt-7">
                Partner with{" "}
                <span className=" inline text-6xl font-serif text-red-600 font-medium">
                  ChainVault
                </span>
              </div>
              <div className="w-[200px] h-[1px] bg-red-900 mt-7"></div>
              <div className="text-2xl font-sans font-normal mt-7 text-[#09314D]">
                Embark on secure storage and verification with ChainVault, your
                fortress for certificates on the blockchain - a stronghold for
                storage, sharing, and authentication.
              </div>
              <div>
                <div className="flex flex-row gap-3 pt-8">
                  <button className="p-2 border-1 border-black bg-red-500 text-white hover:bg-white hover:text-black rounded-md">
                    Sign In
                  </button>
                  <button className="p-2 border-1 border-black bg-zinc-200 hover:bg-blue-500  rounded-md">
                    Create Account
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* {Moving circle} */}
          <div className=" w-[55%] scale-[120%] translate-x-80  translate-y-90 mt-12 flex items-center justify-center z-10 ">
            <div className=" absolute h-[40rem] flex justify-center items-center w-[45rem] small-circle">
              <div className=" absolute h-[40rem] w-[40rem] border-[0.2rem] border-orange-500 rounded-full"></div>
              <div className=" shadow-lg overflow-hidden absolute transform translate-x-[-20rem] h-[7.5rem] w-[7.5rem] border-[0.1rem] border-black rounded-full scale-[85%]">
                <img alt="" src={img6}></img>
              </div>
              <div className=" shadow-lg overflow-hidden absolute transform translate-y-[-20rem] h-[7.5rem] w-[7.5rem] border-[0.1rem] border-black rounded-full scale-[85%]">
                <img alt="" src={img10}></img>
              </div>
              <div className=" shadow-lg overflow-hidden absolute transform translate-x-[-17.32rem] translate-y-[-9.995rem] h-[7.5rem] w-[7.5rem] border-[0.1rem] border-black rounded-full scale-[85%]">
                <img alt="" src={img2}></img>
              </div>
              <div className=" shadow-lg overflow-hidden absolute transform translate-x-[-10rem] translate-y-[-17.325rem] h-[7.5rem] w-[7.5rem] border-[0.1rem] border-black rounded-full scale-[85%]">
                <img alt="" src={img4}></img>
              </div>
              <div className=" shadow-lg overflow-hidden absolute transform translate-x-[-17.32rem] translate-y-[9.995rem] h-[7.5rem] w-[7.5rem] border-[0.1rem] border-black rounded-full scale-[85%]">
                <img alt="" src={img4}></img>
              </div>
              <div className=" shadow-lg overflow-hidden absolute transform translate-x-[-10rem] translate-y-[17.32rem] h-[7.5rem] w-[7.5rem] border-[0.1rem] border-black rounded-full scale-[85%]">
                <img className="scale-[200%]" alt="" src={img1}></img>
              </div>
            </div>

            <div className="absolute h-[60rem] flex justify-center items-center w-[60rem] big-circle">
              <div className="h-[60rem] w-[60rem] border-[0.2rem] border-orange-500 rounded-full"></div>
              <div className=" shadow-lg overflow-hidden absolute transform translate-x-[-30rem] h-[7.5rem] w-[7.5rem] border-[0.1rem] border-black rounded-full scale-[95%]">
                <img alt="" className="scale-105" src={img9}></img>
              </div>
              <div className=" shadow-lg overflow-hidden absolute transform translate-x-[-25.98rem] translate-y-[-14.9925rem] h-[7.5rem] w-[7.5rem] border-[0.1rem] border-black rounded-full scale-[95%]">
                <img alt="" src={img10}></img>
              </div>
              <div className=" shadow-lg overflow-hidden absolute transform translate-x-[-25.98rem] translate-y-[14.9925rem] h-[7.5rem] w-[7.5rem] border-[0.1rem] border-black rounded-full scale-[95%]">
                <img alt="" src={img5}></img>
              </div>
            </div>
            <img
              alt=""
              className=" h-24 left-[14rem]  border-0  absolute"
              src={img}
            ></img>
          </div>
        </div>
      </div>

      {/* ----------signin create acoount------------ */}
      <div className="relative bg-gradient-to-r from-red-100 to-[#dbeafe] ">
        <div className=" top-[40%] left-[24%] absolute py-4">
          <div className="flex text-4xl flex-col gap-4 justify-center items-center font-serif">
            Get Started with Secure Certificate Verification
          </div>
          <div className="flex flex-row gap-3 justify-center items-center mt-4">
            <button className="p-2 border-1 border-black bg-black text-white hover:bg-white hover:text-black rounded-md">
              Sign In
            </button>
            <button className="p-2 border-1 border-black bg-zinc-200 hover:bg-black hover:text-white rounded-md">
              Create Account
            </button>
          </div>
        </div>
        <div
          style={{ backgroundImage: `url(${backGradient})` }}
          className=" w-screen h-[15rem] object-contain py-10 -z-5"
        ></div>
      </div>

      {/* --------------usecases------------- */}
      <div className="relative py-3">
        <div className="absolute -z-10 h-full">
          <img src={vector1}></img>
        </div>
        <div>
          <img
            src={vector2}
            className="absolute -z-20 bottom-2 right-0 h-[42rem]"
          />
        </div>
        <div className="my-5">
          {/* first container */}
          <div className="h-[31rem] my-4">
            <div className="flex flex-row justify-evenly mx-3">
              <div className="flex justify-center flex-col w-[27rem]">
                {/* <!-- for content --> */}
                <div className="text-5xl">
                  <p>Automated, Fast and Accurate Verification</p>
                </div>
                <div className="mt-5 text-lg">
                  <p>
                    Identity Document Verification extracts data from ID
                    document barcodes and machine-readable zones, digitizes text
                    fields, and runs verification and anti-fraud checks. The
                    automated process sends edge cases for AI-assisted manual
                    review. Verification results are available in real time
                    through an intuitive dashboard.
                  </p>
                </div>
              </div>
              {/* <!-- for image --> */}
              <div className=" shadow-md">
                <img src={verify} className="items-center h-[400px]" alt="" />
              </div>
            </div>
          </div>

          {/* second container */}
          <div className="w-screen h-[500px] my-4">
            <div className="flex justify-evenly flex-row mx-4">
              {/* <!-- for image --> */}
              <div className=" shadow-md">
                <img src={secure} className="h-[400px] items-center" alt="" />
              </div>

              <div className="flex justify-center flex-col w-[430px]">
                {/* <!-- for content --> */}
                <div className="text-5xl">
                  <p>Optimized ID Document Verification and IPFS Storage</p>
                </div>
                <div className="mt-5  text-lg">
                  <p>
                    ChainVault Verification verifies educational Insitute-issued
                    Certificates and features liveness and Our decentralized
                    system removes the risk of fraud, ensuring the reliability
                    of certificate verification across diverse entities..
                    experience and accurate, efficient verification.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ----------reach heights---------- */}
      <div className="bg-[#09314D] flex flex-row text-white pt-5 px-[5rem] ">
        <div className="flex flex-col p-5 gap-6 pt-8">
          <div className="font-sans text-[2.25rem] font-semibold">
            Reach new heights with ChainVault
          </div>
          <div>
            Unleash the power of BlockChain and IPFS. Add your Collections of
            Certificates and join the storage revolution today.
          </div>
          <div className="flex gap-1 items-center mt-3  hover: cursor-pointer">
            Get Started
            <span className=" ">
              <FaLongArrowAltRight fontSize={"1.25rem"} />
            </span>
          </div>
          <div className="h-[2px] w-[9rem] bg-white inline-block mt-[-1rem] hover: cursor-pointer"></div>
        </div>

        <div>
          <img src={space} />
        </div>
      </div>

      {/* getting started components */}
      <div className="h-[13rem] bg-slate-100 w-full py-5">
        <div className=" bg-slate-100">
          <div className=" flex flex-row  gap-4 justify-around py-6 px-7">
            <div className="w-[calc(25%)] p-6 text-center text-3xl">
              Getting started is quick and easy
            </div>
            <div className="flex gap-3  justify-around w-[calc(75%)]">
              <div className="flex flex-col items-center p-5">
                <div>
                  <img src={profile} className="w-[2.5rem] h-[2.5rem]" alt="" />
                </div>
                <div className="mt-3">Register Yourself</div>
              </div>
              <div className=" flex justify-center items-center">
                <FaLongArrowAltRight fontSize={"1.5rem"} />
              </div>
              <div className="flex flex-col items-center p-5">
                <div>
                  <img
                    src={fingerprint}
                    className="w-[2.5rem] h-[2.5rem]"
                    alt=""
                  />
                </div>
                <div className="mt-3">Verify Yourself</div>
              </div>
              <div className=" flex justify-center items-center">
                <FaLongArrowAltRight fontSize={"1.5rem"} />
              </div>

              <div className="flex flex-col items-center p-5">
                <div>
                  <img
                    src={download}
                    className="w-[2.5rem] h-[2.5rem]"
                    alt=""
                  />
                </div>
                <div className="mt-3">Fetch your Documents</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ----------------infinite slider--------- */}
      <div>
        <div>
          <div className="App mx-3">
            <div>
              <Marquee direction="right" speed={70} delay={1}>
                <div className="image_wrapper  w-[8rem]">
                  <img src={six} alt="" />
                </div>
                <div className="image_wrapper">
                  <img src={five} alt="" />
                </div>
                <div className="image_wrapper">
                  <img src={three} alt="" className="w-[1.5rem]" />
                </div>
                <div className="image_wrapper">
                  <img src={four} alt="" />
                </div>
                <div className="image_wrapper w-[5rem]">
                  <img src={two} alt="" />
                </div>
                <div className="image_wrapper  w-12 pl-3">
                  <img src={eight} alt="" />
                </div>
                <div className="image_wrapper">
                  <img src={seven} alt="" />
                </div>
                <div className="image_wrapper">
                  <img src={one} alt="" />
                </div>
              </Marquee>
            </div>
          </div>
        </div>
      </div>

      {/* ---------------chainvault services-------- */}
      <div className="bg-slate-100 py-[5rem]">
        <div className="flex flex-wrap mx-2 ">
          <div className="col-sm-6 col-lg-3 flex items-center">
            <h3 className="mb-[1.5rem] text-[1.6rem] font-semibold">ChainVault Services</h3>
          </div>
          <div className="col-sm-6 col-lg-3 ">
            <div className="picons01">
              <IoAddCircle fontSize={"2.5rem"} />
              <h5 className="font-semibold">ADD</h5>
            </div>
            <div className="my-4">
              <p className="mb-3">
                Streamline the process of verifying Educational Certificates
                issued by Government verified Institutes.
              </p>
              <a href="#">
                Know More{" "}
                <FaLongArrowAltRight fontSize={"1rem"} className=" inline" />
              </a>
            </div>
          </div>
          <div className="col-sm-6 col-lg-3 ">
            <div class="picons01">
              <MdPublish fontSize={"2.5rem"} />
              <h5 className="font-semibold">PUBLISH</h5>
            </div>
            <div className="my-4">
              <p className="mb-3 font-sans">
                Seamlessly publish your Certificates and make them accessible
                anytime.
              </p>
              <a href="#">
                Know More{" "}
                <FaLongArrowAltRight fontSize={"1rem"} className=" inline" />
              </a>
            </div>
          </div>
          <div className="col-sm-6 col-lg-3 ">
            <div class="picons01">
              <MdMonitorHeart fontSize={"2.5rem"} />
              <h5 className="font-semibold">MONITOR</h5>
            </div>
            <div className="my-4">
              <p className="mb-3">
                Gain insights and track the performance of your Institute with
                comprehensive monitoring tools.
              </p>
              <a className="mt-3">
                Know More{" "}
                <FaLongArrowAltRight fontSize={"1rem"} className=" inline " />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* --------signup strip---------- */}
      <div>
        <div className="w-full h-[6.5rem] bg-gradient-to-r from-red-200 to-blue-100 py-6 px-6">
          <div className="flex flex-row justify-around items-center">
            <div className=" text-xl">
              Register Your Institute to the BlockChain and issue Government
              verified Certificates .
            </div>
            <div>
              <button className="border-2 p-3 bg-white items-center rounded-md hover:bg-red-300  hover:border-black">
                {" "}
                SIGN UP NOW{" "}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* --------------partner Organization------------- */}
      <div>
      <div className="px-3 bg-slate-100">
        <div className="flex flex-row gap-4 justify-evenly items-center ">
          {/* right box */}
          <div className=" h-[17rem] w-[35rem] flex flex-row justify center items-center gap-6 bg-[#09314D] rounded-lg px-7">
            <div className="flex flex-col ">
              <div className="font-sans font-medium text-white text-[1.5rem]">
                Become a ChainVault Partner Organization
              </div>
              <div className="font-sans my-3 text-white">
                Get registered as a Certificate Issuer Or Requester
              </div>
              <button className=" w-[10rem] p-2 border-1 border-black bg-black text-white hover:bg-white hover:text-black rounded-md">
                Get Registered
              </button>
            </div>
            <div className="w-[12rem]">
              <img src={partner1}></img>
            </div>
          </div>
          <div className="w-[45%]">
            <img src={partner2}></img>
          </div>
        </div>
      </div>
      </div>
      <footer className=" w-full bg-gray-800 text-white p-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Footer Section 1 */}
        <div>
          <div className='flex flex-row'>
          <div><img
              alt=""
              className="w-8 h-7 mt-1"
              src={img}
            ></img></div>
            <span className='ml-1 text-[1.5rem] inline font-sans font-semibold'>ChainVault</span>
            </div>
          <div className='p-3'>ChainVault aims at 'Digital Empowerment' of the Students providing Secure Certificate Storage and Verification.</div>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Company</h3>
          <ul>
          <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* Footer Section 2 */}
        <div>
          <h3 className="text-xl font-bold mb-4">Services</h3>
          <ul>
            <li>Student LogIn</li>
            <li>Institute LogIn</li>
            <li>Verification</li>
          </ul>
        </div>

       {/* Footer Section 3 */}
        <div>
          <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
          <ul>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>LinkedIn</li>
          </ul>
        </div>
      </div>
   <div className='w-[screen] h-[1px] bg-white m-6'></div>
      <div className="mt-8 text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} ChainVault. All rights reserved.
        </p>
      </div>
    </footer>
    </div>
  );
}

export default Homepage;
