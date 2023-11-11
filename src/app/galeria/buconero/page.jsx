import Image from "next/image";

import Cuerpo from "../../../../public/galeria/buconero/cuerpo.png";
import CuerpoDetalle from "../../../../public/galeria/buconero/cuerpo-detalle.png";
import clavijas from "../../../../public/galeria/buconero/clavijas.png";

import Aside from "@/components/Aside.jsx";
import Presentacion from "@/components/Presentacion.jsx";

export default function Buconero() {
  return (
    <section className="grid mt-2 grid-cols-1 lg:grid lg:grid-cols-2 gap-2">
      <figure className="bg-[#14181b] rounded-2xl">
        <Image
          src={CuerpoDetalle}
          alt="Logo de dicorato luthier"
          width="auto"
          height="300"
        />
      </figure>
      <aside className=" bg-[#14181b] rounded-2xl">
        <Image
          src={CuerpoDetalle}
          alt="Logo de dicorato luthier"
          width="auto"
          height="auto"
        />
      </aside>
    </section>
  );
}
