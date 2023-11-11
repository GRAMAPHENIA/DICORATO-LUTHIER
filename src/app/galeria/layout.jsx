import Image from "next/image";
import Link from "next/link";

import Volver from "../../../public/volver.svg";

export default function Layout({ children }) {
  return (
    <>
      <section className="grid grid-cols-5 gap-2 text-xl row-span-2 mt-4 lg:mx-16 lg:my-4 ">
        <Link href="/">
          <p className="bg-[#14181b] text-center py-2 rounded-full col-start-1 col-end-2 row-start-1 row-end-2 lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-2">
            ↩
          </p>
        </Link>
        <p className="bg-[#14181b] text-center py-2 rounded-full col-start-2 col-end-4 row-start-1 row-end-2 lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-2">
          Buconero
        </p>
        <p className="bg-[#14181b] text-center py-2 rounded-full col-start-4 col-end-6 row-start-1 row-end-2 lg:col-start-3 lg:col-end-4 lg:row-start-1 lg:row-end-2">
          Velluto
        </p>
        <p className="bg-[#14181b] text-center py-2 rounded-full col-start-1 col-end-3 row-start-2 row-end-3 lg:col-start-4 lg:col-end-5 lg:row-start-1 lg:row-end-2">
          Eira
        </p>
        <p className="bg-[#14181b] text-center py-2 rounded-full col-start-3 col-end-6 row-start-2 row-end-3 lg:col-start-5 lg:col-end-6 lg:row-start-1 lg:row-end-2">
          Picolina
        </p>
      </section>

      <div>{children}</div>
    </>
  );
}
