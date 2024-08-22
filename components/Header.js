"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { FaArrowRight } from "react-icons/fa6";


import { FaSearch,FaBars } from "react-icons/fa";
import { MdOutlineClose } from "react-icons/md";

function Header() {
        const [open , setOpen] =useState(false)

  return (
    <div className='bg-mainColor border-b text-white fixed h-[100px] flex items-center justify-center right-0 left-0 top-0 z-20'>
        <div className="w-full container   relative h-full mx-auto p-6 flex items-center justify-between">
        <span 
        href="" className="brand">
            <Link href={'/'}>
            <Image src={'/assets/logo-white.png'} width={200} height={400} />
            </Link>
        </span>

        <nav className={`${open ? 'flex':' hidden md:flex'} gap-3 items-center  ${open&& 'absolute md:relative'} md:top-0 top-[100%] bg-mainColor left-0 right-0 md:flex-row  flex-col md:h-fit h-dvh   transition duration-300 ease-out px-6`}>
    
            <span onClick={()=> setOpen(!open)}  
            className={` md:w-fit w-full ${open && 'border-b border-t'} rounded items-center flex gap-2 p-3 hover:border-b hover:border-white hover:text-gray-300`}>
            <Link href={'/what-we-do'}  >
            What we do 
            </Link>
            {open && <FaArrowRight/>}
            </span>

            <span onClick={()=> setOpen(!open)} 
            className={` md:w-fit w-full ${open && 'border-b border-t'} rounded flex gap-2 items-center p-3 hover:border-b hover:border-white hover:text-gray-300 `}>
            <Link href={'/'}  >
            Sustainability 
            </Link>
            {open && <FaArrowRight/>}
            </span>

            <span onClick={()=> setOpen(!open)}
            className={` md:w-fit w-full ${open && 'border-b border-t'} rounded flex gap-2 p-3 items-center hover:border-b hover:border-white hover:text-gray-300`}>

            <Link href={'/'}  >
            News & Stories 
            </Link>
            {open && <FaArrowRight/>}
            </span>

            <span onClick={()=> setOpen(!open)}
            className={` md:w-fit w-full ${open && 'border-b border-t'} rounded flex gap-2 p-3 items-center hover:border-b hover:border-white hover:text-gray-300`}>
            <Link href={'/'}  >
            Investors 
            </Link>
            {open && <FaArrowRight/>}
            </span>

            <span onClick={()=> setOpen(!open)}
            className={` md:w-fit w-full ${open && 'border-b border-t'} rounded flex gap-2 p-3 items-center hover:border-b hover:border-white hover:text-gray-300`}>
            <Link href={'/'}  >
                Reports 
            </Link>
            {open && <FaArrowRight/>}
            </span>

            <span 
            onClick={()=> setOpen(!open)}
            className='border border-white rounded-full px-2 py-1 md:w-fit w-1/2'>
            <Link href={'/'}  >
            Contact                
            </Link>
            </span>

            <span
            onClick={()=> setOpen(!open)}
            >
            <Link href={'/'}  >
            <FaSearch />
            </Link>
            </span>

        </nav>


            <span className='cursor-pointer duration-300  ease-linear md:hidden block'
            onClick={()=>setOpen(!open)}
            >
                {open ? <MdOutlineClose size={32} />:<FaBars size={32}/>}
            </span>

        </div>

    </div>
  )
}

export default Header
