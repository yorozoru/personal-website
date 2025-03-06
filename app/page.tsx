import LandingPage from "@/components/LandingPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | Dillan Pho",
  description: "Dillan Pho is a software engineer specializing in full-stack development and machine learning. Explore my portfolio of projects, technical insights, and career journey. Whether you're looking for innovative web applications, scalable software solutions, or a way to connect, this is the place to start.",
};

export default function Home() {
  return (
   <LandingPage/>
  );
}
