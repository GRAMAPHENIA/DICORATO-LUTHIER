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
      <section className="border-8 border-[#3b4f6323] my-2 rounded-3xl">
        <div className="absolute top-[280px] lg:top-[220px] left-[34%] lg:left-[34%] h-[15px] w-[200px] lg:h-[30px] lg:w-[500px] bg-[#61b0ffda] -z-10 rounded-full blur-[50px] lg:blur-[100px]"></div>
        <h1 className="flex lg:text-[50px] font-extralight text-center leading-[50px] lg:leading-[75px] justify-center align-middle my-20 bg-clip-text text-transparent bg-gradient-to-r from-[#121518] via-[#637d97] to-[#ffffff] tracking-tight">
          INSTRUMENTOS DE CUERDA PULSADA
        </h1>
      </section>
      {/* <div className="absolute bg-[#3a94d956] -z-10  h-72 w-96 top-[150px] left-[10px] lg:top-[250px] lg:left-[10px] blur-[150px] rounded-full"></div> */}
      <Body />
      <Navegacion />
      <Galeria />
      <Contactos />
    </main>
  );
}
