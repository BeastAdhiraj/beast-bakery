import React from "react";
import { cn } from "@/utils/cn";
import { Spotlight } from "./ui/Spotlight";

export function SpotlightPreview() {
  return (
    <div className="flex flex-col justify-center items-center">

    <div className="h-[30rem] sm:h-[40rem] bg-no-repeat bg-cover bg-center bg-fixed mt-2 w-full rounded-md flex items-center justify-center  bg-black/[0.96] antialiased bg-grid-white/[0.02]" style={{backgroundImage: "url(/webg1.jpeg)"}}>
    
      <div className="flex flex-col justify-center items-center p-4 max-w-7xl  mx-auto  w-full  mt-2">
        <h1 className="text-4xl  md:text-7xl sevillana-regular text-gray-900 p-2 bg-white bg-opacity-30 rounded-xl font-bold text-center   ">
          Our Cakes<br /> Are the Bests.
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
