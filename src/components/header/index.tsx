"use client";

import Image from "next/image";
import { Pacifico } from "next/font/google";
import Link from "next/link";

import { ChevronRight, User } from "react-feather";
import { usePathname } from "next/navigation";

const pacifico = Pacifico({ weight: "400", subsets: ["latin"] });

export default function Header() {
  const router = usePathname();

  const getRoute = (routeIndex: number) => {
    const test = router
      .split("/")
      .filter((item, i) => i != 0 && i <= routeIndex);

    return test.join("/");
  };

  return (
    <div className="flex px-[40px] items-center justify-between gap-3 headerShadow bg-[#fff] h-[80px]">
      <div className="flex gap-3 items-center select-none">
        <Link
          href="/"
          className="flex items-center gap-1 hover:opacity-40 transition-all duration-200 cursor-pointer"
        >
          <Image width={24} height={24} src="/logoIcon.svg" alt="" />
          <div className={pacifico.className}>
            <p className="text-xs">QuickQueue</p>
          </div>
        </Link>

        <div className="w-[1px] h-[20px] rounded-lg bg-qq-light" />

        <div className="flex items-center gap-2">
          <Link
            href={`/${router.split("/")[1]}`}
            className="text-sm capitalize font-semibold text-qq-title cursor-pointer hover:opacity-40 transition-all"
          >
            {router.split("/")[1]}
          </Link>

          {router.split("/").map((item, i) => {
            if (i > 1)
              return (
                <>
                  <ChevronRight size={12} />
                  <Link
                    href={`/${getRoute(i)}`}
                    className="text-sm capitalize text-qq-description cursor-pointer hover:opacity-40 transition-all"
                  >
                    {item}
                  </Link>
                </>
              );
          })}
        </div>
      </div>

      <div>
        <div className="flex items-center justify-center bg-[#eee] h-[35px] aspect-square rounded-full border border-[#ddd] cursor-pointer hover:opacity-40 transition-all duration-200">
          <User size={12} className="text-qq-description" />
        </div>
      </div>
    </div>
  );
}
