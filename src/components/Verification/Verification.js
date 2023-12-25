import React, { useState, useEffect, useContext } from 'react';
import QrScanner from 'react-qr-scanner';
import Lottie from 'lottie-react';
import Girl from '../../assets/Qrhome.json';
import { AppContext } from '../../context/AppContext';
import { useNavigate } from 'react-router-dom';

const Verification = () => {
  const { setScanResult,verification } = useContext(AppContext);

  const [scanError, setScanError] = useState(null);
  const navigate = useNavigate();

  const handleScan = async (data) => {
    if (data) {
      try {
        setScanResult(data.text);
        
        console.log("this is the result: ",data.text)

        if(data.text!=null){

        const res = await verification(data.text);
        // setFinalResult(res);
        console.log("Verification status:", res);

        if (res) {
          navigate('/verification-successfull');
        } else {
          navigate('/verification-failed');
        }
        }
      } catch (error) {
        console.error('Error during verification:', error);
        setScanError('Error during verification');
      }
    }
  };

  const handleError = (error) => {
    console.warn('Error during QR code scanning:', error);
    setScanError('Error during QR code scanning');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-indigo-500">
      <div style={{ width: '28%' }}>
        <Lottie loop={true} animationData={Girl} />
      </div>

      <div className="bg-red-400 p-8 rounded-lg shadow-md border-2 border-black">
        <h1 className="text-2xl font-bold mb-4 text-center ">
          QR Code Scanning in React
        </h1>

        <div className="bg-white w-[25rem] mx-6">
          <QrScanner
            onScan={handleScan}
            onError={handleError}
            style={{ width: '100%' }}
          />
        </div>

        {scanError && (
          <div className="text-red-500 mb-4">{scanError}</div>
        )}
      </div>
    </div>
  );
};

export default Verification;