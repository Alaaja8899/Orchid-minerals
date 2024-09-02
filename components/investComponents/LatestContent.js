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
            <button className="bg-white p-4 rounded-full shadow-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-8 w-8 text-mainColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.92v4.132a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 19.938a7.937 7.937 0 100-15.875 7.937 7.937 0 000 15.875z"
                />
              </svg>
            </button>
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
