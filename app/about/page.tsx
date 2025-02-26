import AboutPage from "@/components/AboutPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Dillan Pho",
  description: "Everything about me!",
};
export default function About(){
    return(
       <AboutPage/>
    )
}