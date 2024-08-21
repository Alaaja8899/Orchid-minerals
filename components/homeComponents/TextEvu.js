import React from 'react'


const data = [
    "Kamoa-Kakula Copper Complex",
    "Western Foreland Copper Exploration",
    "Kipushi Zinc Mine",
    "Platreef PGM-Nickel Mine",
    "Regional Exploration",
]


function TextEvu() {
  return (
    <div className='container mx-auto p-6 flex my-20 text-white'>
            {data.map(title=>{
                return <h1 key={0} className='font-bold text-3xl hover:text-orange-500 border-r-2 border-red-500 px-3'>{title}</h1>
            })}
    </div>
  )
}

export default TextEvu
