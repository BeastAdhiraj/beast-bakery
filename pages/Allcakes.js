import Cards from '@/components/Cards'
import Product from '@/models/Product';
import mongoose from 'mongoose';
import React from 'react'





const allcakes = () => {

    // const [cakes, setcakes] = useState({img:["https://3.bp.blogspot.com/-9ZWCSd0fRi0/TtazEFzSXGI/AAAAAAAARkM/0yrh02qG4Z4/s1600/P1040632.jpg","https://th.bing.com/th/id/OIP.DMt2rOpk5ugpr8B3GmRJFQAAAA?w=474&h=474&rs=1&pid=ImgDetMain","https://th.bing.com/th/id/OIP.qlcCerkbnNl7x5Ww-5y9jAHaH8?rs=1&pid=ImgDetMain","https://cdn.giftstoindia24x7.com/ASP_Img/IMG2000/GTI0197.jpg?imgeng=w_1200"]})

  return (
    <>
     <h1 className="text-center text-white mb-2  text-2xl sm:text-3xl sevillana-regular mt-2"> Cakes Shop 🎂</h1>
       
          <div className="mx-auto max-w-2xl px-4 sm:py-10 h-full sm:px-6 lg:max-w-7xl lg:px-8 ">

      <div className=" mt-6 grid mb-16 grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 "> 
        {Object.keys(data) && Object.keys(data).map((i,x)=>{
return(
<div key={x} className="d">
  <Cards img={data[i].img}/>
</div>

)

        })}

        


</div>
</div>
    </>
  )
}

export default allcakes
