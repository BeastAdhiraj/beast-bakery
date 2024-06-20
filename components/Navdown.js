import Link from 'next/link';
import React from 'react'
import { GiCupcake } from "react-icons/gi";

const Navdown = ({off}) => {
  return (
    <>
        <div  id="drawern" className={`fixed mt-2 bottom-0 sm:top-0 sm:opacity-75 h-[50%]   sm:hover:opacity-95 animate-[bounce_1s_ease-in-out_1] w-screen  p-4 overflow-y-auto rounded-md bg-clip-padding backdrop-filter backdrop-blur-3xl border-b-4 border-b-green-500  dark:bg-gray-950`} tabIndex="-1" aria-labelledby="drawer-navigation-label">

<div className="flex justify-between items-center">

<div className="flex items-center justify-center">
<h5 id="drawer-navigation-label" className="text-base mx-2 inline  font-semibold text-gray-950 uppercase dark:text-white">Menu</h5>

<button onClick={off}  type="button" data-drawer-hide="drawer-navigation" aria-controls="drawer-navigation" className="text-white bg-transparent  rounded-lg  hover:-hue-rotate-180  hover:duration-1000     " >
<GiCupcake className='lg:text-2xl text-2xl hover:-rotate-45 hover:text-red-500 hover:duration-150  ' />


</button>
</div>

</div>

<div className="py-4 overflow-y-hidden ">

  <ul  className="font-medium  mb-2">
     <li >
     <Link href="/Home" onClick={off} className="flex items-center opacity-100 text-white hover:text-white hover:bg-gradient-to-r from-fuchsia-500 via-red-600 to-orange-400  rounded-md px-3 py-2 text-md sevillana-regular  font-medium" aria-current="page">Buy Cakes 🎂</Link>
    </li>

      <li >
        <Link href="/addCakes" onClick={off} className="text-white flex items-center opacity-100 hover:bg-gradient-to-r from-fuchsia-500 via-red-600 to-orange-400 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-md sevillana-regular font-medium">Custom Cake Order 📝 </Link>
        
    </li>


    <li >
        <Link href={'/'} onClick={off} className="text-white flex items-center opacity-100 hover:bg-gradient-to-r from-fuchsia-500 via-red-600 to-orange-400 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-md sevillana-regular font-medium">Profile</Link>

    </li>

    <li>
        <Link href="/Search" onClick={off} className="text-white flex items-center opacity-100 hover:bg-gradient-to-r from-fuchsia-500 via-red-600 to-orange-400 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-md sevillana-regular font-medium">Search</Link>

    </li>
  </ul>

</div>
      </div>
    </>
  )
}

export default Navdown