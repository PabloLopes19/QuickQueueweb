import type { Metadata } from "next";
import { Inter, Pacifico } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const pacifico = Pacifico({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "QuickQueue",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>

      <body className={inter.className}>{children}</body>
    </html>
  );
}
