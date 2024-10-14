import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const outfitSemiBold = localFont({
  src: "./fonts/outfit-semibold.woff2",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const lora = localFont({
  src: "./fonts/lora.woff2",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Personal portfolio"
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
      <body
        className={`${outfitSemiBold.variable} ${lora.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
