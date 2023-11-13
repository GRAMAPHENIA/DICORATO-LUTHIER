import Image from "next/image";
import Header from "@/components/Header.jsx";
import Body from "@/components/Body.jsx";
import Navegacion from "@/components/Navegacion.jsx";

import Galeria from "@/components/Galeria.jsx";
import Contactos from "@/components/Contactos.jsx";

export default function Home() {
  return (
    <main className="relative">
      <Header />
      {/* <div className="absolute bg-[#3a94d956] -z-10  h-72 w-96 top-[150px] left-[10px] lg:top-[250px] lg:left-[10px] blur-[150px] rounded-full"></div> */}
      <Body />
      <Navegacion />
      <Galeria />
      <Contactos />
    </main>
  );
}
