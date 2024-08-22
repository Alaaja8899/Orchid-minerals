import { metadata } from '@/app/layout'
import React from 'react'


metadata.title="What we do"

function About() {
  return (
    <div className=" min-h-dvh">



            <div className=" flex md:flex-row flex-col-reverse bg-mainColor md:rounded-bl-[10%] ">
                
        <div className="side-1 bg-[url('https://www.ivanhoemines.com/wp-content/themes/ivanhoemines/img/home_operations_map_drc.svg?v2)')] bg-cover bg-center md:w-1/2 container mx-auto p-6 gap-3 flex flex-col">

<h1 className='font-bold md:text-4xl text-3xl text-white'>
About us
</h1>

<p className='text-blue-100 md:font-medium'>

Orchid 
Mines is a leading diversified mining company focused on discovering, developing and producing the critical resources essential for a low-carbon future. With a portfolio of tier-one assets, we provide exposure to copper, zinc, nickel, palladium, platinum, rhodium and other green metals. We believe that mining, done right, with purpose, vision, and a commitment to environmental and social responsibility, will play a significant role in the world’s transition to clean energy.


</p>

</div>
<div className="side-2 md:w-1/2 rounded-bl-[40%] overflow-hidden">
<img src="https://www.ivanhoemines.com/wp-content/uploads/221117-KCSA-084-Copy-scaled.jpg" alt="" />
</div>

            </div>



    </div>
  )
}

export default About
