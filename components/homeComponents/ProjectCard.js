import React from 'react'
import Swiper from 'swiper'
import {navigation , pagination} from "swiper/modules"


import Image from 'next/image'
function ProjectCard() {
  return (
    <div className=' container mx-auto p-6 my-10'>        

            <h1 className='text-3xl text-white font-bold my-5'>Our Operations and Projects</h1>


            <div className="pro-card bg-white md:w-[40rem] h-fit w-full flex md:flex-row flex-col rounded-[5%] overflow-hidden">

              <div className="img md:w-1/2">
              <img 
              className='w-full h-full'
              src="https://images.unsplash.com/photo-1523848309072-c199db53f137?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bWluaW5nfGVufDB8fDB8fHww" alt="mining" />

              </div>

                <div className="info p-4 md:w-1/2">
                <h1 className='font-bold text-2xl '>
              Kamoa-Kakula Copper Complex
              </h1>
              <h3 className='text-red-500 font-bold'>
              Mine Ownership: Ivanhoe Mines 39.6%
              </h3>
              <p>
              The Kamoa-Kakula Copper Complex is the world’s fastest-growing, highest-grade, lowest-carbon major copper mine. Kamoa-Kakula produced 393,551 tonnes of copper in concentrate in 2023, which was inside the 2023 production guidance range of 390,000 to 430,000 tonnes. Kamoa-Kakula’s 2023 production achievement represents a year-over-year increase of 18%.
              </p>

                </div>

            </div>

    </div>
  )
}

export default ProjectCard
