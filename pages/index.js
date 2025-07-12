import Image from "next/image";
import { Inter } from "next/font/google";
import { SpotlightPreview } from "@/components/Sportl";
import Catelog from "@/components/Catelog";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
  <>
  <SpotlightPreview/>
<h1 className="text-center text-white mb-4 text-2xl sm:text-3xl sevillana-regular mt-2 "> Wellcome TO Bakery</h1>
<Catelog/>
  </>
  );
}
