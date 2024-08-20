import React from 'react'

function Container({children}) {
  return (
    <div
    className='container mx-auto  min-h-dvh'
    >
      {children}
    </div>
  )
}

export default Container
