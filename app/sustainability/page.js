import Categories from '@/components/homeComponents/Categories'
import DollarCards from '@/components/SusComponents/DollarCards'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa6'

function page() {
  return (
    <div className='bg-mainColor  '>

          <div className="con mb-40 flex md:flex-row flex-col-reverse gap-2">
          <div className="side-1 gap-3 flex flex-col md:w-full text-white container mx-auto p-6">
                <h1
                className='md:text-5xl text-3xl font-bold border-b w-fit rounded pb-4'
                >
                Sustainability
                </h1>
                <p className='font-medium text-2xl'>
                At the heart of our culture is a deep sense of personal commitment and true care for the individuals, communities, and environments where we work. Mining is crucial and its significance is growing as we push towards cleaner energy and decarbonization. We need to continue mining, but we must mine responsibly, mindfully and with a greater purpose in mind.
                </p>
                <button
                className='bg-black w-fit flex items-center justify-center p-3 rounded'
                >
                Download Sustainability Report <FaArrowRight/>
                </button>
        </div>

          <div className="side-2 rounded-bl-[30%] overflow-hidden md:w-9/12 h-1/2">
                <img
                className='w-full h-full'
                src="https://www.ivanhoemines.com/wp-content/uploads/231205-KCSA-095-scaled-e1724212688339.jpg" alt="sus bg" />
          </div>

          </div>

          <DollarCards/>
          <Categories/>
    </div>
  )
}

export default page
