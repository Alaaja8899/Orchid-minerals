import React from 'react'
import { FaGroupArrowsRotate } from "react-icons/fa6";
import { MdPlayArrow } from "react-icons/md";
import { randomID } from './Categories';

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
                return <SingleOp title={data.title} desc={data.desc} key={randomID}/>
            })
        }
    </div>
  )
}


const SingleOp=(props)=>{
    return (

        <div className="single-op text-white  hover:text-orange-300 md:w-[25rem] w-full p-3 rounded flex  gap-2 md:flex-row items-center  cursor-pointer">
        <span className='bg-white rounded-full text-black'><MdPlayArrow size={42} /></span>
        <div className="txt">
            <h1 className='font-bold'>{props.title}</h1>
            <p>{props.desc}</p>
        </div>
    </div>

    )
}


export default Operations
