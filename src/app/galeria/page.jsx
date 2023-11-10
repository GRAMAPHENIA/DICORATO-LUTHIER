import Image from "next/image";
import Link from "next/link";


import Cuerpo from "../../../public/galeria/cuerpo.png";
import CuerpoDetalle from "../../../public/galeria/cuerpo-detalle.png";
import Clavijas from "../../../public/galeria/clavijas.png";

export default function Galeria() {
  return (
    <>
      <section className="flex flex-col gap-4 my-8 mx-2 p-6 justify-center content-center rounded-2xl lg:grid lg:grid-cols-4 lg:my-12 lg:mx-60 ">
        <figure className=" p-4 row-start-1 row-end-3 col-start-1 col-end-3 lg:row-start-1 lg:row-end-4 lg:col-start-1 lg:col-end-2 rounded-2xl">
          <Link
            href="/"
            className="absolute top-5 left-5 lg:left-28 text-xl text-center w-[55px] px-4 py-3 border-2 border-[#393c40]  hover:bg-[#20262b] rounded-full"
          >
            ↩
          </Link>
        </figure>
        <header className="grid grid-cols-2 rounded-2xl bg-[#10161a] col-start-1 col-end-5 row-start-1 row-end-2">
          <p className="p-4 text-2xl lg:text-5xl">BUCONERO</p>
          <p className="p-4 text-xl">detalles »</p>
          
        </header>
        <article className="bg-[#14181b] flex justify-center rounded-2xl col-start-1 col-end-3 row-start-2 row-end-4">
          <figure>
            <figure>
              <Image
                src={CuerpoDetalle}
                height={600}
                width="auto"
                alt="detalle de la guitarra Buconero del luthier esteban"
              />
            </figure>
          </figure>
        </article>

        <article className="bg-[#10161a] rounded-2xl col-start-3 col-end-5 row-start-2 row-end-3">
          <figure>
            <Image
              src={Cuerpo}
              height="auto"
              width="auto"
              alt="detalle de la guitarra Buconero del luthier esteban"
            />
          </figure>
        </article>

        <article className="bg-[#10161a] rounded-2xl col-start-3 col-end-5 row-start-3 row-end-4">
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
