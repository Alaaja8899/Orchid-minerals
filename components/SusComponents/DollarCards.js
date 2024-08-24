import React from 'react'
import { randomID } from '../homeComponents/Categories'
const data=[
        {
            tit:"$4.1 Billion",
            desc:"Total value created and distributed by Ivanhoe Mines within the communities of host countries"
        },
        {
            tit:"849",
            desc:"Scholarships and bursaries distributed group-wide in 2023."
        },
        {
            tit:"91%",
            desc:"Full-time workforce of local Congolese employees at Ivanhoe Mines"
        },
        {
            tit:"$2.7 Billion",
            desc:"Amount spent on domestic suppliers across the group in 2023."
        },
        {
            tit:"$70 Million",
            desc:"Amount spent to date on socio-economic development initiatives across Ivanhoe's host communities"
        },
        {
            tit:"6%",
            desc:"Amount Kamoa-Kakula generated towards DRC GDP in 2023"
        },
]



function DollarCards() {
  return (
    <div className='container mx-auto p-6 bg-white rounded'>
      
        
            <div className="v-cards flex md:flex-row flex-wrap items-center justify-center  flex-col gap-2 my-20">


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

export default DollarCards
