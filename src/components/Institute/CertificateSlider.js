import React, { useContext, useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import first from "../../assets/carousel1.png"
import second from "../../assets/2.png"
import third from "../../assets/3.png"
import fourth from "../../assets/4.png"
import fifth from "../../assets/5.png"
import { AppContext } from '../../context/AppContext';
import jsPDF from "jspdf";
import PCertificate0 from "../../assets/1.png";
import PCertificate1 from "../../assets/2.png";
import PCertificate2 from "../../assets/3.png";
import PCertificate3 from "../../assets/4.png";
import PCertificate4 from "../../assets/5.png";
import toast from 'react-hot-toast';
import axios from 'axios';
import QRCode from 'qrcode';

const CertificateSlider = ()=> {

  const { 
    SetShowSlider,
    certificateData,
    createCertificate,
    encryptedData,
    setCall} = useContext(AppContext);  

  const goBack = () => {
    SetShowSlider(false);
  };
  
  const pdfGenerator0 = (qr) => {
    if(qr!=null){
    var doc = new jsPDF("landscape", "px", "a4", "false");
    doc.addImage(PCertificate0, "PNG", 65, 20, 500, 400);
    doc.setFontSize(38);
    doc.setFont("courier", "italic");
    doc.text(210, 225, certificateData.StudentName); // Student Name
    doc.setFontSize(20);
    doc.setFont("time", "bold");
    doc.text(330, 261, certificateData.courseName); // Course name
    doc.setFontSize(18);
    doc.setFont("time", "bold");
    doc.text(230, 294, certificateData.instituteName); // institute name
    doc.setFontSize(15);
    doc.setFont("time", "bold");
    doc.text(377, 297, `${certificateData.StartDate} to ${certificateData.EndDate}`); // end Date
    doc.setFontSize(15);
    doc.setFont("time", "bold");
    doc.text(227, 362, certificateData.AppliedAt); // issue Date
    doc.addImage(qr,"PNG",400,321,60,60);//qr code
    doc.save(`${certificateData.StudentName}'s_certificate.pdf`);
    const pdfArrayBuffer = doc.output("arraybuffer");
    return pdfArrayBuffer;
    }
  };

  const generateAndUploadPDF0 = (qrData) => {
    const generatedPDFArrayBuffer = pdfGenerator0(qrData);
    upload(generatedPDFArrayBuffer);
  };
  
  
  const pdfGenerator1 = (qr) => {
    var doc = new jsPDF("landscape", "px", "a4", "false");
    doc.addImage(PCertificate1, "PNG", 65, 20, 500, 400);
    doc.setFontSize(38);
    doc.setFont("courier", "italic");
    doc.text(190, 225, certificateData.StudentName); // Student Name
    doc.setFontSize(20);
    doc.setFont("", "bold");
    doc.text(310, 256, certificateData.courseName); // Course name
    doc.setFontSize(18);
    doc.setFont("", "bold");
    doc.text(228, 282, certificateData.instituteName); // institute name
    doc.setFontSize(15);
    doc.setFont("", "bold");
    doc.text(360, 282, `${certificateData.StartDate} to ${certificateData.EndDate}`); // end Date
    doc.setFontSize(15);
    doc.setFont("", "bold");
    doc.text(190, 350, certificateData.AppliedAt); // issue Date
    doc.addImage(qr,"PNG",400,315,60,60);//qr code
    doc.save(`${certificateData.StudentName}'s_certificate.pdf`);
    const pdfArrayBuffer = doc.output("arraybuffer");
    return pdfArrayBuffer;
  };

  const generateAndUploadPDF1 = (qrData) => {
    const generatedPDFArrayBuffer = pdfGenerator1(qrData);
    upload(generatedPDFArrayBuffer);
  };
  
  
  const pdfGenerator2 = async (qr) => {
    var doc = new jsPDF("landscape", "px", "a4", "false");
    doc.addImage(PCertificate2, "PNG", 65, 20, 500, 400);
    doc.setFontSize(40);
    doc.setFont("courier", "italic");
    doc.text(210, 215, certificateData.StudentName); // Student Name
    doc.setFontSize(18);
    doc.setFont("time", "bold");
    doc.text(335, 242, certificateData.courseName); // Course name
    doc.setFontSize(15);
    doc.setFont("time", "bold");
    doc.text(245, 268, certificateData.instituteName); // institute name
    doc.setFontSize(14);
    doc.setFont("time", "bold");
    doc.text(370, 265, `${certificateData.StartDate} to ${certificateData.EndDate}`); // end Date
    doc.setFontSize(15);
    doc.setFont("time", "bold");
    doc.text(230, 330, certificateData.AppliedAt); // issue Date
    doc.addImage(qr,"PNG",405,295,60,60);//qr code
    doc.save(`${certificateData.StudentName}'s_certificate.pdf`);
    const pdfArrayBuffer = doc.output("arraybuffer");
    return pdfArrayBuffer;
  };

  const generateAndUploadPDF2 = (qrData) => {
    const generatedPDFArrayBuffer = pdfGenerator2(qrData);
    upload(generatedPDFArrayBuffer);
  };
  
  
  const pdfGenerator3 = (qr) => {
    var doc = new jsPDF("landscape", "px", "a4", "false");
    doc.addImage(PCertificate3, "PNG", 65, 20, 500, 400);
    doc.setFontSize(38);
    doc.setFont("courier", "italic");
    doc.text(205, 215, certificateData.StudentName); // Student Name
    doc.setFontSize(18);
    doc.setFont("time", "bold");
    doc.text(335, 251, certificateData.courseName); // Course name
    doc.setFontSize(18);
    doc.setFont("time", "bold");
    doc.text(235, 272, certificateData.instituteName); // institute name
    doc.setFontSize(15);
    doc.setFont("time", "bold");
    doc.text(383, 274, `${certificateData.StartDate} to ${certificateData.EndDate}`); // end Date
    doc.setFontSize(18);
    doc.setFont("time", "bold");
    doc.text(224, 350, certificateData.AppliedAt); // issue Date
    doc.addImage(qr,"PNG",390,311,60,60);//qr code
    doc.save(`${certificateData.StudentName}'s_certificate.pdf`);
    const pdfArrayBuffer = doc.output("arraybuffer");
    return pdfArrayBuffer;
  };

  const generateAndUploadPDF3 = (qrData) => {
    const generatedPDFArrayBuffer = pdfGenerator3(qrData);
    upload(generatedPDFArrayBuffer);
  };
   
  const pdfGenerator4 = (qr) => {
    var doc = new jsPDF("landscape", "px", "a4", "false");
    doc.addImage(PCertificate4, "PNG", 65, 20, 500, 400);
    doc.setFontSize(25);
    doc.setFont("courier", "bolditalic");
    doc.text(230, 210, certificateData.StudentName); // Student Name
    doc.setFontSize(9);
    doc.setFont("time", "bold");
    doc.setFontSize(23);
    doc.setFont("time", "bold");
    doc.text(228, 271, certificateData.instituteName); // institute name
    doc.text(310, 241, certificateData.courseName); // Course name
    doc.setFontSize(16);
    doc.text(360, 272, ` ${certificateData.StartDate} to  ${certificateData.EndDate}`); // end Date
    doc.setFontSize(23);
    doc.text(190, 330, certificateData.AppliedAt); // issue Date
    doc.setFontSize(23);
    doc.addImage(qr,"PNG",400,315,60,60);//qr code
    doc.save(`${certificateData.StudentName}'s_certificate.pdf`);
    const pdfArrayBuffer = doc.output("arraybuffer");
    return pdfArrayBuffer;
  };

  
  const generateAndUploadPDF4 = (qrData) => {
    const generatedPDFArrayBuffer = pdfGenerator4(qrData);
    upload(generatedPDFArrayBuffer);
  };


  const generate = async (ci) => {
    try {
  
      if (encryptedData !== "") {
        const response = await QRCode.toDataURL(encryptedData);
  
        // Call the appropriate generateAndUploadPDF function based on the current index
        switch (ci) {
          case 0:
            generateAndUploadPDF0(response);
            break;
          case 1:
            generateAndUploadPDF1(response);
            break;
          case 2:
            generateAndUploadPDF2(response);
            break;
          case 3:
            generateAndUploadPDF3(response);
            break;
          case 4:
            generateAndUploadPDF4(response);
            break;
          default:
            console.log("Invalid index");
            break;
        }
      } else {
        console.alert("Error occurred");
      }
    } catch (error) {
      console.error("Error generating QR code:", error);
    }
  };


  const slides = [
    {
      url: first,
    },
    {
      url: second,
    },
    {
      url: third,
    },
    {
      url: fourth,
    },
    {
      url: fifth,
    } 
  ];
  
  const [currentIndex, setCurrentIndex] = useState(0)
  
  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };


    const upload = async (pdfArrayBuffer) => {
      if (pdfArrayBuffer) {
        try {
          const formData = new FormData();
          const pdfBlob = new Blob([pdfArrayBuffer], { type: "application/pdf" });
          formData.append("file", pdfBlob, "certificate.pdf");

          console.log("uploading ..............")
          const toastId = toast.loading("Uploading..")
  
          const resFile = await axios({
            method: "post",
            url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
            data: formData,
            headers: {
              pinata_api_key: `b9b8d091c20f70373cf2`,
              pinata_secret_api_key: `b7148047bfcec64d563e6dbc6f5eb4d2cf84a9fff0df6e3b88c240868849c270`,
              "Content-Type": "multipart/form-data",
            },
          });
  
          const ipfsHash = `https://gateway.pinata.cloud/ipfs/${resFile.data.IpfsHash}`;

          toast.dismiss(toastId)

          console.log(ipfsHash);
          if(ipfsHash){

          console.log("application")
          console.log(certificateData.studentAccount)
          console.log(certificateData.instituteAccount)
          console.log(certificateData.courseName)
          console.log(encryptedData)
          console.log(ipfsHash)
          console.log("end")

          if(encryptedData!= ""){
            await createCertificate(
              certificateData.studentAccount,
              certificateData.instituteAccount,
              certificateData.courseName,
              encryptedData,
              ipfsHash);
          } else {
            console.log("Data is is not encrypted");
          }
          
          setCall(true);
          toast.success("Uploaded Successfully")
          } else {
          toast.error("Cannot Upload")  
          }
        } catch (e) {
          console.log("file hi nahi aa pai: " +e);
        }
      } else{
        alert("Some error!!");
      }
    };

  return (
    <div className=' rounded-2xl border-2 bg-slate-200 shadow-2xl border-gray-700 scale-75 h-[700px] w-[900px] ml-96 pb-28 -mt-8 relative group'>
    <div className=' flex rounded-2xl flex-row-reverse h-10 w-full'> <button className=' rounded-tr-xl h-full ml-4 px-6 bg-red-600 text-white text center ' onClick={goBack}>X</button> </div>
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className='w-full px-4 h-full border-t-2 border-b-2 border-richblack-900 bg-center bg-cover duration-500'
      ></div>
      {/* Left Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactLeft onClick={prevSlide} size={40} />
      </div>
      {/* Right Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactRight onClick={nextSlide} size={40} />
      </div>
      <div className='flex p-5 t-8 justify-center'>
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className='text-2xl cursor-pointer'
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
              <button className='mt-7 rounded-md text-xl font-semibold bg-[#ef5b5b] text-white border-2 py-2 px-4' onClick={() => generate(currentIndex)}>Create Certificate</button>
    </div>
  );
}

export default CertificateSlider;