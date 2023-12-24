import React, { useState, useEffect } from 'react'

import Lottie from 'lottie-react'
import vsucess from '../../assets/verificationfaild.json'

const Verificationfaild = () => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    // Disable vertical scrolling on mount
    document.body.style.overflowY = 'hidden'

    // Re-enable vertical scrolling on unmount
    return () => {
      document.body.style.overflowY = 'auto'
    }
  }, [])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-200 mt-12 relative">
      <h1 className="text-3xl font-bold mb-4 text-center text-blue-500">
        Certificate Verification Failed
      </h1>
      <div className="w-full max-w-screen-lg mt-8 p-8 bg-white rounded-md shadow-md">
        <div className="w-full flex items-center justify-center">
          <Lottie className="max-w-full" loop={true} animationData={vsucess} />
        </div>
      </div>
    </div>
  )
}

export default Verificationfaild
