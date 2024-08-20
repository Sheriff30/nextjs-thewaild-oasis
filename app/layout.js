import Logo from "@/app/_components/Logo";
import Navigation from "@/app/_components/Navigation";
import "@/app/_styles/globals.css";
import Header from "@/app/_components/Header";

export const metadata = {
  title: "The wild Oasis",
};

import { Josefin_Sans } from "next/font/google";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={` antialiased ${josefin.className} bg-primary-950 text-primary-100 min-h-screen flex flex-col`}
      >
        <Header />
        <div className="flex-1 px-8 py-12 grid ">
          <main className="max-w-7xl mx-auto w-full  ">{children}</main>
        </div>
      </body>
    </html>
  );
}
