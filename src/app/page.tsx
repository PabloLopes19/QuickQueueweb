"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { useEffect, useState } from "react";
import { BounceLoader } from "react-spinners";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => router.push("/login"), 3000);
  }, [router]);

  return (
    <div
      className={`flex flex-col items-center gap-6 justify-center h-screen flex-1 bg-[#F2F9FF]`}
    >
      <div
        className={`flex flex-col items-center gap-6 justify-center animate-fadeOut delayAnimation`}
      >
        <Image width={207} height={56} src={"/Logo 1.svg"} alt="" />
        <BounceLoader size={24} color="#EAB62F" />
      </div>
    </div>
  );
}
