import Image from "next/image";

import BuconeroHorz from "../../../../public/croquis/buconero-horz.png";
import VellutoHorz from "../../../../public/croquis/velluto-horz.png";
import EiraHorz from "../../../../public/croquis/eira-horz.png";
import CuerpoDetalle from "../../../../public/galeria/buconero/cuerpo-detalle.png";
import clavijas from "../../../../public/galeria/buconero/clavijas.png";

import Aside from "@/components/Aside.jsx";
import Presentacion from "@/components/Presentacion.jsx";

export default function Buconero() {
  return (
    <section className="grid mt-2 grid-cols-1 lg:grid lg:grid-cols-2 gap-2">
      <aside className=" bg-[#14181b] rounded-2xl col-span-2 p-10">
        <Image
          src={BuconeroHorz}
          alt="Logo de dicorato luthier"
          width="auto"
          height="auto"
        />
      </aside>
      <aside className=" bg-[#14181b] rounded-2xl col-span-2 p-10">
        <Image
          src={VellutoHorz}
          alt="Logo de dicorato luthier"
          width="auto"
          height="auto"
        />
      </aside>
      <aside className=" bg-[#14181b] rounded-2xl col-span-2 p-10">
        <Image
          src={EiraHorz}
          alt="Logo de dicorato luthier"
          width="auto"
          height="auto"
        />
      </aside>
     
    </section>
  );
}
