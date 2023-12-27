import React from 'react'
import './GovHome.css'
import image1 from './assets/vecteezy_cyber-security-logo-vector_5883789_800/Screenshot 2023-12-22 164603.png'
import image2 from './assets/vecteezy_cyber-security-logo-vector_5883789_800/Screenshot 2023-12-22 164612.png'
import image3 from './assets/vecteezy_cyber-security-logo-vector_5883789_800/Screenshot 2023-12-22 164619.png'
import image4 from './assets/vecteezy_cyber-security-logo-vector_5883789_800/Screenshot 2023-12-22 164626.png'
import image5 from './assets/vecteezy_cyber-security-logo-vector_5883789_800/Screenshot 2023-12-22 164636.png'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const GovHome = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1000,
  }

  return (
    <div className=" h-full mb-10 mt-20">
      <h1 className="     font-sans   text-lg    text-blue-800  ml-4     font-bold">
        Number of Service provided
      </h1>
      <div className="wrapper">
        <div className="top-item">
          <div className="item">
            <img
              className="  rounded-md"
              src={image1}
              style={{ height: '150px', width: '100vw' }}
            ></img>
          </div>
        </div>
        <div className="top-item">
          <div className="item object-cover">
            <img
              className="  rounded-md"
              src={image2}
              style={{ height: '150px', width: '100vw' }}
            ></img>
          </div>
        </div>
        <div className="top-item">
          <div className="item">
            <img
              className="  rounded-md"
              src={image3}
              style={{ height: '150px', width: '100vw' }}
            ></img>
          </div>
        </div>
        <div className="top-item">
          <div className="item">
            <img
              className="  rounded-md"
              src={image4}
              style={{ height: '150px', width: '100vw' }}
            ></img>
          </div>
        </div>
        <div className="top-item">
          <div className="item">
            <img
              className="  rounded-md"
              src={image5}
              style={{ height: '150px', width: '100vw' }}
            ></img>
          </div>
        </div>
      </div>

      <div className="  pr-6   mt-14">
        <h1 className="     font-sans   text-lg    text-blue-800  ml-4     font-bold">
          Registered Institute
        </h1>
        <Slider {...settings}>
          <div className="      w-[90%]  rounded-md  h-[90%] m-3   flex  items-center justify-center ">
            <img
              src="https://www.digilocker.gov.in/assets/img/mobile/img/en/whats-new/promotional-1-v46.png"
              className="  rounded-md shadow-xl h-[100%] object-cover "
            ></img>
          </div>

          <div className="     w-[90%]  rounded-md  h-[90%] m-3   flex  items-center justify-center ">
            <img
              src="https://www.digilocker.gov.in/assets/img/mobile/img/en/whats-new/promotional-2-v41.png"
              className="    sh  h-[100%] object-cover "
            ></img>
          </div>
          <div className="     w-[90%]  rounded-md  h-[90%] m-3   flex  items-center justify-center ">
            <img
              src="https://www.digilocker.gov.in/assets/img/mobile/img/en/whats-new/promotional-3-v37.png"
              className="    sh  h-[100%] object-cover "
            ></img>
          </div>
          <div className="     w-[90%]  rounded-md  h-[90%] m-3   flex  items-center justify-center ">
            <img
              src="https://www.digilocker.gov.in/assets/img/mobile/img/en/whats-new/promotional-4-v39.png"
              className="    sh  h-[100%] object-cover "
            ></img>
          </div>
          <div className="     w-[90%]  rounded-md  h-[90%] m-3   flex  items-center justify-center ">
            <img
              src="https://www.digilocker.gov.in/assets/img/mobile/img/en/whats-new/promotional-5-v37.png"
              className="    sh  h-[100%] object-cover "
            ></img>
          </div>
          <div className="     w-[90%]  rounded-md  h-[90%] m-3   flex  items-center justify-center ">
            <img
              src="https://www.digilocker.gov.in/assets/img/mobile/img/en/whats-new/promotional-5-v37.png"
              className="    sh  h-[100%] object-cover "
            ></img>
          </div>
          <div className="     w-[90%]  rounded-md  h-[90%] m-3   flex  items-center justify-center ">
            <img
              src="https://www.digilocker.gov.in/assets/img/mobile/img/en/whats-new/promotional-5-v37.png"
              className="    sh  h-[100%] object-cover "
            ></img>
          </div>
        </Slider>
      </div>

      <h1 className="   mt-8   font-sans   text-lg    text-blue-800  ml-4     font-bold">
        verified Institute
      </h1>
      <div className="wrapper  mt-0 ">
        <div className="top-item bggr ">
          <div className="item bg-red-800">
            <img
              className="  rounded-md"
              src="https://cf-media.api-setu.in/logo/doctypes/vv.png"
              style={{ height: '170px', width: '100vw' }}
            ></img>
          </div>
        </div>
        <div className="top-item">
          <div className="item object-cover">
            <img
              className="  rounded-md"
              src="https://cf-media.api-setu.in/logo/doctypes/HSC-3.jpg"
              style={{ height: '170px', width: '100vw' }}
            ></img>
          </div>
        </div>
        <div className="top-item">
          <div className="item">
            <img
              className="  rounded-md"
              src="https://cf-media.api-setu.in/logo/doctypes/Ration-Card-3.jpg"
              style={{ height: '170px', width: '100vw' }}
            ></img>
          </div>
        </div>
        <div className="top-item">
          <div className="item">
            <img
              className="  rounded-md"
              src="https://cf-media.api-setu.in/logo/doctypes/RC-3.jpg"
              style={{ height: '170px', width: '100vw' }}
            ></img>
          </div>
        </div>
        <div className="top-item">
          <div className="item">
            <img
              className="  rounded-md"
              src="https://cf-media.api-setu.in/logo/doctypes/IC-2.jpg"
              style={{ height: '170px', width: '100vw' }}
            ></img>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GovHome
