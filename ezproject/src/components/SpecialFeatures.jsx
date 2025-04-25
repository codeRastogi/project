import React from 'react';
import SpecialCards from './ui/card';

const SpecialFeatures = () => {
  return (
    <div className="h-screen bg-white flex flex-col pt-5">
      {/* Top Heading */}
      <div className="text-center mb-10">
        <h1 className="text-3xl text-blue-950 font-bold">
          What makes us so special?
        </h1>
      </div>

      {/* Bottom Content */}
      <div className="flex flex-col lg:flex-row flex-1 justify-between gap-10 px-10">
        {/* Left Side - 10-20-30 Rule */}
        <div className="flex flex-col items-start  lg:w-1/2 w-full pl-[10vw] lg:pl-[8vw]">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">
            The 10-20-30 Rule at EZ
          </h2>

          <div className="relative pl-10">
            {/* Vertical Line */}
            <div className="absolute left-4 top-2 h-full border-l-2 border-gray-500"></div>

            {/* 10 Minutes */}
            <div className="mb-10 relative">
              <div className="absolute left-[-31px] top-2 w-4 h-4 bg-gray-800 rounded-full"></div>
              <div className="flex items-center space-x-6">
                <div className="text-2xl font-bold text-gray-800">
                  10 <span className="text-sm font-normal">Minutes</span>
                </div>
                <div className="bg-gray-300 w-[15vw] h-[6vh] px-4 py-2 rounded-md text-gray-800 text-sm font-bold">
                  Acknowledge Request
                </div>
              </div>
            </div>

            {/* 20 Minutes */}
            <div className="mb-10 relative">
              <div className="absolute left-[-31px] top-3 w-4 h-4 bg-gray-800 rounded-full"></div>
              <div className="flex items-center space-x-6">
                <div className="text-2xl font-bold text-gray-800">
                  20 <span className="text-sm font-normal">Minutes</span>
                </div>
                <div className="bg-gray-300 w-[15vw] h-[6vh] px-4 py-2 rounded-md text-gray-800 text-sm font-bold">
                  Allocate Experts
                </div>
              </div>
            </div>

            {/* 30 Minutes */}
            <div className="relative">
              <div className="absolute left-[-31px] top-3 w-4 h-4 bg-gray-800 rounded-full"></div>
              <div className="flex items-center space-x-6">
                <div className="text-2xl font-bold text-gray-800">
                  30 <span className="text-sm font-normal">Minutes</span>
                </div>
                <div className="bg-gray-300 w-[15vw] h-[6vh] px-4 py-2 rounded-md text-gray-800 text-sm font-bold">
                  Begin Assignment
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Vertical Divider */}
        <div className="w-[2px] lg:h-[70vh] h-[2px] lg:w-[2px] bg-blue-950 my-6 lg:my-0"></div>

        {/* Right Side */}
        <div className="lg:w-1/2 w-full">
          <SpecialCards />
        </div>
      </div>
    </div>
  );
};

export default SpecialFeatures;
