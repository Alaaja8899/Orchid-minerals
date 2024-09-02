import React from 'react'
import { FaGroupArrowsRotate } from "react-icons/fa6";
import { MdPlayArrow } from "react-icons/md";
import { randomID } from './Categories';
import Image from 'next/image';
import Link from 'next/link';
const ops=[
        {
            title : "Operations",
            desc: "We discover and sustainably develop the world’s greatest ore bodies.",
            link:"what-we-do"
        },
        {
            title : "Our Stories",
            desc: "We are Transformational mining company with the people processe it and passionate to do it better",
            link:"news-and-stories"
        },
        {
            title : "Latest News",
            desc: "We are care about our world and communities which we operate",
            link:"news-and-stories"
        },

]

const Operations = () => {
  return (
    <div className='flex flex-wrap gap-3 items-start md:justify-center justify-start mt-5 bg-mainColor bg-opacity-100  w-full   p-6'>

        {
            ops.map(data=>{
                return <SingleOp title={data.title} desc={data.desc} link={data.link} key={randomID} />
            })
        }
    </div>
  )
}


const SingleOp=(props)=>{
    return (
        <Link href={props.link}>
        <div className="single-op text-white  hover:text-orange-300 md:w-[25rem] w-full p-3 rounded flex flex-col  gap-2  items-start  cursor-pointer">
        <span className='w-[70px]  h-[70px]  rounded-full overflow-hidden flex items-center justify-center'>
            <img 
            className='w-full h-full'
            src="/assets/icon.jpeg" alt="custom-icon" />
        </span>
        <div className="txt">
            <h1 className='font-bold'>{props.title}</h1>
            <p>{props.desc}</p>
        </div>
    </div>
    </Link>

    )
}


export default Operations
