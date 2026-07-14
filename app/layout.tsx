import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "circazine",
  description: "draw a circuit, get prizes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <Script
        async
        src="https://plausible.io/js/pa-oiIA32Yw5wWLEDy_m8vZa.js"
      />
      <Script id="plausible-init" strategy="afterInteractive">
        {`window.plausible = window.plausible || function () {(window.plausible.q = window.plausible.q || []).push(arguments)};
window.plausible.init = window.plausible.init || function (options) { window.plausible.o = options || {}; };
window.plausible.init();`}
      </Script>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
