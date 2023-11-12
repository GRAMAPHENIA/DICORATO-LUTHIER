import Image from "next/image";
import Link from "next/link";

export default function Navegacion() {
  return (
    <section className="grid grid-cols-3 lg:grid-cols-6 w-full gap-2 text-center">
      <Link
        href="/"
        className="flex justify-center p-4 bg-[#14181b] rounded-full hover:bg-[#20262b]"
      >
        <p>Inicio</p>
      </Link>
      <Link
        href="/instrumentos"
        className="flex justify-center p-4 bg-[#14181b] rounded-full hover:bg-[#20262b]"
      >
        <p>Instrumentos</p>
      </Link>
      <Link
        href="/Reparaciones"
        className="flex justify-center p-4 bg-[#14181b] rounded-full hover:bg-[#20262b]"
      >
        <p>Reparación</p>
      </Link>
      <Link
        href="/nosotros"
        className="flex justify-center p-4 bg-[#14181b] rounded-full hover:bg-[#20262b]"
      >
        <p>Nosotros</p>
      </Link>
      <Link
        href="/taller"
        className="flex justify-center p-4 bg-[#14181b] rounded-full hover:bg-[#20262b]"
      >
        <p>Taller</p>
      </Link>
      <Link
        href="/contactos"
        className="flex justify-center p-4 bg-[#14181b] rounded-full hover:bg-[#20262b]"
      >
        <p>Contactos</p>
      </Link>
    </section>
  );
}
