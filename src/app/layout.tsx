import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "react-multi-carousel/lib/styles.css";
import { Footer } from "./components/Footer";
import dynamic from "next/dynamic";

const HeaderMenu = dynamic(() =>
  import("./components/HeaderMenu").then((mod) => mod.HeaderMenu)
);

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My Netflix",
  description: "This a streaming platform challenge",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <HeaderMenu />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
