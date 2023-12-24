import React from "react";
import r1 from "../../assets/Rectangle 1.png";
import r2 from "../../assets/Rectangle 4.png";
import "../../App.css"

function Preloader() {
  return (
    <div className=" w-[100vw] h-[100vh] bg-white flex justify-center items-center">
      <img className=" h-24" src={r1} alt=""/>
      <img className="absolute h-16 mb-8 custom-bounce-animation" src={r2} alt=""/>
    </div>
  )
}

export default Preloader;