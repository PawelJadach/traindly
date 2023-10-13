import Navbar from "@/components/navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Roboto_Slab, Open_Sans } from "next/font/google";
import Footer from "@/components/footer";

const robotoSlab = Roboto_Slab({
  subsets: ["latin"],
  variable: "--roboto-slab",
});
const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TRAINdly.",
  description: "Trenuj z nami",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl">
      <body
        className={openSans.className + robotoSlab.className + " max-w-full"}
      >
        <Navbar />
        <div className="max-w-full mx-auto w-full">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
