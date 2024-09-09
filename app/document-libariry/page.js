import DocumentLibrary from '@/components/dcoumnetsPage/DocumentLibrary'
import QuarterlyReports from '@/components/dcoumnetsPage/QuarterlyReports'
import DynamicFlexCard from '@/components/Flexings/DynamicFlexCard'
import React from 'react'

function page() {
  return (
    <div>
        <DocumentLibrary/>
        <QuarterlyReports/>
        <DynamicFlexCard/>
    </div>
  )
}

export default page
