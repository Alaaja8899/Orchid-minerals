import React from 'react'
import { FaArrowRight, FaEarthAfrica, FaHandshake, FaHelmetSafety, FaPlantWilt } from 'react-icons/fa6'



export const randomID = Math.random().toString(16).slice(2);


const data=[
    {
        icon:<FaHelmetSafety size={32}/>,
        title:"Our People",
        desc:"Orchid-Minerals experience starts and ends with a dedicated and purposeful team that values a more inclusive path to mine discovery, development and production.",
        color:"bg-red-500"
    
    },
    {
        icon:<FaEarthAfrica size={32}/>,
        title:"Our Planet",
        desc:"The shift to clean energy requires enormous amounts of metals. Let’s obtain them responsibly and ethically while building a resilient future for planet earth.",
        color:"bg-green-500"
    },
    {
        icon:<FaPlantWilt size={32}/>,
        title:"Our Prosperity",
        desc:"Through our portfolio of tier-one assets, Ivanhoe Mines is poised to be a long-life, responsible producer of green metals the world needs to grow and prosper.",
        color:"bg-yellow-500"
    },
    {
        icon:<FaHandshake size={32}/>,
        title:"Governance",
        desc:"A culture of inclusivity enhances our performance. Moreover, it strengthens our associations with the communities we operate in and preserves the social value we bring.",
        color:"bg-blue-500"
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
        const {icon , title , desc,color }=props.data
        return(
            <div className="categrory flex-col gap-3 flex md:w-[30rem] w-full cursor-pointer text-white">
                <div className={`icon w-[60px] h-[60px] ${color} rounded-full flex items-center justify-center overflow-hidden`}>
                        {icon}
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
