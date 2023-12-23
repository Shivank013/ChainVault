// SkeletonLoader.js

import React from 'react';

const SkeletonLoader = () => {
  return (
    <div className="flex flex-col gap-y-2">
      {/* Row 1 */}
      <div className=" mx-6 my-2 mt-8  flex items-center">
        <div className="w-16 h-16 bg-gray-300 rounded-full animate-pulse mr-6"></div>
        <div className="flex space-x-2">
          <div className=" w-[55rem]  h-28 bg-gray-300 rounded-full animate-pulse"></div>
        </div>
      </div>

      {/* Row 2 */}
      <div className=" mx-6 my-2 flex items-center">
        <div className="w-16 h-16 bg-gray-300 rounded-full animate-pulse mr-6"></div>
        <div className="flex space-x-2">
          <div className=" w-[55rem]  h-28 bg-gray-300 rounded-full animate-pulse"></div>
        </div>
      </div>

      {/* Row 3 */}
      <div className=" mx-6 my-2 flex items-center">
        <div className="w-16 h-16 bg-gray-300 rounded-full animate-pulse mr-6"></div>
        <div className="flex space-x-2">
          <div className=" w-[55rem]  h-28 bg-gray-300 rounded-full animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonLoader;
