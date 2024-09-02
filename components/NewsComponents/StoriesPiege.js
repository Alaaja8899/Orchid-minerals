import React from 'react';

function StoriesPage() {
  return (
    <div className="bg-[#0a2c4a] text-white p-8">
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-8">
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold mb-4">Our Stories</h2>
          <h3 className="text-2xl font-bold mb-4">
            Breaking Barriers and Making History: Esther Nira’s Journey at KICO
          </h3>
          <p className="mb-6">
            Meet Esther Nira, the first female equipment operator at KICO, shattering long-held gender norms in the industry. Esther’s journey is a testament to her belief that no trade should be considered exclusive to men. Her story is a reminder that...
          </p>
          <a href="#" className="text-blue-500 font-semibold">Read more</a>
        </div>
        <div className="md:w-1/2 rounded-tl-[6rem] overflow-hidden">
          <img 
            src="https://www.ivanhoemines.com/wp-content/uploads/2024-07-10-Kico-CvH-6-scaled.jpg" 
            alt="Esther Nira's Journey" 
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </div>
  );
}

export default StoriesPage;
