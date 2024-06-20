import React from 'react'
import Link from "next/link";
import { FaWeightHanging } from "react-icons/fa";
import { IoIosPricetags } from "react-icons/io";

const Cards = ({img,price,wieght,name}) => {
  return (
    <>
 
 <Link  href={`/cakes/black`}>
 
<div className="overflow-hidden  border-4 border-teal-500  w-full rounded-tl-3xl rounded-br-3xl  hover:rounded-tl-none hover:rounded-br-none hover:rounded-bl-3xl hover:rounded-tr-3xl duration-300 lg:w-72 md:w-11/12 bg-gray-200 lg:hover:scale-95 lg:hover:shadow-lg lg:hover:shadow-cyan-400 dark:bg-gray-950 dark:text-white md:mx-0 lg:mx-0">

<img className="w-full h-[65%] bg-cover object-center text-center" src={img}/>

<div className="flex  justify-between mb-2 mt-2 ">
<div className="flex flex-col">
<h2 className="mx-2">Black Forest</h2>
<div className="flex mt-2 mb-2 mx-2">
₹ 1000
</div>

</div>

<div className="flex mx-2  ">
<FaWeightHanging className="text-xl text-center mx-2 " />  1kg
       </div>


</div>

<div className="flex flex-col justify-center items-center">


       </div>

</div>
 
 </Link>

        
    </>
  )
}

export default Cards