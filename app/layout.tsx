import type { Metadata } from "next";
import { Jura } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/custom/navbar";
import Footer from "@/components/custom/footer";
import Script from 'next/script'

const font = Jura({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cody Lee",
  description: "Prepare for the new era",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        {/* NAVBAR */}
        <section className="w-[80%] mx-auto">
          <Navbar></Navbar>
        </section>
        {children}
        {/* FOOTER */}
        <section className="w-[80%] mx-auto">
          <Footer></Footer>
        </section>
      </body>
    </html>
  );
}
