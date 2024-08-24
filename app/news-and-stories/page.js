import Story from '@/components/homeComponents/Story'
import LatestContent from '@/components/investComponents/LatestContent';
import LatestNews from '@/components/investComponents/LatestNews';
import React from 'react'

function page() {
    const newsArticles = Array.from({ length: 50 }, (_, i) => ({
        title: `Breaking News ${i + 1}`,
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      }));
    
 
    return (
    <div>
          <LatestContent/>
          <LatestNews/>

        <Story/>
        <div className="bg-gray-100 min-h-screen pt-12">
      <h1 className="text-center text-4xl font-bold text-[#183C67] mb-12">News Feed</h1>
      
      <div className="max-w-3xl mx-auto p-5">
        <div className="flex justify-between items-center mb-5">
          <input
            type="text"
            placeholder="Search news..."
            className="p-2 rounded-md border border-[#183C67] flex-1 mr-4"
          />
          <button className="bg-[#183C67] text-white py-2 px-4 rounded-md">
            Filter 1
          </button>
          <button className="bg-[#183C67] text-white py-2 px-4 rounded-md ml-2">
            Filter 2
          </button>
          <button className="bg-[#183C67] text-white py-2 px-4 rounded-md ml-2">
            Filter 3
          </button>
        </div>
        
        {newsArticles.map((article, index) => (
          <div key={index} className="bg-[#183C67] text-white p-5 rounded-lg mb-5">
            <h3 className="text-xl font-bold">{article.title}</h3>
            <p className="mt-2">{article.description}</p>
          </div>
        ))}
      </div>
    </div>


    </div>
  )
}

export default page
