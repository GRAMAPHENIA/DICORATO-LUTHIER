import Image from "next/image";
import Link from "next/link";

import BuconeroHorz from "../../../../public/croquis/buconero-horz.png";
import VellutoHorz from "../../../../public/croquis/velluto-horz.png";
import EiraHorz from "../../../../public/croquis/eira-horz.png";
import CuerpoDetalle from "../../../../public/galeria/buconero/cuerpo-detalle.png";
import clavijas from "../../../../public/galeria/buconero/clavijas.png";

import Aside from "@/components/Aside.jsx";
import Presentacion from "@/components/Presentacion.jsx";

export default function Buconero() {
  return (
    <section className=" grid my-2 grid-cols-1 lg:grid lg:grid-cols-2 gap-2">
      <figure className="relative bg-[#14181b] rounded-2xl col-span-2 p-10">
        <Image
          src={BuconeroHorz}
          alt="Logo de dicorato luthier"
          width="auto"
          height="auto"
        />
        <Link
          href="/"
          className="absolute bottom-2 right-2 lg:bottom-10 lg:right-10 detalles text-base lg:text-xl text-center w-[100px] lg:w-[200px] px-0 py-1 lg:px-4 lg:py-3 ml-8 border-2 border-[#393c40] hover:bg-[#20262b] rounded-full"
        >
          detalles
        </Link>
      </figure>
      <figure className="relative bg-[#14181b] rounded-2xl col-span-2 p-10">
        <Image
          src={VellutoHorz}
          alt="Logo de dicorato luthier"
          width="auto"
          height="auto"
        />
         <Link
          href="/"
          className="absolute bottom-2 right-2 lg:bottom-10 lg:right-10 detalles text-base lg:text-xl text-center w-[100px] lg:w-[200px] px-0 py-1 lg:px-4 lg:py-3 ml-8 border-2 border-[#393c40] hover:bg-[#20262b] rounded-full"
        >
          detalles
        </Link>
      </figure>
      <figure className="relative bg-[#14181b] rounded-2xl col-span-2 p-10">
        <Image
          src={EiraHorz}
          alt="Logo de dicorato luthier"
          width="auto"
          height="auto"
        />
         <Link
          href="/"
          className="absolute bottom-2 right-2 lg:bottom-10 lg:right-10 detalles text-base lg:text-xl text-center w-[100px] lg:w-[200px] px-0 py-1 lg:px-4 lg:py-3 ml-8 border-2 border-[#393c40] hover:bg-[#20262b] rounded-full"
        >
          detalles
        </Link>
      </figure>
    </section>
  );
}
