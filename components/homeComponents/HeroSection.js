import React from 'react'

const HeroSection = () => {
  return (
    <div className="relative h-1/2 ">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src="/assets/hero-video.mp4"
        autoPlay
        loop
        muted
      ></video>
      
      <div className="relative z-10 flex flex-col items-start justify-center h-full bg-[rgba(0,0,0,0.4)] ">
        <div className="text-white text-center gap-4 flex flex-col p-6 h-full my-20">
          <h1 className='md:text-4xl text-3xl font-bold text-white'>
            Mining with a greater purpose.
          </h1>
          <p className='font-medium text-2xl text-blue-100'>
            We believe that mining, done right, with purpose, vision, and a commitment to environmental and social responsibility, will play a significant role in the world’s transition to clean energy.
          </p>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
