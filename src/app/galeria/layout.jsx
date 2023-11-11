import Image from "next/image";
import Link from "next/link";

import Volver from "../../../public/volver.svg";

export default function Layout({ children }) {
  return (
    <>
      <section className="grid grid-cols-3 lg:grid-cols-6 gap-2 text-center mt-2">
        <Link
          className="flex justify-center p-2 bg-[#14181b] rounded-full hover:bg-[#20262b] border border-[#101112]"
          href="/"
        >
          <p className="text-2xl">↩</p>
        </Link>

        <p className="flex justify-center p-2  bg-[#14181b] rounded-full hover:bg-[#20262b]">
          Buconero
        </p>

        <p className="flex justify-center p-2 bg-[#14181b] rounded-full hover:bg-[#20262b]">
          Velluto
        </p>

        <p className="flex justify-center p-2 bg-[#14181b] rounded-full hover:bg-[#20262b]">
          Eira
        </p>

        <p className="flex justify-center p-2 bg-[#14181b] rounded-full hover:bg-[#20262b]">
          Piccolina
        </p>

        <p className="flex justify-center p-2 bg-[#14181b] rounded-full hover:bg-[#20262b]">
          Contactos
        </p>
      </section>

      <div>{children}</div>
    </>
  );
}
