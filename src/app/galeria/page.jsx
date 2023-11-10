import Buconero from "./buconero/page.jsx";
import Velluto from "./velluto/page.jsx";

export default function Galeria() {
  return (
    <>
      <section className="grid mt-10 grid-cols-1 lg:grid lg:grid-cols-2 lg:px-24">
        <Buconero />
      </section>
    </>
  );
}
