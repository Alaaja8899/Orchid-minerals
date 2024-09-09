import Categories from "@/components/homeComponents/Categories";
import HeroSection from "@/components/homeComponents/HeroSection";
import LookingLink from "@/components/homeComponents/LookingLink";
import Operations from "@/components/homeComponents/Operations";
import ProjectCard from "@/components/homeComponents/ProjectCard";
import Story from "@/components/homeComponents/Story";
import SusHome from "@/components/homeComponents/SusHome";
import TextEvu from "@/components/homeComponents/TextEvu";
import Tweets from "@/components/homeComponents/Tweets";
import Image from "next/image";

export default function Home() {
  return (
    <main className=" min-h-screen  bg-mainColor">
      
      <div className="bg-[url('https://www.ivanhoemines.com/wp-content/themes/ivanhoemines/img/home_operations_map_drc.svg?v2)')] bg-cover bg-center bg-opacity-50 min-h-screen">

      <HeroSection/>
      <Operations />
        <ProjectCard/>
        <TextEvu/>
        <Story/>
        <Categories/>
        <SusHome/>
        {/* <LookingLink/> */}
        {/* <Tweets/> */}
      </div>




    </main>
  );
}
