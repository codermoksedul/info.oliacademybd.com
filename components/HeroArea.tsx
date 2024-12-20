import Image from "next/image";
import { FaLocationDot } from "react-icons/fa6";

export default function HeroArea() {
  return (
    <header className="relative w-full">
      {/* cover */}
      <div className="w-full">
        <Image src="/images/cover.webp" alt="Hero" width={1920} height={1080} />
      </div>
      {/* profile */}
      <div className="w-full flex px-5 flex-row justify-start items-start gap-5">
        <Image
          className="rounded-full -mt-10 overflow-hidden max-w-[120px] sm:max-w-[140px]"
          src="/images/logo.webp"
          alt="Profile"
          width={200}
          height={200}
        />
        <div className="info mt-4">
          <h1 className="text-2xl sm:text-3xl font-bold">Oli Academy</h1>
          <p className="font-medium flex flex-row items-center gap-0.5">
            <FaLocationDot className="text-red-500" /> Radhabollov, Rangpur
          </p>
        </div>
      </div>
      {/* location */}
      <div className="w-full flex flex-row text-center justify-center items-center gap-5 mt-7 px-5">
        <p className="font-medium">
          বায়োলজি`&apos;তে ভয়? চলো শিখি সহজে, <br /> ভয়কে করি জয়
        </p>
      </div>
    </header>
  );
}
