import React from 'react'
import { FaArrowRight } from 'react-icons/fa6'



export const randomID = Math.random().toString(16).slice(2);


const data=[
    {
        icon:"https://www.ivanhoemines.com/wp-content/uploads/2023/06/icon_our_people.png",
        title:"Our People",
        desc:"The Ivanhoe experience starts and ends with a dedicated and purposeful team that values a more inclusive path to mine discovery, development and production."
    },
    {
        icon:"https://www.ivanhoemines.com/wp-content/uploads/2023/06/icon_our_planet.png",
        title:"Our Planet",
        desc:"The shift to clean energy requires enormous amounts of metals. Let’s obtain them responsibly and ethically while building a resilient future for planet earth."
    },
    {
        icon:"https://www.ivanhoemines.com/wp-content/uploads/2023/06/icon_our_prosperity.png",
        title:"Our Prosperity",
        desc:"Through our portfolio of tier-one assets, Ivanhoe Mines is poised to be a long-life, responsible producer of green metals the world needs to grow and prosper."
    },
    {
        icon:"https://www.ivanhoemines.com/wp-content/uploads/2023/06/icon_governance.png",
        title:"Governance",
        desc:"A culture of inclusivity enhances our performance. Moreover, it strengthens our associations with the communities we operate in and preserves the social value we bring."
    },
]



const Categories = () => {
  return (
    <div className='bg-mainColor'>
        
        <div className="container mx-auto gap-2 p-6 py-20 flex md:flex-row flex-col">

            {
                data.map(data=>{
                   return <SingleCategory data={data} key={randomID}/>
                })
            }

        </div>


    </div>
  )
}


const SingleCategory=(props)=>{
        const {icon , title , desc }=props.data
        return(
            <div className="categrory flex-col gap-3 flex md:w-[30rem] w-full cursor-pointer text-white">
                <div className="icon w-[50px] h-[50px] rounded-full overflow-hidden">
                        <img 
                        className='w-full h-full'
                        src={icon} alt="icon" />
                </div>
                <h2 className="tit font-bold text-3xl">
                    {title}
                </h2>
                <p className="desc font-medium">
                    {desc}
                </p>
                <a href="#!" className="link flex items-center gap-3 text-blue-500">Learn More <FaArrowRight/></a>
            </div>
        )
}

export default Categories
