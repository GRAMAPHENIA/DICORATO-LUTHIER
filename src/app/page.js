import Image from "next/image";
import Header from "@/components/Header.jsx";
import Body from "@/components/Body.jsx";
import Marcas from "@/components/Marcas.jsx";
import BodyBuconero from "@/components/BodyBuconero.jsx";

export default function Home() {
  return (
    <main className="relative">
      <Header />
      <div className="absolute bg-[#3a94d956] -z-10  h-72 w-96 top-[250px] left-[10px] blur-[150px] rounded-full"></div>
      <Body />
      <Marcas />
      <div className="absolute bg-[#3a89d95f] -z-10  h-96 w-96 top-[900px] right-[10px] blur-[150px] rounded-full"></div>
      <BodyBuconero />
    </main>
  );
}
