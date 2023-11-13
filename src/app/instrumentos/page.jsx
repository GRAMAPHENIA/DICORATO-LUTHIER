import Image from "next/image";
import Link from "next/link";

import BuconeroHorz from "../../../public/croquis/buconero-horz.svg";
import VellutoHorz from "../../../public/croquis/velluto-horz.svg";
import EiraHorz from "../../../public/croquis/eira-horz.svg";

export const metadata = {
  title: 'Instrumentos',
}

export default function Buconero() {
  return (
    <>
      <section className="border-8 border-[#3b4f6323] my-2 rounded-3xl">
        <div className="absolute top-[280px] lg:top-[220px] left-[34%] lg:left-[34%] h-[15px] w-[200px]  lg:h-[30px] lg:w-[500px] bg-[#61b0ffda] -z-10 rounded-full blur-[50px] lg:blur-[100px]"></div>
        <h1 className="flex text-4xl lg:text-[100px] text-center leading-[50px] lg:leading-[75px] justify-center align-middle px-2 my-20 bg-clip-text text-transparent bg-gradient-to-r from-[#121518] via-[#637d97] to-[#ffffff] font-extralight tracking-tight">
          MODELOS Y DETALLES
        </h1>
      </section>

      <section className="grid my-2 grid-cols-1 lg:grid lg:grid-cols-2 gap-2">
        <figure className="relative bg-[#14181b] rounded-2xl col-span-2 p-4">
          <p>Modelo Buconero</p>
        </figure>
        <figure className="relative bg-[#14181b] rounded-2xl col-span-2 p-10 lg:p-10">
          <Image
            src={BuconeroHorz}
            alt="Logo de dicorato luthier"
            width="auto"
            height="auto"
          />
          <Link
            href="/instrumentos/buconero"
            className="absolute bottom-2 right-2 lg:bottom-10 lg:right-10 detalles text-base lg:text-xl text-center w-[100px] lg:w-[200px] px-0 py-1 lg:px-4 lg:py-3 ml-8 border-2 border-[#393c40] hover:bg-[#171c1f] hover:text-amber-100 rounded-full"
          >
            detalles
          </Link>
        </figure>
        <figure className="relative bg-[#14181b] rounded-2xl col-span-2 p-4">
          <p>Modelo Velluto</p>
        </figure>
        <figure className="relative bg-[#14181b] rounded-2xl col-span-2 p-10 lg:p-10">
          <Image
            src={VellutoHorz}
            alt="Logo de dicorato luthier"
            width="auto"
            height="auto"
          />
          <Link
            href="/instrumentos/velluto"
            className="absolute bottom-2 right-2 lg:bottom-10 lg:right-10 detalles text-base lg:text-xl text-center w-[100px] lg:w-[200px] px-0 py-1 lg:px-4 lg:py-3 ml-8 border-2 border-[#393c40] hover:bg-[#171c1f] hover:text-amber-100 rounded-full"
          >
            detalles
          </Link>
        </figure>
        <figure className="relative bg-[#14181b] rounded-2xl col-span-2 p-4">
          <p>Modelo Eira</p>
        </figure>
        <figure className="relative bg-[#14181b] rounded-2xl col-span-2 p-10 lg:p-10">
          <Image
            src={EiraHorz}
            alt="Logo de dicorato luthier"
            width="auto"
            height="auto"
          />
          <Link
            href="/instrumentos/eira"
            className="absolute bottom-2 right-2 lg:bottom-10 lg:right-10 detalles text-base lg:text-xl text-center w-[100px] lg:w-[200px] px-0 py-1 lg:px-4 lg:py-3 ml-8 border-2 border-[#393c40] hover:bg-[#171c1f] hover:text-amber-100 rounded-full"
          >
            detalles
          </Link>
        </figure>
      </section>
    </>
  );
}
