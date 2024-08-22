import React from 'react'
import { FaArrowRight } from 'react-icons/fa6'
import TextEvu from './TextEvu'

const Story = () => {
  return (
    <div className="min-h-screen  bg-white   ">
            <div className=" flex md:flex-row flex-col  gap-3">
    
            <div
  className="img-container md:w-1/2 "
  style={{
    clipPath: 'polygon(0% 0%, 85% 0%, 100% 50%, 85% 100%, 0% 100%)',
  }}
>
  <img className="w-full" src="https://www.ivanhoemines.com/wp-content/uploads/240606-KCSA-078-scaled-e1721339007460.jpg" />
</div>




                <div className="content md:w-1/2 container mx-auto p-6">
                <div className="card  bg-white">

<div className="top my-10 flex items-center justify-between">
<h1 className='text-4xl text-mainColor font-bold '>Our stories</h1>
<button className='md:flex hidden bg-mainColor p-3 text-white rounded px-6 items-center justify-between gap-2'>See All <FaArrowRight/></button>
</div>
</div>

                <div className="story-line">
                <h3 className='text-mainColor text-opacity-70 font-bold text-2xl'>We Are Ivanhoe – Armelle Kumba’s Inspiring IT Journey</h3>
                    <p>     
                        Born and raised in the vibrant town of Kolwezi in the Democratic Republic of the Congo, Armelle grew up in a large household of nine, where she learned the importance of fostering strong relationships both at home and in the workplace. Her passion for technology was ignited early on, leading her to earn a diploma in Mathematics and Physics from Ukweli Institute, followed by a bachelor’s degree in System and Network Administration from ESISalama.
                        Armelle’s...
                    </p>
                        <a href="#!" className='text-blue-500'>Read More</a>
                </div>

                </div>

                </div>

                <div className="bg-mainColor rounded md:block hidden">
                <TextEvu/>

                </div>

    </div>
  )
}

export default Story
