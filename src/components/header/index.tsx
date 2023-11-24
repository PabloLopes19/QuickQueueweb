import Image from "next/image";
import { Pacifico } from "next/font/google";
import Link from "next/link";

const pacifico = Pacifico({ weight: "400", subsets: ["latin"] });

export default function Header() {
  return (
    <div className="flex px-[40px] items-center gap-3 headerShadow bg-[#fff] h-[80px]">
      <Link
        href="/"
        className="flex gap-1 items-center select-none hover:opacity-40 transition-all duration-200 cursor-pointer"
      >
        <Image width={24} height={24} src="/logoIcon.svg" alt="" />
        <div className={pacifico.className}>
          <p className="text-xs">QuickQueue</p>
        </div>
      </Link>
    </div>
  );
}
