import Image from "next/image";
import Link from "next/link";

import Volver from "../../../public/volver.svg";
import Arrow from "../../../public/galeria/arrow-right.svg";

export default function Layout({ children }) {
  return (
    <>
      <section className="grid grid-cols-3 lg:grid-cols-6 gap-2 text-center mt-2">
        <Link
          className="flex justify-center px-2  bg-[#14181b] rounded-full hover:bg-[#20262b]"
          href="/"
        >
          <Image
            className="rotate-180"
            src={Arrow}
            height="auto"
            width="auto"
            alt="detalle de la guitarra Buconero del luthier esteban"
          />
        </Link>

        <p className="flex justify-center px-2 py-1  bg-[#14181b] rounded-full hover:bg-[#20262b]">
          Buconero
        </p>

        <p className="flex justify-center px-2 py-1 bg-[#14181b] rounded-full hover:bg-[#20262b]">
          Velluto
        </p>

        <p className="flex justify-center px-2 py-1 bg-[#14181b] rounded-full hover:bg-[#20262b]">
          Eira
        </p>

        <p className="flex justify-center px-2 py-1 bg-[#14181b] rounded-full hover:bg-[#20262b]">
          Piccolina
        </p>

        <p className="flex justify-center px-2 py-1 bg-[#14181b] rounded-full hover:bg-[#20262b]">
          Contactos
        </p>
      </section>

      <div>{children}</div>
    </>
  );
}
