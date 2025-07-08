import type { Metadata } from "next";
import { Space_Mono } from "next/font/google";
import Script from "next/script";

import "./globals.css";

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "@Terrarix7",
  description: "I build stuff on the internet",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${spaceMono.className} antialiased`}>
        <Script
          src="https://assets.onedollarstats.com/stonks.js"
          strategy="afterInteractive"
        />
        {children}
      </body>
    </html>
  );
}
