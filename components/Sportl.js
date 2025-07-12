import React from "react";


export function SpotlightPreview() {
  return (
    <div className="flex flex-col justify-center items-center mb-4">

    <div className="h-[30rem] sm:h-[40rem] bg-no-repeat bg-cover bg-center bg-fixed mt-2  rounded-3xl flex items-center w-[95vw] justify-center  bg-black/[0.96] antialiased bg-grid-white/[0.02]" style={{backgroundImage: "url(/webg1.jpeg)"}}>
    
      <div className="flex flex-col justify-center items-center p-4 max-w-7xl  mx-auto  w-full  mt-2">
        <h1 className="text-4xl md:text-7xl sevillana-regular  p-2 bg-gradient-to-r from-pink-400 via-pink-500 to-pink-800 text-white font-bold  px-5 py-3 rounded-lg shadow-lg clip-scalloped">
          Royal Cake Villa
        </h1>
        <p className="mt-2 font-normal text-xl sevillana-regular  max-w-lg text-center mx-auto  p-2 bg-white bg-opacity-60 rounded-lg">
        Life is short; eat the cake!,
        Stressed spelled backward is desserts. Coincidence? I think not!
        Cake a hug in dessert form.
        In a world full of muffins, be a cupcake.
        Cake because no great story ever started with a salad.
        </p>
      </div>
    </div>
    </div>
  );
}
