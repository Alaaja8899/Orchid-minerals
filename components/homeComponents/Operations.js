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
            desc: ""
        },

]

const Operations = () => {
  return (
    <div>


        <div className="single-op text-white bg-mainColor hover:text-orange-300 md:w-[20rem] w-full p-3 rounded flex  gap-2 flex-col">
            <FaGroupArrowsRotate size={32} color='red'/>
            <div className="txt">
                <h1>{ops[0].title}</h1>
                <p>{ops[0].desc}</p>
            </div>
        </div>

    </div>
  )
}

export default Operations
