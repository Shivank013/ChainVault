import React from "react";
import one from "../../../../assets/logo-black.png";
import two from "../../../../assets/digIndia.png";
import three from "../../../../assets/digIndia.png";
import four from "../../../../assets/madeIndia.png";
import five from "../../../../assets/g20-logo.png";
import six from "../../../../assets/skillIndia.png";
import seven from "../../../../assets/SIH-Logo.png";
import eight from "../../../../assets/uidai_english_logo.37b7e790.svg";
import modi from "../../../../assets/narendra-modi-38564.png";
import modi2 from "../../../../assets/modi2.png";
import made from "../../../../assets/madeIndia2.png"
import "../../../../App.css"
import Marquee from "react-fast-marquee"
import { IoChevronForwardCircleOutline } from "react-icons/io5";
import { PiStudentFill } from "react-icons/pi";
import { FaSchool } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";
import { RiGovernmentLine } from "react-icons/ri";

function GovernmentHome() {
  return (
    <div className="w-full overflow-x-hidden">


    {/* ----------hero section-------- */}
    <section className='h-[24rem] px-[4rem] flex flex-row justify-between items-center relative bg-gradient-to-r from-red-100 to-blue-100 py-9'>
    <img src={made} alt='nm' className='absolute scale-[60%] left-[35%] opacity-70 bottom-5 z-[1] w-[27rem]'></img>


{/* left box */}
<div className='flex flex-col gap-4 z-10'>
    <div className='text-[2.5rem] font-bold z-10 text-slate-600'> <span className="text-orange-500 ">Digital</span> <span className="text-blue-500 ">India</span> is Our Dream for the <br/><span className="text-green-500">Nation.</span> </div>
    <div className="text-[1.1rem] font-semibold text-slate-600">Digital India portal ensures transparency in all its
      <div>operations, making it reliable option for people</div>
      <div>to avail of its services.</div>
     </div>
    <div>
            <button className="px-3 py-2 bg-blue-400  hover:bg-blue-500 rounded-md mt-4 text-white font-semibold">
              Know More <IoChevronForwardCircleOutline className=" inline-block text-[1.4rem]" />
            </button>
    </div>
    </div>


{/* Right box */}
<div className=" mt-28 "><img src={modi} alt='nm' className='w-[16rem] z-20'></img></div>
</section>
 
 <div className="flex justify-start"><div className="w-[75%] h-[0.1rem] bg-slate-400 mt-4 "></div></div>

           {/* ------------image slider-------------- */}
      <section className="h-[10rem]  flex items-center ">
        <div className="App border-[2px] rounded-md bg-slate-100">
          <div>
            <Marquee direction="right" speed={70} delay={1}>
              <div className="image_wrapper  w-[5rem] pr-5">
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
              <div className="image_wrapper">
                <img src={two} alt="" className="w-[1.5rem]" />
              </div>
              <div className="image_wrapper  w-12 ">
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
      </section>


      <div className="flex justify-end"><div className="w-[75%] h-[0.1rem] bg-slate-400 mt-6 "></div></div>
      {/* ---------certificates apply----------- */}
      <section className="relative h-[17rem] bg-slate-200 flex  justify-center items-center mt-6">
        <div className="flex flex-col justify-center items-center mr-[15rem]">
          <div className=" font-semibold text-[1.3rem]">
            Attain Government Certification, issue prestigious Official Certificates,</div>
          <div className=" font-semibold text-[1.3rem]"> mark Educational excellence Triumphantly. </div>
          <div>
            <button className="px-3 py-2 bg-[#5a4bda]  hover:bg-[#4437b8] rounded-md mt-4 text-white">
              Apply Now <IoChevronForwardCircleOutline className=" inline-block text-[1.15rem]" />
            </button>
          </div>
        </div>
        <div><img src={modi2} className="absolute right-[5%] top-[4.8rem] w-[13rem]" alt="nm" /></div>
      </section>


      {/* --------------card section------------ */}
      <section className="mx-3 border-[0.05rem] my-3 h-[10rem] rounded-md border-slate-400">
        <div className="flex flex-wrap justify-around items-center flex-row h-full">

          <div className="flex justify-center items-center h-full gap-10">

            {/* ------------box 1--- */}
            <div className="flex flex-row items-center px-3 border-[.05rem] border-slate-500 h-[7rem] w-[14rem] rounded-md justify-around bg-slate-50 cursor-pointer">
              <div><RiGovernmentLine className="text-[2.5rem] " /></div>
              <div className="font-semibold text-[1.2rem]">Government <br />Jobs</div>
            </div>

            {/* ------------box 2--- */}
            <div className="flex flex-row items-center px-3 border-[.05rem] border-slate-500 h-[7rem] w-[14rem] rounded-md justify-around bg-red-50 cursor-pointer">
              <div><FaInfoCircle className="text-[2.5rem] " /></div>
              <div className="font-semibold text-[1.2rem]">Career <br />Information</div>
            </div>

            {/* ------------box 3--- */}
            <div className="flex flex-row items-center px-3 border-[.05rem] border-slate-500 h-[7rem] w-[14rem] rounded-md justify-around bg-slate-50 cursor-pointer">
              <div><FaSchool className="text-[2.5rem] " /></div>
              <div className="font-semibold text-[1.3rem]">Institutes</div>
            </div>

            {/* ------------box 4--- */}
            <div className="flex flex-row items-center px-3 border-[.05rem] border-slate-500 h-[7rem] w-[14rem] rounded-md justify-around bg-red-50 cursor-pointer">
              <div><PiStudentFill className="text-[3rem] " /></div>
              <div className="font-semibold text-[1.3rem]">Students</div>
            </div>
          </div>


        </div>

      </section>

    </div>
  );
}

export default GovernmentHome;