import React from "react";

const LatestNews = () => {
  const newsItems = [
    {
      date: "19 Aug 2024",
      title: "Ivanhoe Mines Announces Phase 3 Concentrator at Kamoa-Kakula Copper Complex Has Achieved Commercial Production",
      description: "Kamoa-Kakula reports a record 35,941 tonnes of copper produced in July. Phase 3 increases annual copper [...]",
      img:""
    },
    {
      date: "16 Aug 2024",
      title: "Ivanhoe Mines Reports Fatality at the Kamoa-Kakula Copper Complex",
      description: "Kolwezi, Democratic Republic of Congo–(Newsfile Corp. – August 16, 2024) – Ivanhoe Mines (TSX: IVN) (OTCQX: [...]",
      img:""
    },
    {
      date: "31 Jul 2024",
      title: "Ivanhoe Mines Issues Second Quarter 2024 Financial Results, and Review of Construction and Exploration",
      description: "",
      img:""
    },
    {
      date: "22 Jul 2024",
      title: "Ivanhoe Mines to Issue Q2 2024 Financial Results and Host Conference Call for Investors on July 31, 2024",
      description: "",
      img:""
    },
  ];

  return (
    <div className="bg-[#1B2A3A] p-8">
      <div className="text-white text-3xl font-bold mb-6">
        <h2>Latest News</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {newsItems.map((item, index) => (
          <div key={index} className={`bg-white p-6 rounded-md shadow-lg relative`}>
            <div className="text-xs text-gray-500 mb-2">{item.date}</div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">{item.title}</h3>
            {item.description && <p className="text-sm text-gray-700 mb-4">{item.description}</p>}
            <a href="#" className="text-mainColor text-sm font-bold inline-flex items-center">
              Read more
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="ml-2 h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
            {index % 2 === 1 && (
              <div className="absolute top-0 right-0 h-full w-1 bg-mainColor" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestNews;
