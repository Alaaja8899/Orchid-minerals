"use client"
import React, { useState } from 'react';

// Sample data for the reports
const categories = [
  'Quarterly Reports',
  'Annual Reports',
  'Technical Reports',
  'Annual Information Forms',
  'ESTMA Reports',
  'Proxy Documents',
];

const reportsData = [
  {
    date: '31 Jul 2024',
    title: "Management's Discussion and Analysis for the period ended June 30, 2024",
    type: 'Quarterly',
  },
  {
    date: '31 Jul 2024',
    title: 'Condensed consolidated interim financial statements as at June 30, 2024',
    type: 'Quarterly',
  },
  {
    date: '30 Apr 2024',
    title: "Management's Discussion and Analysis for the period ended March 31, 2024",
    type: 'Quarterly',
  },
];

const DynamicFlexCard = () => {
  const [selectedCategory, setSelectedCategory] = useState('Quarterly Reports');

  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="w-1/4 bg-gray-200 flex flex-col">
        {categories.map((category, index) => (
          <button
            key={index}
            onClick={() => setSelectedCategory(category)}
            className={`py-2 px-4 text-left ${
              selectedCategory === category ? 'bg-mainColor text-white' : 'bg-gray-200 text-gray-800'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Reports Section */}
      <div className="w-3/4 bg-white p-6">
        {reportsData.map((report, index) => (
          <div key={index} className="flex justify-between items-center mb-4 p-4 border border-gray-200 rounded-lg">
            <div>
              <span className="text-gray-500">{report.date}</span>
              <h3 className="text-lg font-semibold">{report.title}</h3>
            </div>
            <div className="text-mainColor font-semibold uppercase">{report.type}</div>
            <button className="text-mainColor hover:underline">
              <span>&#x2193;</span> {/* Download icon */}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DynamicFlexCard;
