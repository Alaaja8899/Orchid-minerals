import About from '@/components/AboutComponents/About'
import Values from '@/components/AboutComponents/Values'
import ProjectCard from '@/components/homeComponents/ProjectCard'
import React from 'react'

function page() {
  return (
    <div className="min-h-screen">
        
            <About/>
            <Values/>
            <div className="bg-mainColor">
            <ProjectCard/>
            </div>
            

    </div>
  )
}

export default page
