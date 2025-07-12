import Cards from '@/components/Cards'
import Product from '@/models/Product';
import mongoose from 'mongoose';
import React, { useState } from 'react'


const Allcakes = (products) => {

  return (
    <>
     <h1 className="text-center text-white mb-2  text-2xl sm:text-3xl sevillana-regular mt-2"> Cakes Shop 🎂</h1>
       
          <div className="mx-auto max-w-2xl px-4 sm:py-10 h-full sm:px-6 lg:max-w-7xl lg:px-8 ">

      <div className=" mt-6 grid mb-16 grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 "> 
        {Object.keys(products.products) && Object.keys(products.products).map((i,x)=>{
return(
<div key={x} className="d">
  <Cards name={products.products[i].title} img={products.products[i].img} price={products.products[i].price} weight={products.products[i].weight} slug={products.products[i].slug}/>
</div>

)

        })}

        


</div>
</div>
    </>
  )
}

export default Allcakes
export async function getServerSideProps() {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MOURL);
  }
  let products = await Product.find({ category: "cake" });

    
  return {
    props: { products: JSON.parse(JSON.stringify(products)) },
  };
}