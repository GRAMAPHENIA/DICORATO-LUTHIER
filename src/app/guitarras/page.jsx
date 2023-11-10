import Image from "next/image";
import Link from "next/link";

export default function Guitarras() {
  return (
    <section className="px-2 lg:px-24 pt-2">
      <article className="mb-2 gap-2 grid grid-rows-6 grid-cols-2 lg:mx-15 lg:grid-cols-4 ">
        <figure className=" p-4 row-start-1 row-end-3 col-start-1 col-end-3 lg:row-start-1 lg:row-end-4 lg:col-start-1 lg:col-end-2 bg-[#14181b] rounded-2xl">
          <Link
            href="/"
            className="absolute top-5 left-5 lg:left-28 text-xl text-center w-[55px] px-4 py-3 border-2 border-[#393c40]  hover:bg-[#20262b] rounded-full"
          >
            ↩
          </Link>
        </figure>

        <figure className="p-4 lg:col-start-2 lg:col-end-3 bg-[#14181b] rounded-2xl">
          2
        </figure>

        <figure className="p-4 lg:col-start-3 lg:col-end-4 bg-[#14181b] rounded-2xl">
          3
        </figure>

        <figure className="p-4 row-start-4 row-end-6 col-start-1 col-end-2 lg:row-start-1 lg:row-end-7 lg:col-start-4 lg:col-end-5 bg-[#14181b] rounded-2xl">
          4
        </figure>

        <figure className="p-4 row-start-4 row-end-6 col-start-2 col-end-3 lg:row-start-4 lg:row-end-7 lg:col-start-1 lg:col-end-2 bg-[#14181b] rounded-2xl">
          5
        </figure>

        <figure className="p-4 row-start-8 row-end-9 col-start-1 col-end-3 lg:row-start-2 lg:row-end-7 lg:col-start-2 lg:col-end-4 bg-[#14181b] rounded-2xl">
          6
        </figure>
      </article>

      <article className=" gap-2 grid grid-rows-3 grid-cols-3 lg:grid-cols-4 ">
        <figure className="h-[250px] p-4 row-start-1 row-end-6 col-start-1 col-end-2 lg:row-start-1 lg:row-end-4 lg:col-start-1 lg:col-end-2 bg-[#14181b] rounded-2xl">
          A
        </figure>

        <figure className="h-[250px] p-4 row-start-1 row-end-6 col-start-2 col-end-3 lg:row-start-1 lg:row-end-4 lg:col-start-4 lg:col-end-6 bg-[#14181b] rounded-2xl">
          B
        </figure>

        <figure className="h-[250px] p-4 row-start-1 row-end-6 col-start-3 col-end-4 lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-4 bg-[#14181b] rounded-2xl">
          C
        </figure>
      </article>

      <article className="mt-2 gap-2 grid grid-rows-1 grid-cols-3 lg:grid-cols-4 ">
        <figure className="h-[125px] p-4 row-start-1 row-end-2 col-start-1 col-end-2 lg:row-start-1 lg:row-end-2 lg:col-start-1 lg:col-end-2 bg-[#14181b] rounded-2xl">
          A
        </figure>

        <figure className="h-[125px] p-4 row-start-1 row-end-2 col-start-2 col-end-3 lg:row-start-1 lg:row-end-2 lg:col-start-2 lg:col-end-4 bg-[#14181b] rounded-2xl">
          B
        </figure>

        <figure className="h-[1325x] p-4 row-start-1 row-end-2 col-start-3 col-end-4 lg:row-start-1 lg:row-end-2 lg:col-start-4 lg:col-end-6 bg-[#14181b] rounded-2xl">
          C
        </figure>
      </article>
    </section>
  );
}
