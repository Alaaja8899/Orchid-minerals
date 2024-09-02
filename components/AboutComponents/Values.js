import React from 'react'
import { randomID } from '../homeComponents/Categories'



const data=[
    {
     tit:"Ingenuity",
     desc:"We are both clever and inventive in our approach. We are a transformational mining company with the people, processes and passion to do it better."
    },
    {
     tit:"Tenacity.",
     desc:"Mining is a complex business. It takes long-term thinking, dedication and perseverance to doing it right."
    },
    {
     tit:"Compassion.",
     desc:"We value a more inclusive path to mine discovery, development and production. We care about the people and communities we work with and approach situations with kindness and consideration."
    },
]



function Values() {
  return (
    <div className='container mx-auto p-6'>
      
        <h1 className='text-center font-bold text-3xl'>Our Values</h1>
        <p
        className='text-center text-gray-500'
        >
        Our core values underlie a company-wide culture that embraces ingenuity, tenacity and compassion. We believe these guiding principles will lead Ivanhoe to a prosperous future for all stakeholders while also making significant contributions to a cleaner, healthier planet.
        </p>

            <div className="v-cards flex md:flex-row flex-col gap-2 my-20">


                {
                    data.map(data=>{
                        return                     <div key={randomID} className="card md:w-[30rem] w-full border-mainColor border p-3 rounded text-center">
                        <h2
                        className='text-mainColor font-bold text-3xl'
                        >
                            {data.tit}
                        </h2>
                        <p className='to-gray-500'>
                            {data.desc}
                        </p>
                    </div>


                    })
                }



            </div>

    </div>
  )
}

export default Values


