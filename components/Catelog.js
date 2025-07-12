import React from 'react'
import Link from 'next/link'

const Catelog = () => {
  let vids = ["/rcv1.mp4","/rcv2.mp4"]
  let pics = ["/rcv3.webp","/rcv4.webp"]
  return (
    <>
     <div className="grid grid-col grid-rows-3   gap-1 sm:gap-4  justify-center gap-y-6    ">

  <Link href={'/allcakes'} className=" h-[25rem]  w-[85vw]  bg-center bg-fixed sm:bg-current bg-cover bg-no-repeat flex flex-col justify-center items-center rounded-3xl  " style={{backgroundImage: "url(/cake2.png)",}}><button className="bg-pink-200  sevillana-regular text-xl hover:bg-pink-300 text-brown-800  px-6 py-3 rounded-full shadow-lg transition-all duration-300 ease-in-out" >Cakes</button></Link>


  <Link href={'/allcakes'} className=" h-full w-full bg-center bg-cover   bg-fixed bg-no-repeat flex flex-col justify-center items-center rounded-3xl " style={{backgroundImage: "url(/cake3.png)"}}><button className='bg-pink-200  sevillana-regular text-xl hover:bg-pink-300 text-brown-800  px-6 py-3 rounded-full shadow-lg transition-all duration-300 ease-in-out'>CupCakes</button></Link>

 
  <Link href={'/allcakes'} className=" h-full w-full bg-center   bg-fixed bg-cover bg-no-repeat flex flex-col justify-center items-center rounded-3xl " style={{backgroundImage: "url(/cake4.png)"}}><button className='bg-pink-200  sevillana-regular text-xl hover:bg-pink-300 text-brown-800  px-6 py-3 rounded-full shadow-lg transition-all duration-300 ease-in-out'>Custom Cakes</button></Link>
</div>   

<h1 className="text-center text-white mb-4 text-2xl sm:text-3xl sevillana-regular mt-4  ">Our Efforts</h1>

   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {/* Videos */}

      {vids.map((i,x)=>{
        
return(<div key={i} className="aspect-[9/16] overflow-hidden rounded-xl shadow-lg">
          <video
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            poster={`h${vids[x]}`}
          >
            <source src={`${vids[x]}`} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

      )
      
      })}
     

      {/* Images */}
      {pics.map((i,x) => {
        return(
        <div key={i} className="aspect-[9/16] overflow-hidden rounded-xl shadow-lg">
          <img
            src={`${pics[x]}`}
            alt={`Bakery Pic ${x}`}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      )}
    </div>

    </>
  )
}

export default Catelog