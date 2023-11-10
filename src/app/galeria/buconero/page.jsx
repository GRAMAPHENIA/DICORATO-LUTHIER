import Image from "next/image";
import Link from "next/link";

import Info from "../../../../public/info.svg";

import Cuerpo from "../../../../public/galeria/buconero/cuerpo.png";
import CuerpoDetalle from "../../../../public/galeria/buconero/cuerpo-detalle.png";
import Clavijas from "../../../../public/galeria/buconero/clavijas.png";

export default function Buconero() {
  return (
    <>
      <section className="grid col-span-2 row-span-4 gap-2">

        <header className="flex justify-between items-center rounded-xl col-span-2">
          <p className="bg-[#14181b] text-lg text-center px-6 py-4 rounded-lg lg:text-4xl row-start-1 row-end-2">
            Buconero
          </p>

          <figure className="bg-[#14181b] hover:bg-[#20262b] text-xl text-center px-2 py-2 rounded-full col-start-3 col-end-5 row-start-1 row-end-2">
            <Image src={Info} height="auto" width="auto" alt="icono info" />
          </figure>
        </header>

        <article className="bg-[#14181b] flex justify-center rounded-xl col-start-1 col-end-2 row-start-2 row-end-4">
          <figure>
            <Image
              src={CuerpoDetalle}
              height="auto"
              width="auto"
              alt="detalle de la guitarra Buconero del luthier esteban"
            />
          </figure>
        </article>

        <article className="bg-[#14181b] rounded-xl col-start-2 col-end-3 row-start-2 row-end-3">
          <figure>
            <Image
              src={Cuerpo}
              height="auto"
              width="auto"
              alt="detalle de la guitarra Buconero del luthier esteban"
            />
          </figure>
        </article>

        <article className="bg-[#14181b] rounded-xl col-start-2 col-end-3 row-start-3 row-end-4">
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
