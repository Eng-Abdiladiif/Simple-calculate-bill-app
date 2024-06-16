import React from 'react'
import ModeToggle from './ModeToggle'

function Navbar() {
  return (
    <div className='max-w-4xl mx-auto p-4 '>

        {/* main */}
        <div className='flex justify-between items-center'>

            {/* 1th */}
            <div>
                <h1 className='text-md font-bold
                font-sans text-white '>Simple Account</h1>
            </div>
            {/* 2th */}
            <div>
              <ModeToggle/>

            </div>
        </div>
      
    </div>
  )
}

export default Navbar
