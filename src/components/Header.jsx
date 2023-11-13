import Image from "next/image";
// import Link from "next/Link";

import Pua from "../../public/pua.svg";
import Instagram from "../../public/instagram.svg";
import Youtube from "../../public/youtube.svg";
import Wsap from "../../public/wsap.svg";

export default function Header() {
  return (
    <header className="grid grid-cols-4 bg-[#14181b] p-2 mt-2 rounded-full">
      <figure className="flex justify-start col-start-1 col-end-2">
        {/* <Link href="/instrumentos" alt="texto">
          <Image
            className="ml-1 text-center p-2 border-2 border-[#20262b] rounded-full hover:bg-[#20262b]"
            width="auto"
            height="auto"
            src={Wsap}
            alt="logo de WhatsApp"
          />
        </Link> */}
      </figure>
      <figure className="flex justify-end col-start-4 col-end-5">
        <Image
          className="text-center p-2 border-2 border-[#20262b] rounded-full hover:bg-[#20262b]"
          src={Pua}
          alt="menu"
          width="auto"
          height="auto"
        />
      </figure>
    </header>
  );
}
