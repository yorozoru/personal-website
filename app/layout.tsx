import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import NavChoose from "@/components/NavChoose";
import { Lexend, Roboto, Space_Mono } from "next/font/google"; // Import all fonts here

const lexend = Lexend({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lexend',
});

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
});

const space_mono = Space_Mono({
  weight: '700',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space_mono',
});

export const metadata: Metadata = {
  title: "Dillan Pho",
  description: "Dillan Pho is a software engineer specializing in full-stack development and machine learning. Explore my portfolio of projects, technical insights, and career journey. Whether you're looking for innovative web applications, scalable software solutions, or a way to connect, this is the place to start.",
  openGraph: {
    title: 'Dillan Pho',
    siteName: "Dillan Pho's Personal Website",
    type: 'website',
    description: "Dillan Pho is a software engineer specializing in full-stack development and machine learning. Explore my portfolio of projects, technical insights, and career journey. Whether you're looking for innovative web applications, scalable software solutions, or a way to connect, this is the place to start.",
    url: 'https://dilloh.com',
    images: [
      {
        url: 'thumbnail.png',
        secureUrl: 'thumbnail.png',
        width: 1920,
        height: 1080,
        alt: 'Preview image for Dillan Pho',
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
    <html lang="en" className={`${lexend.variable} ${roboto.variable} ${space_mono.variable}`}>
    <body>
    <Analytics/>
    <SpeedInsights/>
      <div className="min-h-screen flex flex-col">
        <div className="absolute z-20 w-full px-8 mt-2">
          <NavChoose/>
        </div>
        <main className="flex-grow">
          {children}
        </main>
        </div>
        <div className="flex justify-center mt-auto z-20 w-full bg-black" >
        <Footer />
      </div>
      </body>
    </html>
  );
}
