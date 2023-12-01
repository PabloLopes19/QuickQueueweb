"use client";

import Header from "@/components/header";
import { useParams, useSearchParams } from "next/navigation";

export default function UserPage() {
  const params = useParams();

  const slug = params.slug;

  return (
    <>
      <Header />
      <div className="bg-qq-background h-[calc(100vh-80px)] flex flex-1 items-center justify-center">
        Página de {slug}
      </div>
    </>
  );
}
