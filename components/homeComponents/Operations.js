import React from 'react'
import { FaGroupArrowsRotate } from "react-icons/fa6";

const ops=[
        {
            title : "Operations",
            desc: "We discover and sustainably develop the world’s greatest ore bodies."
        },
        {
            title : "Our Stories",
            desc: "We are Transformational mining company with the people processe it and passionate to do it better"
        },
        {
            title : "Latest News",
            desc: "We are care about our world and communities which we operate"
        },

]

const Operations = () => {
  return (
    <div className='flex flex-wrap gap-3 items-center justify-center mt-5 bg-mainColor bg-opacity-100  w-full  p-6'>

        {
            ops.map(data=>{
                return <SingleOp title={data.title} desc={data.desc} key={0}/>
            })
        }
    </div>
  )
}


const SingleOp=(props)=>{
    return (

        <div className="single-op text-white border hover:text-orange-300 md:w-[20rem] w-full p-3 rounded flex  gap-2 flex-col cursor-pointer">
        <FaGroupArrowsRotate size={32} color='white'/>
        <div className="txt">
            <h1 className='font-bold'>{props.title}</h1>
            <p>{props.desc}</p>
        </div>
    </div>

    )
}


export default Operations
