import React from 'react'
import Image from 'next/image'
const HeroSection = () => {
  return (
    <div className="bg-[url('/assets/hero-image.jpg')] bg-cover bg-center h-1/2  rounded-b-[10%] overflow-hidden">
    <div className="flex items-start justify-center h-full bg-[rgb(0,0,0,.8)]">
   
      <div className="top text-white text-center   rounded-b-[10%] p-6  h-full ">
        <h1
        className='md:text-4xl text-2xl font-bold text-white '
        >
        Mining with a greater purpose.

        </h1>
        <p
        className='font-medium md:text-2xl text-gray-400'
        >
        We believe that mining, done right, with purpose, vision, and a commitment to environmental and social responsibility, will play a significant role in the world’s transition to clean energy.
        </p>
      </div>
   
      
   
   
   
    </div>
  </div>
  )
}

export default HeroSection
