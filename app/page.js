import HeroSection from "@/components/homeComponents/HeroSection";
import Operations from "@/components/homeComponents/Operations";
import ProjectCard from "@/components/homeComponents/ProjectCard";
import Image from "next/image";

export default function Home() {
  return (
    <main className=" min-h-screen  bg-mainColor">
      
      <div className="bg-[url('https://www.ivanhoemines.com/wp-content/themes/ivanhoemines/img/home_operations_map_drc.svg?v2)')] bg-cover bg-center bg-opacity-50 min-h-screen ">

      <HeroSection/>
      <Operations />


        <ProjectCard/>

      </div>




    </main>
  );
}
