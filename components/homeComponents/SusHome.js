import React from 'react'
import { FaArrowRight, FaFilePdf } from 'react-icons/fa6'

function SusHome() {
  return (
    <div className='bg-white'>
        
            <div className="container mx-auto px-6 flex  items-center">

            <div className="side-1 md:w-1/2 w-full py-6 flex-col flex gap-3">
                <h1 className='text-mainColor text-4xl font-bold '>
                Sustainability
                </h1>
                <p className='text-gray-500 font-medium'>
                Ivanhoe operates under value-based principles of excellence, personal accountability, integrity and social and environmental responsibility. Our commitment to responsible exploration and mine development underlies our strategic vision, striving to ensure that social and economic benefits are shared widely through community enhancement initiatives and stakeholder agreements with host communities, local entrepreneurs and employees.
                </p>
                <div className="btns flex gap-2">
                    <button
                    className='bg-mainColor text-white rounded flex p-3 items-center justify-center gap-3 '
                    >
                        View last report <FaFilePdf size={22}/>
                    </button>
                    <button
                    className='bg-mainColor text-white rounded flex p-3 items-center justify-center gap-3 '
                    >
                        learn more <FaArrowRight size={22}/>
                    </button>
                </div>

            </div>


                    <img className='md:block hidden'
                    src="https://www.ivanhoemines.com/wp-content/themes/ivanhoemines/img/sustainability_people.png" 
                     />

            </div>




    </div>
  )
}

export default SusHome
