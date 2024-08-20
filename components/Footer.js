"use client"
import React, { useState } from 'react'
import { IoLogoYoutube } from "react-icons/io";
import { FaFacebookSquare , FaInstagram } from "react-icons/fa";
import { IoIosArrowDown,IoIosArrowUp } from "react-icons/io";

import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa6';

const faqs = [
  {
    title: "What products does Orchid Minerals offer?",
    desc: "Orchid Minerals specializes in high-quality mineral products including silica, bentonite, kaolin, and other industrial minerals. Our products are used in a wide range of industries such as construction, cosmetics, and agriculture."
  },
  {
    title: "Where do you source your minerals?",
    desc: "We source our minerals from environmentally responsible mines located around the world. Our team ensures that all sourcing is done sustainably, with a focus on maintaining the natural environment and supporting local communities."
  },
  {
    title: "How can I place an order with Orchid Minerals?",
    desc: "You can place an order by contacting our sales team via email or phone. Alternatively, you can visit our website and use our online order form. Our team will guide you through the process and help with any special requirements."
  },
  {
    title: "Do you provide custom mineral blends?",
    desc: "Yes, we offer custom blending services to meet the specific needs of our clients. Whether you need a unique mineral composition or a specific particle size, our experts can create a blend tailored to your requirements."
  },
  {
    title: "What quality control measures do you have in place?",
    desc: "Orchid Minerals adheres to strict quality control standards at every stage of production. We conduct rigorous testing on all products to ensure consistency, purity, and performance, meeting or exceeding industry standards."
  },
  {
    title: "Can you ship internationally?",
    desc: "Yes, we offer international shipping to most countries. Our logistics team works closely with reliable shipping partners to ensure your order is delivered safely and on time, no matter where you are located."
  }
];



function Footer() {
    const year = new Date().getFullYear();

  return (
    <div className=''>
    

        <div className="upper pt-6">
        <Image src={'/assets/logo-dark.png'} width={200} height={400} />


          <div className="FAQ flex-col p-6">




              <div className="faqs">
                  <h1 className='font-bold text-mainColor my-3 text-3xl'>Frequently asked Questions ?</h1>
                {
                  faqs.map(data=>{
                    return <FAQQ data={data} />
                  })
                }

              </div>
              <form  
              className="email flex flex-col my-5 "
               onSubmit={(e)=> e.preventDefault()}>
                <h2>Subscribe for updates</h2>
                <div className="info-data flex relative">
                <input className='border-2 border-gray-400  outline-none p-3 rounded focus:border-mainColor' required
                 type="email" name="email" id="email" placeholder='Email Address' />
                <button className=' translate-x-[-30px]'><FaArrowRight size={22}/></button>
                </div>
                <p>No spam, notifications only about new products, updates and freebies. You can always unsubscribe.</p>
              </form>
     


          </div>

        </div>
        <div className="lower text-white bg-mainColor flex md:flex-row flex-col-reverse px-6 py-4 md:items-center gap-3  justify-between">
            <p className=''>&copy; Copyright {year} | ORCHID MINES</p>
            <div className="socials flex gap-3">
                <IoLogoYoutube size={32}/>
                <FaFacebookSquare size={32}/>
                <FaInstagram size={32}/>
            </div>
        </div>


    </div>
  )
}

const FAQQ=(props)=>{
  const {title , desc} = props.data
  const [open,setOpen] = useState(true)
  return(
<div className="question w-9/12 transition-all ease-in-out duration-200 bg-gray-200 border border-mainColor p-3 gap-2">
  <h1 
    onClick={() => setOpen(!open)}
    className="title cursor-pointer text-mainColor font-bold flex justify-between">
      {title}
      <span>
        {open ? <IoIosArrowDown/> : <IoIosArrowUp/>}                
      </span>
  </h1>
  
  <p className={`answers text-gray-500 transition-all duration-300 ease-in-out overflow-hidden ${open ? 'max-h-0 opacity-0' : 'max-h-[1000px] opacity-100'}`}>
    {desc}
  </p>
</div>
  )
}


export default Footer
