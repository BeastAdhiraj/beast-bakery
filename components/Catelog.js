import React from 'react'
import { TextGenerateEffectDemo } from './Textgen'
import Link from 'next/link'

const Catelog = () => {
  return (
    <>
     <div className="grid grid-col grid-rows-3  gap-1 sm:gap-4   ">
  <Link href={'/allcakes'} className=" h-[20rem] w-full bg-center   bg-fixed sm:bg-current  bg-cover bg-no-repeat flex flex-col justify-center items-center" style={{backgroundImage: "url(/cake2.png)",}}><TextGenerateEffectDemo words={"Cakes"}/></Link>


  <div className=" h-full w-full bg-center bg-cover  bg-fixed bg-no-repeat flex flex-col justify-center items-center" style={{backgroundImage: "url(/cake4.png)"}}><TextGenerateEffectDemo words={"Cupcakes"}/></div>


  <div className=" h-full w-full bg-center   bg-fixed bg-cover bg-no-repeat flex flex-col justify-center items-center" style={{backgroundImage: "url(/cake3.png)"}}><TextGenerateEffectDemo words={"Custom Cake"}/></div>
</div>   
    </>
  )
}

export default Catelog