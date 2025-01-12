import LandingPage from "@/components/LandingPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | Dillan Pho",
  description: "Dillan Pho's Personal Website",
};

export default function Home() {
  return (
   <LandingPage/>
  );
}
