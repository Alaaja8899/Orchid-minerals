import DynamicFlexCard from '@/components/Flexings/DynamicFlexCard'
import LatestContent from '@/components/investComponents/LatestContent'
import LatestNews from '@/components/investComponents/LatestNews'
import React from 'react'

function page() {
  return (
    <div>
        <LatestNews/>
        <DynamicFlexCard/>
        <LatestContent/>
    </div>
  )
}

export default page
