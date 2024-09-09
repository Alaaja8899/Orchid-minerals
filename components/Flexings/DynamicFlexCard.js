"use client";
import React, { useState } from "react";

// Sample data for the reports
const categories = [
  "Quarterly Reports",
  "Annual Reports",
  "Technical Reports",
  "Annual Information Forms",
  "ESTMA Reports",
  "Proxy Documents",
];

const reportsData = [
  {
    date: "31 Jul 2024",
    title: "Management&apos;s Discussion and Analysis for the period ended June 30, 2024",
    type: "Quarterly",
  },
  {
    date: "31 Jul 2024",
    title: "Condensed consolidated interim financial statements as at June 30, 2024",
    type: "Quarterly",
  },
  {
    date: "30 Apr 2024",
    title: "Management&apos;s Discussion and Analysis for the period ended March 31, 2024",
    type: "Quarterly",
  },
  {
    date: "31 Dec 2023",
    title: "Annual consolidated financial statements for the year ended December 31, 2023",
    type: "Annual",
  },
  {
    date: "31 Dec 2023",
    title: "Technical report for the year 2023",
    type: "Technical",
  },
  {
    date: "15 Feb 2024",
    title: "Annual Information Form for the year ended December 31, 2023",
    type: "Annual Information",
  },
  {
    date: "10 Mar 2024",
    title: "ESTMA Report for the year ended December 31, 2023",
    type: "ESTMA",
  },
  {
    date: "05 Apr 2024",
    title: "Proxy Circular for the Annual Meeting of Shareholders",
    type: "Proxy",
  },
  {
    date: "31 Dec 2022",
    title: "Annual Report for the year ended December 31, 2022",
    type: "Annual",
  },
  {
    date: "01 Oct 2023",
    title: "Quarterly financial summary for Q3 2023",
    type: "Quarterly",
  },
  {
    date: "20 Jun 2023",
    title: "Technical report update for mid-year 2023",
    type: "Technical",
  },
  {
    date: "12 May 2023",
    title: "Annual Information Form for the year ended December 31, 2022",
    type: "Annual Information",
  },
  {
    date: "18 Nov 2023",
    title: "ESTMA Report for the year ended December 31, 2022",
    type: "ESTMA",
  },
  {
    date: "25 Mar 2024",
    title: "Proxy Circular for the Special Meeting of Shareholders",
    type: "Proxy",
  },
  {
    date: "15 Aug 2023",
    title: "Management&apos;s Discussion and Analysis for the period ended June 30, 2023",
    type: "Quarterly",
  },
  {
    date: "22 Jan 2023",
    title: "Annual consolidated financial statements for the year ended December 31, 2022",
    type: "Annual",
  },
  {
    date: "28 Sep 2023",
    title: "Technical report summary for Q3 2023",
    type: "Technical",
  },
  {
    date: "05 Mar 2023",
    title: "Annual Information Form for the year ended December 31, 2022",
    type: "Annual Information",
  },
  {
    date: "07 Feb 2023",
    title: "ESTMA Report for the year ended December 31, 2022",
    type: "ESTMA",
  },
  {
    date: "11 Apr 2024",
    title: "Proxy Documents for the Annual Shareholder Meeting",
    type: "Proxy",
  },
  {
    date: "20 Jul 2024",
    title: "Default report for missing category data",
    type: "Default",
  },
];

const typeMapping = {
  "Quarterly Reports": "Quarterly",
  "Annual Reports": "Annual",
  "Technical Reports": "Technical",
  "Annual Information Forms": "Annual Information",
  "ESTMA Reports": "ESTMA",
  "Proxy Documents": "Proxy",
};

const DynamicFlexCard = () => {
  const [selectedCategory, setSelectedCategory] = useState("Quarterly Reports");

  // Filter reports based on the selected category, or show default if empty
  const filteredReports =
    reportsData.filter((report) => report.type === typeMapping[selectedCategory]).length > 0
      ? reportsData.filter((report) => report.type === typeMapping[selectedCategory])
      : reportsData.filter((report) => report.type === "Default");

  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="w-1/4 bg-gray-200 flex flex-col">
        {categories.map((category, index) => (
          <button
            key={index}
            onClick={() => setSelectedCategory(category)}
            className={`py-2 px-4 text-left ${
              selectedCategory === category
                ? "bg-mainColor text-white"
                : "bg-gray-200 text-gray-800"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Reports Section */}
      <div className="w-3/4 bg-white p-6">
        {filteredReports.map((report, index) => (
          <div
            key={index}
            className="flex justify-between items-center mb-4 p-4 border border-gray-200 rounded-lg"
          >
            <div>
              <span className="text-gray-500">{report.date}</span>
              <h3 className="text-lg font-semibold">{report.title}</h3>
            </div>
            <div className="text-mainColor font-semibold uppercase">
              {report.type}
            </div>
            <button className="text-mainColor hover:underline">
              {/* <span>&#x2193;</span> Download icon */}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DynamicFlexCard;
