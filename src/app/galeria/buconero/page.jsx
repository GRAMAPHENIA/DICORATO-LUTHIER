import Image from "next/image";
import Link from "next/link";

import Cuerpo from "../../../../public/galeria/cuerpo.png";
import CuerpoDetalle from "../../../../public/galeria/cuerpo-detalle.png";
import Clavijas from "../../../../public/galeria/clavijas.png";

export default function Buconero() {
  return (
    <>
      <header className="flex justify-between items-center px-4 rounded-xl bg-[#14181b] col-span-full ">
        <p className=" text-2xl lg:text-4xl">BUCONERO</p>
        <p className=" text-xl text-center px-4 py-3 my-4 border-2 border-[#393c40]  hover:bg-[#20262b] rounded-full">
          + info
        </p>
      </header>
      <article className="bg-[#14181b] flex justify-center rounded-xl col-start-1 col-end-3 row-start-2 row-end-4">
        <figure>
          <Image
            src={CuerpoDetalle}
            height="auto"
            width="auto"
            alt="detalle de la guitarra Buconero del luthier esteban"
          />
        </figure>
      </article>

      <article className="bg-[#14181b] rounded-xl col-start-3 col-end-5 row-start-2 row-end-3">
        <figure>
          <Image
            src={Cuerpo}
            height="auto"
            width="auto"
            alt="detalle de la guitarra Buconero del luthier esteban"
          />
        </figure>
      </article>

      <article className="bg-[#14181b] rounded-xl col-start-3 col-end-5 row-start-3 row-end-4">
        <figure>
          <Image
            src={Clavijas}
            height="auto"
            width="auto"
            alt="detalle de la guitarra Buconero del luthier esteban"
          />
        </figure>
      </article>
    </>
  );
}
