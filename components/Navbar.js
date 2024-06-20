"use client"
import Link from 'next/link';
import React, { useState } from 'react'
import { GiCupcake } from "react-icons/gi";
import Navdown from './Navdown';
import Mobilbase from './Mobilbase';

const Navbar = () => {
    const [ed, seted] = useState(false)

    const edropdown = ()=>{
seted(!ed)
    }

  return (
    <>
        <nav className="hidden sm:flex flex-col  items-center mt-2 ">
  <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8  rounded-full  border-white border-2 bg-black border-b-2 w-[28rem] fixed ">
    <div className="relative flex  h-16 items-center justify-between ">
      <div className="flex flex-1 items-center justify-start mx-2 sm:items-stretch sm:justify-start">

        <div className=" flex-shrink-0 flex  items-center">
          <img className="h-8 w-auto" src='https://th.bing.com/th/id/OIP.HThaJosmRtQ_xBiPwV7NzwHaFj?rs=1&pid=ImgDetMain' alt="Your Company"/>
        </div>

        <div className="hidden sm:ml-6 sm:block">
          <div className="flex space-x-4">
      

            <Link href="#" className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page">Bakery</Link>
            <Link href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Custom Cake</Link>
           
          </div>
        </div>
      </div>


      <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

        <button onClick={edropdown} type="button" className="relative rounded-full   bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800     hover:duration-1000">
        <GiCupcake className='lg:text-3xl text-2xl hover:rotate-45 hover:text-red-500 hover:duration-150  ' />
        </button>




{/* Dropdown  */}

      


      </div>
    </div>
  </div>

</nav>

  <div className="sm:hidden" id="mobile-menu">
    <div className="px-2">
  <Mobilbase />
    </div>
  </div>
  
{ed?<Navdown off={edropdown}/>:null}

    </>
  )
}

export default Navbar