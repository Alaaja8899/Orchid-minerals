import React from 'react'
import { IoLogoYoutube } from "react-icons/io";
import { FaFacebookSquare , FaInstagram } from "react-icons/fa";

import Image from 'next/image';

function Footer() {
    const year = new Date().getFullYear();

  return (
    <div>
    

        <div className="upper">
        <Image src={'/assets/logo-dark.png'} width={200} height={400} />





        </div>
        <div className="lower text-white bg-mainColor flex md:flex-row flex-col-reverse px-6 py-4 items-center ">
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

export default Footer
