import Story from '@/components/homeComponents/Story'
import LatestContent from '@/components/investComponents/LatestContent';
import LatestNews from '@/components/investComponents/LatestNews';
import StoriesPage from '@/components/NewsComponents/StoriesPiege';
import React from 'react'

function page() {
    
 
    return (
    <div>
      <StoriesPage/>
          {/* <LatestContent/> */}
          <LatestNews/>

        <Story/>


    </div>
  )
}

export default page
