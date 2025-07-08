import type { Metadata } from "next";
import { Geist_Mono, Source_Code_Pro, Space_Mono } from "next/font/google";
import Script from "next/script";

// Source Code Pro
import "./globals.css";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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
