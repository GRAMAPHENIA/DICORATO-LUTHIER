import Image from "next/image";
import Link from "next/link";

import Volver from "../../../public/volver.svg";

export default function Layout({ children }) {
  return (
    <>
      <figure className="p-4 row-start-1 row-end-3 col-start-1 col-end-3 lg:row-start-1 lg:row-end-4 lg:col-start-1 lg:col-end-2 rounded-2xl">
        <Link
          href="/"
          className="absolute top-1 left-1 lg:left-12 bg-[#14181b] hover:bg-[#20262b] text-xl text-center px-2 py-2 my-2 rounded-full"
        >
          <Image
            src={Volver}
            height="auto"
            width="auto"
            alt="detalle de la guitarra Buconero del luthier esteban"
          />
        </Link>
      </figure>
      <div>{children}</div>
    </>
  );
}
