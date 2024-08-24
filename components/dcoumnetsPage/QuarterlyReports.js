import React from 'react';

const QuarterlyReports = () => {
  return (
    <div className="p-4 w-full mx-auto bg-gray-100">
      <div className="flex items-center mb-4 flex-wrap  justify-center">
        <select className="bg-white border border-gray-300 rounded-md px-4 py-2 mr-4">
          <option>Quarterly Reports</option>
          {/* Add more options if needed */}
        </select>
        <input
          type="text"
          placeholder="Keywords"
          className="flex-grow border border-gray-300 rounded-md px-4 py-2"
        />
        <select className="bg-white border border-gray-300 rounded-md px-4 py-2 ml-4">
          <option>Year</option>
          {/* Add more options if needed */}
        </select>
      </div>
      <div className="space-y-4">
        <div className="bg-white p-4 rounded-md shadow">
          <div className="text-gray-500 text-sm mb-2">31 JUL 2024</div>
          <div className="text-lg font-semibold text-gray-800">
            Management's Discussion and Analysis for the period ended June 30, 2024
          </div>
          <div className="text-mainColor mt-2">
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-6 h-6 inline-block"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 12h16M12 4l8 8-8 8"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="bg-white p-4 rounded-md shadow">
          <div className="text-gray-500 text-sm mb-2">31 JUL 2024</div>
          <div className="text-lg font-semibold text-gray-800">
            Condensed consolidated interim financial statements as at June 30, 2024
          </div>
          <div className="text-mainColor mt-2">
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-6 h-6 inline-block"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 12h16M12 4l8 8-8 8"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuarterlyReports;
