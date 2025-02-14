import type { Metadata } from "next";
import { Instrument_Sans } from 'next/font/google';
import { Toaster } from "@/components/ui/toaster"
import "./globals.css";



const instrument = Instrument_Sans({
    style :['normal'],
    subsets : ['latin']
});

export const metadata: Metadata = {
  title: "DevLinks",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${instrument.className} antialiased bg-light-grey`} >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
