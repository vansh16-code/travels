import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Dreamscape Travels - Explore India with Expert Tour Packages | Amritsar",
  description: "Premium travel packages for Kashmir, Shimla, Manali, Dharamshala & more. Book your dream vacation with Dreamscape Travels, Amritsar's trusted tour operator.",
  icons: {
    icon: '/head.png',
    apple: '/head.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/head.png" type="image/png" />
        <link rel="apple-touch-icon" href="/head.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
