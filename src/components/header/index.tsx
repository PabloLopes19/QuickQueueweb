import Image from "next/image";

export default function Header() {
  return (
    <div className="flex items-center gap-3 headerShadow bg-[#fff] h-[80px]">
      <Image
        width={12}
        height={12}
        src="/logoIcon.svg"
        alt=""
        className="w-[64px] aspect-square"
      />
      QuickQueue
    </div>
  );
}
