import HeroSection from "@/components/homeComponents/HeroSection";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-gray-200 h-screen bg-[url('https://www.ivanhoemines.com/wp-content/themes/ivanhoemines/img/home_operations_map_drc.svg?v2)')] bg-cover bg-center ">
      
      <div className="bg-mainColor bg-opacity-50 h-full">

      <HeroSection/>

      </div>




    </main>
  );
}
