import About from '@/components/AboutComponents/About'
import Values from '@/components/AboutComponents/Values'
import ProjectCard from '@/components/homeComponents/ProjectCard'
import React from 'react'

function page() {
  return (
    <div className="min-h-screen bg-mainColor">
        
           <div className="set-bg bg-mainColor">
           <About/>
            
            <div className="bg-mainColor">
            <ProjectCard/>
            </div>
           </div>
            <div className="bg-white">
            <Values/>
            </div>

    </div>
  )
}

export default page
