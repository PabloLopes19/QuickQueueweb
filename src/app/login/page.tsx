"use client";

import Image from "next/image";

import Input from "./components/inputs";
import { Lock, Mail } from "react-feather";
import Header from "@/components/header";
import Link from "next/link";

export default function Login() {
  return (
    <div className="animate-fadeIn">
      <Header />
      <div className="flex flex-1 min-h-[calc(100vh-80px)] bg-qq-background">
        <div className="hidden laptop:flex bg-slate-800 h-[calc(100vh-80px)] w-1/2">
          s
        </div>

        <div className="flex flex-1 items-center justify-center h-[calc(100vh-80px)]">
          <div className="flex flex-col gap-6 items-center w-[400px]">
            <Image width={207} height={56} src={"/Logo 1.svg"} alt="" />

            <div className="flex flex-col py-5 items-center justify-center">
              <h1 className="font-semibold text-qq-title text-2xl">
                Olá, seja bem vindo!!
              </h1>
              <span className="text-qq-light">
                Faça o seu login aqui embaixo
              </span>
            </div>

            <div className="flex gap-3 flex-1 w-full flex-col">
              <Input
                Icon={Mail}
                type="email"
                placeholder="Digite o seu email aqui"
              />
              <Input
                Icon={Lock}
                type="password"
                placeholder="Digite a sua senha aqui"
              />
            </div>

            <Link
              href="/dashboard"
              className="bg-qq-primary w-full h-[55px] flex items-center justify-center font-bold text-[#fff] rounded-[9px] hover:brightness-110 transition-all duration-200"
            >
              Entrar
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
