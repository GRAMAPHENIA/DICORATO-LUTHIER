import Image from "next/image";

import Pua from "../../public/pua.svg";
import Instagram from "../../public/instagram.svg";
import Youtube from "../../public/youtube.svg";
import Email from "../../public/email.svg";

export default function Header() {
  return (
    <header className="grid grid-cols-4 justify-center align-middle bg-[#14181b] p-3 rounded-full">
      <figure>
        <Image
          className="ml-1 rotate-45 text-center"
          src={Pua}
          alt="Pua de guitarra"
          width="30"
          height="auto"
        />
      </figure>
      <div className="flex align-middle col-start-4 col-end-5 justify-end gap-4 mr-4">
        <Image
          width="35"
          height="auto"
          className="text-center"
          src={Youtube}
          alt="logo de youtube"
        />
        <Image
          className="text-center"
          src={Instagram}
          alt="logo de instagram"
          width="35"
          height="auto"
        />
        <Image
          width="30"
          height="30"
          className="text-center"
          src={Email}
          alt="logo de email"
        />
      </div>
    </header>
  );
}
