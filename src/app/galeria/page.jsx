import Buconero from "./buconero/page.jsx";
import Velluto from "./velluto/page.jsx";

export default function Galeria() {
  return (
    <>
      <section className="flex flex-col gap-2  mx-2 justify-center content-center rounded-2xl lg:grid lg:grid-cols-4 px-4 lg:px-24  pb-2 ">
        <Buconero />
      </section>
      <section className="flex flex-col gap-2  mx-2 justify-center content-center rounded-2xl lg:grid lg:grid-cols-4 px-4 lg:px-24  pb-5  ">
        <Velluto />
      </section>
    </>
  );
}
