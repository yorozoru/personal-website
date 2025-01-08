import type { Metadata } from "next";
import HeaderNav from "@/components/HeaderNav";
import "./globals.css";

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
      <div className="flex justify-center mt-4">
        <HeaderNav />
      </div>
        {children}
      </body>
    </html>
  );
}
