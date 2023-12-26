import React from 'react';

const ContainerLoader = () => {
  return (
    <div className="inline-block relative w-80 h-80">
      <div className="inline-block absolute left-8 w-16 bg-white animate-loader-delay-0"></div>
      <div className="inline-block absolute left-32 w-16 bg-white animate-loader-delay-1"></div>
      <div className="inline-block absolute left-56 w-16 bg-white animate-loader-delay-2"></div>
    </div>
  );
};

export default ContainerLoader;
