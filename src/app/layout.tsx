import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { TimePeriodProvider } from "../context/TimePeriodContext";
import "./styles/globals.css";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Stratus Ventures",
  description: "We build cool software products.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className=
        {`
          ${geistSans.variable} ${geistMono.variable}
          bg-neutral-950
          tracking-tight antialiased
          h-screen
        `}
      >
        <TimePeriodProvider>
          {children}         
        </TimePeriodProvider>
      </body>
    </html>
  );
}
