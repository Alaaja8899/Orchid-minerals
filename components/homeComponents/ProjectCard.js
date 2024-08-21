"use client";
// Import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa6';


const data = [
  {
    title: "Kamoa-Kakula Copper Complex",
    subtitle: "Mine Ownership: Ivanhoe Mines 39.6%",
    img: "https://images.unsplash.com/photo-1523848309072-c199db53f137?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bWluaW5nfGVufDB8fDB8fHww",
    desc: "The Kamoa-Kakula Copper Complex is a world-class mining project located in the Democratic Republic of Congo. It is known for being the fastest-growing copper mine globally, with an extraordinary combination of high-grade copper reserves and low-carbon operations. The mine is expected to produce over 400,000 tonnes of copper annually at full capacity. In 2023, it achieved a production of 393,551 tonnes, reflecting an 18% increase year-over-year. The complex is set to undergo further expansions, making it a key player in the global transition to cleaner energy by supplying essential materials for electric vehicles and renewable energy technologies."
  },
  {
    title: "Grasberg Mine",
    subtitle: "Mine Ownership: Freeport-McMoRan 48.74%",
    img:"https://images.unsplash.com/photo-1517089152318-42ec560349c0?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1pbmluZ3xlbnwwfHwwfHx8MA%3D%3D",
    desc: "The Grasberg Mine, located in Papua, Indonesia, is one of the most significant and challenging mining operations in the world. This colossal mine is a major source of copper and gold, contributing massively to the global supply. It is one of the highest-altitude mines, sitting over 4,000 meters above sea level. The transition from open-pit mining to one of the world’s largest underground mining operations represents a monumental engineering achievement. With ongoing investments in infrastructure and technology, Grasberg continues to play a pivotal role in the global metals market, supporting a variety of industries worldwide."
  },
  {
    title: "Escondida Mine",
    subtitle: "Mine Ownership: BHP Billiton 57.5%",
    img:"https://media.istockphoto.com/id/183050789/photo/ka-boom.webp?b=1&s=612x612&w=0&k=20&c=xAqH3nNoM1jf_OCJeKXTDl7Y8jQG0HVVLp6Tu06Qo-M=",
    desc: "Escondida Mine, situated in the vast Atacama Desert of northern Chile, is the largest copper mine in the world by production. The mine is a critical asset in the global copper market, producing over one million tonnes of copper annually. Operating at an altitude of more than 3,000 meters, Escondida’s unique environmental conditions pose significant operational challenges. Despite this, the mine has been a leader in incorporating advanced technologies to optimize extraction and reduce environmental impact. The wealth generated by Escondida has had profound economic implications for Chile, making it a cornerstone of the country’s mining sector."
  },
  {
    title: "Cerro Verde Mine",
    subtitle: "Mine Ownership: Freeport-McMoRan 53.56%",
    img:"https://plus.unsplash.com/premium_photo-1682144351190-9034a7c3b3a8?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG1pbmluZ3xlbnwwfHwwfHx8MA%3D%3D",
    desc: "Cerro Verde Mine, located near Arequipa, Peru, is one of the largest copper mines in the world, with a significant molybdenum production as well. The mine has undergone multiple expansions, most notably the 2016 expansion which doubled its copper production capacity. Cerro Verde is recognized for its environmental stewardship, particularly in water management practices in an area prone to aridity. The mine’s output plays a vital role in Peru’s economy, contributing substantially to the country’s exports. With a life expectancy extending well into the next few decades, Cerro Verde remains a critical asset for Freeport-McMoRan."
  },
  {
    title: "Oyu Tolgoi Mine",
    subtitle: "Mine Ownership: Rio Tinto 66%",
    img:"https://plus.unsplash.com/premium_photo-1682142162574-b304bacbdc3f?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bWluaW5nfGVufDB8fDB8fHww",
    desc: "Oyu Tolgoi Mine, located in the Gobi Desert of Mongolia, is one of the world’s largest known copper and gold deposits. The project is a joint venture between the government of Mongolia and Rio Tinto, with the latter holding a 66% stake. Oyu Tolgoi is expected to produce over 500,000 tonnes of copper annually when fully operational. The mine’s development has been a significant boost to Mongolia’s economy, with extensive infrastructure investments transforming the region. As one of the most significant mining projects globally, Oyu Tolgoi is pivotal in meeting the world’s growing demand for copper, particularly in the context of renewable energy."
  }
];




function ProjectCard() {
  return (
    <div className='container mx-auto p-6 my-10'>

      <div className="top my-10 flex items-center justify-between">
      <h1 className='text-3xl text-white font-bold '>Our Operations and Projects</h1>
      <button className='md:flex hidden bg-red-500 p-3 text-white rounded px-6 items-center justify-between gap-2'>See All <FaArrowRight/></button>
      </div>

      <Swiper
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={60} // Increase space between slides
        slidesPerView={1}
        // navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
          <div className="center flex items-center justify-center">

          {data.map(data=>{
            return         <SwiperSlide>
            <SingleCard data={data} />
          </SwiperSlide>
  
          })}

        </div>

      </Swiper>

    </div>
  );
}

const SingleCard = (props) => {
  const {title , subtitle , desc , img} = props.data
  return (
    <div className="pro-card bg-white md:w-9/12 h-fit w-full flex md:flex-row  flex-col rounded-[5%] overflow-hidden mr-10">
      <div className="img ">
        <img
          className='w-full h-full'
          src={img}
          alt="mining"
        />
      </div>

      <div className="info p-4 md:w-1/2 ">
        <h1 className='font-bold text-2xl'>
          {title}
        </h1>
        <h3 className='text-red-500 font-bold'>
          {subtitle}
        </h3>
        <p>
          {desc}
        </p>
      </div>
    </div>
  );
}

export default ProjectCard;
