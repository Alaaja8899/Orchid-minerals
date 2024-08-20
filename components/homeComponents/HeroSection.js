import React from 'react'
import Operations from './Operations'

const HeroSection = () => {
  return (
    <div className="relative h-5/6 rounded-b-[10%] overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src="https://videos.pexels.com/video-files/4474927/4474927-uhd_2560_1440_30fps.mp4"
        autoPlay
        loop
        muted
      ></video>
      
      <div className="relative z-10 flex flex-col items-start justify-center h-full bg-[rgba(0,0,0,0.8)]">
        <div className="text-white text-center gap-4 flex flex-col p-6 h-full my-20">
          <h1 className='md:text-4xl text-3xl font-bold text-white'>
            Mining with a greater purpose.
          </h1>
          <p className='font-medium text-2xl text-blue-100'>
            We believe that mining, done right, with purpose, vision, and a commitment to environmental and social responsibility, will play a significant role in the world’s transition to clean energy.
          </p>
        </div>
        <Operations />
      </div>
    </div>
  )
}

export default HeroSection
