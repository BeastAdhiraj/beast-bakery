import React, { useState } from 'react'
import { MdAccountCircle ,MdOutlineTravelExplore,MdOutlineDashboardCustomize } from "react-icons/md";
import { BsCake2Fill } from "react-icons/bs";
import { GiCupcake } from "react-icons/gi";
import Link from 'next/link';
import Navdown from './Navdown';


const Mobilbase = ({email}) => {

  const [ed, seted] = useState(false)

  const edropdown = ()=>{
seted(!ed)
  }



  return (
    <>
        <div className="fixed bottom-0 left-0 right-0 w-full ">
  <div className="flex justify-evenly items-center  h-16  border-t-2 border-teal-500  rounded-tr-3xl rounded-tl-3xl  bg-gray-950">

  <Link href={'/'} className='cursor-pointer'>
  <ul  className="flex  flex-col items-center justify-center ">
         <BsCake2Fill className='text-xl  text-center dark:text-white' />
         <li >
         <p  className="opacity-100 text-white hover:text-white   rounded-md px-3  text-sm font-medium" aria-current="page">Home</p>
        </li>
      </ul>
        </Link>

<Link href={'/addCakes'} className='cursor-pointer'>
      <ul  className="flex  flex-col items-center justify-center ">
      <MdOutlineDashboardCustomize  className='text-xl  text-center dark:text-white'  />
        <li >
            <p  className="text-gray-300 opacity-100  hover:text-white rounded-md px-3 text-sm font-medium">Custom </p>
            
        </li>

      </ul>
</Link>
<Link href={`/Profil/${email}`} className='cursor-pointer'>
      <ul  className="flex  flex-col items-center justify-center">


      <MdAccountCircle className='text-xl  text-center dark:text-white'  />


        <li >
            <p className="text-gray-300 opacity-100   hover:text-white rounded-md px-3 text-sm font-medium">Profile</p>

        </li>

      </ul>

</Link>
<Link href="/Explore" className='cursor-pointer'>

      <ul  className="flex flex-col items-center justify-cente">
      <MdOutlineTravelExplore className='text-xl  text-center dark:text-white' />
        <li>
            <p className="text-gray-300 opacity-100 hover:text-white rounded-md px-3 text-sm font-medium">Search</p>

        </li>
      </ul>
</Link>

<button onClick={edropdown} type="button" className="relative rounded-full    p-1 dark:text-gray-400  hover:duration-1000 flex flex-col justify-center items-center">
        <GiCupcake className='lg:text-3xl text-2xl hover:rotate-45 hover:text-red-500 hover:duration-150  ' />
        <p className="text-gray-300 opacity-100 hover:text-white rounded-md px-3 text-sm font-medium">More</p>

        </button>

  </div>

  {ed?<Navdown off={edropdown}/>:null}

  </div>
   

    </>
  )
}

export default Mobilbase