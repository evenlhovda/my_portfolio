import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Inter } from 'next/font/google'
import FlowiseChat from '@/components/chat/FlowiseChat'

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: "Even L Hovda",
  description: "Even L. Hovdas nettside",
  icons: {
    icon: [
      {
        url: "/favicon3.svg",
        type: "image/svg+xml",
      }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <FlowiseChat />
      </body>
    </html>
  );
}