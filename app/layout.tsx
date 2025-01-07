import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Script from 'next/script'

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

export const metadata: Metadata = {
  title: "Even L Hovda",
  description: "Even L. Hovdas nettside",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon2.ico"/>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Script
          strategy="afterInteractive"
          type="module"
          dangerouslySetInnerHTML={{
            __html: `
              import Chatbot from "https://cdn.jsdelivr.net/npm/flowise-embed/dist/web.js"
              Chatbot.init({
                chatflowid: "6f8d1f97-79e5-4d23-82c9-16150f0134ea",
                apiHost: "https://flowise-p9jk.onrender.com",
              })
            `
          }}
        />
      </body>
    </html>
  );
}
