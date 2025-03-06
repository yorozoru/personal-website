import AboutPage from "@/components/AboutPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Dillan Pho",
  description: "My areas of expertise and experiences in terms of coding, and things outside of software that I enjoy doing.",
};
export default function About(){
    return(
       <AboutPage/>
    )
}