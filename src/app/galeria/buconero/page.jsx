import Image from "next/image";
import Link from "next/link";

import Info from "../../../../public/info.svg";

import Cuerpo from "../../../../public/galeria/buconero/cuerpo.png";
import CuerpoDetalle from "../../../../public/galeria/buconero/cuerpo-detalle.png";
import Clavijas from "../../../../public/galeria/buconero/clavijas.png";

export default function Buconero() {
  return (
    <>
      <section className="gap-2 lg:grid lg:col-span-2 lg:row-span-4 lg:gap-2">
        <header className="rounded-xl col-span-2">
          <p className="bg-[#14181b] mt-2 text-4xl text-center py-2 rounded-full lg:text-4xl row-start-1 row-end-2">
            BUCONERO
          </p>
          <figure className="flex justify-start place-content-center mt-2 bg-[#14181b] hover:bg-[#20262b] text-xl text-center px-2 py-2 rounded-full">
            <Image src={Info} height="auto" width="auto" alt="icono info" />
          </figure>
        </header>

        <article className="bg-[#14181b] my-2 lg:my-0 flex justify-center rounded-xl col-start-1 col-end-2 row-start-2 row-end-4">
          <figure>
            <Image
              src={CuerpoDetalle}
              height="auto"
              width="auto"
              alt="detalle de la guitarra Buconero del luthier esteban"
            />
          </figure>
        </article>

        <article className="bg-[#14181b] mb-2 lg:mb-0 rounded-xl col-start-2 col-end-3 row-start-2 row-end-3">
          <figure>
            <Image
              src={Cuerpo}
              height="auto"
              width="auto"
              alt="detalle de la guitarra Buconero del luthier esteban"
            />
          </figure>
        </article>

        <article className="bg-[#14181b]  rounded-xl col-start-2 col-end-3 row-start-3 row-end-4">
          <figure>
            <Image
              src={Clavijas}
              height="auto"
              width="auto"
              alt="detalle de la guitarra Buconero del luthier esteban"
            />
          </figure>
        </article>
      </section>
    </>
  );
}
