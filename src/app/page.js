import Image from "next/image";
import Header from "@/components/Header";
import Body from "@/components/Body";
import Navegacion from "@/components/Navegacion";

import Galeria from "@/components/Galeria";
import Contactos from "@/components/Contactos";

export default function Home() {
  return (
    <main>
      <Header />
      <Body />
      <Navegacion />
      <Galeria />
      <Contactos />
    </main>
  );
}
