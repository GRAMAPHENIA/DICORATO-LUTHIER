import Image from "next/image";
import Header from "@/components/Header.jsx";
// import HeaderGuitarras from "@/components/HeaderGuitarras.jsx";
// import HeaderReparacion from "@/components/HeaderReparacion.jsx";
import Body from "@/components/Body.jsx";
import Marcas from "@/components/Marcas.jsx";
import BodyBuconero from "@/components/BodyBuconero.jsx";

export default function Home() {
  return (
    <main className="py-2">
      <Header />
      <Body />
      <Marcas />
      <BodyBuconero />
    </main>
  );
}
