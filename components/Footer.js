"use client";
import React, { useState } from 'react';
import { IoLogoYoutube } from "react-icons/io";
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
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
    <div className="bg-gray-50">
      <div className="container mx-auto p-8 space-y-12">
        
        <div className="flex justify-between items-center">
          <Image src="/assets/logo-dark.png" width={200} height={400} alt="Orchid Minerals Logo" />
        </div>
        
        <div className="space-y-8">
          <h1 className="font-bold text-mainColor text-3xl">Frequently Asked Questions</h1>
          <div className="space-y-4">
            {faqs.map((data, index) => (
              <FAQItem key={index} data={data} />
            ))}
          </div>

          <form className="bg-white p-6 rounded-lg shadow-lg space-y-4" onSubmit={(e) => e.preventDefault()}>
            <h2 className="font-bold text-mainColor text-xl">Subscribe for Updates</h2>
            <div className="relative">
              <input
                className="border-2 w-full border-gray-300 p-4 outline-none rounded-lg focus:border-mainColor focus:ring-2 focus:ring-mainColor transition"
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email address"
                required
              />
              <button className="absolute right-4 top-1/2 transform -translate-y-1/2">
                <FaArrowRight size={24} className="text-mainColor" />
              </button>
            </div>
            <p className="text-sm text-gray-500">No spam, just updates on new products, offers, and freebies. Unsubscribe anytime.</p>
          </form>
        </div>
      </div>

      <div className="bg-mainColor py-6 mt-12">
        <div className="container mx-auto flex flex-col-reverse md:flex-row justify-between items-center text-white space-y-4 md:space-y-0">
          <p className="text-center md:text-left">&copy; {year} ORCHID MINERALS. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" aria-label="YouTube">
              <IoLogoYoutube size={32} />
            </a>
            <a href="#" aria-label="Facebook">
              <FaFacebookSquare size={32} />
            </a>
            <a href="#" aria-label="Instagram">
              <FaInstagram size={32} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function FAQItem({ data }) {
  const { title, desc } = data;
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-mainColor rounded-lg p-4 bg-white shadow-md">
      <h3
        onClick={() => setOpen(!open)}
        className="text-mainColor font-bold cursor-pointer flex justify-between items-center"
      >
        {title}
        <span>{open ? <IoIosArrowUp /> : <IoIosArrowDown />}</span>
      </h3>
      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden ${open ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <p className="text-gray-500 mt-3">{desc}</p>
      </div>
    </div>
  );
}

export default Footer;
