import React, { useState, useEffect, useContext } from 'react';
import { Html5QrcodeScanner } from 'html5-qrcode';
import Lottie from 'lottie-react';
import Girl from '../../assets/Qrhome.json';
import { AppContext } from '../../context/AppContext';
import { useNavigate } from 'react-router-dom'; // Import useNavigate instead of useHistory

const Verification = () => {
  const { verification,scanResult, setScanResult } = useContext(AppContext);
  const [finalResult, setFinalResult] = useState(false);
  const navigate = useNavigate(); // Use useNavigate instead of useHistory

  useEffect(() => {
    let scanner;

    // Initialize the scanner when the component mounts
    const initializeScanner = () => {
      scanner = new Html5QrcodeScanner('reader', {
        qrbox: {
          width: 340,
          height: 450,
        },
        fps: 3,
      });

      scanner.render(success, error);
    };

    // Cleanup the scanner when the component unmounts
    const cleanupScanner = () => {
      if (scanner) {
        scanner.clear();
      }
    };

    async function success(result) {
      cleanupScanner(); // Clear the scanner after a successful scan
      setScanResult(result);
      console.log(result)

      if (result !== null) {
        const res = await verification(result);
        console.log("result to y h: ", res)
        setFinalResult(res);
        console.log("Verification status: ", finalResult);

        // Change route based on the verification result using useNavigate
        if (res) {
          navigate('/verification-successfull');
        } else {
          navigate('/verification-failed');
        }
      } else {
        setFinalResult(false);
      }
    }

    function error(err) {
      console.warn(err);
    }

    // Initialize the scanner when the component mounts
    initializeScanner();

    // Cleanup the scanner when the component unmounts
    return () => {
      cleanupScanner();
    };
  }, [verification, navigate]); // Include verification and navigate in the dependency array

  return (
    <div className="flex items-center justify-center min-h-screen bg-indigo-500">
      <div style={{ width: '28%' }}>
        <Lottie loop={true} animationData={Girl} />
      </div>

      <div className="bg-red-400 p-8 rounded-lg shadow-md border-2  border-black">
        <h1 className="text-2xl font-bold mb-4 text-center ">
          QR Code Scanning in React
        </h1>

        <div
          className="w-full  h-96 bg-gray-100 rounded-lg overflow-hidden"
          id="reader"
        ></div>
      </div>
    </div>
  );
};

export default Verification;
