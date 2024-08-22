import React from 'react'
import { FaArrowRight } from 'react-icons/fa6'

const LookingLink = () => {
  return (
    <div className='bg-black'>
        

            <div className="container mx-auto p-6  text-white flex  flex-col items-center justify-between gap-3 ">

                <div className="links md:flex-row flex  justify-between w-full">
                  
                <h1>
                Looking for Investor Information?
                </h1>

                <h2 className='flex  items-center justify-center gap-3 '>
                Visit Investor Hub <FaArrowRight/>
                </h2>

                </div>


                <div className="charts flex flex-col w-full gap-3">

                    <div className="chart flex  justify-between w-full">
                      <div className="side-1">
                      <p>
                      21 Aug 24
                      </p>
                      <h2 className='font-bold text-2xl'>  
                      TSX: IVN
                      </h2>
                      </div>
                      <div className="side-2 flex flex-col justify-center items-center">
                        <p className='font-bold'>
                        CA$18.18
                        </p>
                        <span className='bg-white text-mainColor px-6 rounded py-2'>
                          +2.25%
                        </span>
                      </div>
                    </div>
                    <div className="chart flex  justify-between w-full">
                      <div className="side-1">
                      <p>
                      21 Aug 24
                      </p>
                      <h2 className='font-bold text-2xl'>  
                      OTCQX: IVPAF
                      </h2>
                      </div>
                      <div className="side-2 flex flex-col justify-center items-center">
                        <p className='font-bold'>
                        CA$13.36
                        </p>
                        <span className='bg-white text-mainColor px-6 rounded py-2'>
                          +2.30%
                        </span>
                      </div>
                    </div>


                </div>

            </div>

    </div>
  )
}

export default LookingLink
