import React from "react";

const LatestContent = () => {
  return (
    <div className="bg-[#1B2A3A] p-8">
      <div className="text-white text-3xl font-bold mb-6">
        <h2>Latest Presentation</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-md overflow-hidden shadow-lg">
          <img
            src="https://www.ivanhoemines.com/wp-content/uploads/Screenshot-2024-08-20-154733.png"
            alt="Ivanhoe Mines Investor Presentation"
            className="w-full h-60 object-cover"
          />
          <div className="p-4">
            <span className="bg-mainColor text-white text-xs font-bold px-2 py-1 rounded-full">
              INVESTOR PRESENTATION
            </span>
            <p className="text-gray-700 text-sm mt-2">September 2024</p>
            <p className="text-gray-700 text-sm mt-1">
              Ivanhoe Mines, Investor Presentation, September 2024
            </p>
          </div>
        </div>

        <div className="bg-white rounded-md overflow-hidden shadow-lg">
          <img
            src="https://www.ivanhoemines.com/wp-content/uploads/Screenshot-2024-08-20-154733.png"
            alt="Ivanhoe Mines Q2 Financial Results"
            className="w-full h-60 object-cover relative"
          />
          <div className="absolute inset-0 flex items-center justify-center">
          </div>
          <div className="p-4">
            <p className="text-gray-700 text-sm mt-1">
              Ivanhoe Mines Q2 Financial Results 2024
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestContent;
