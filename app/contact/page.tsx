import AboutPage from "@/components/AboutPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Dillan Pho",
  description: "All the methods to get in contact with me",
};
export default function About(){
    return(
       <AboutPage/>
    )
}