import Image from "next/image";
import Link from "next/link";

export default function Layout({ children }) {
  return (
    <>
      <figure className=" p-4 row-start-1 row-end-3 col-start-1 col-end-3 lg:row-start-1 lg:row-end-4 lg:col-start-1 lg:col-end-2 rounded-2xl">
        <Link
          href="/"
          className="absolute top-5 left-5 lg:left-12 text-xl text-center w-[55px] px-4 py-3 border-2 border-[#393c40]  hover:bg-[#20262b] rounded-full"
        >
          ↩
        </Link>
      </figure>
      <div>{children}</div>
    </>
  );
}
