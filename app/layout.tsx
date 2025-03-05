import type { Metadata } from "next";
import HeaderNav from "@/components/HeaderNav";
import "./globals.css";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"


export const metadata: Metadata = {
  title: "Dillan Pho",
  description: "Dillan Pho's Personal Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body>
    <Analytics/>
    <SpeedInsights/>
      <div className="min-h-screen flex flex-col">
        <div className="absolute z-20 w-full px-8 mt-2">
          <HeaderNav />
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
