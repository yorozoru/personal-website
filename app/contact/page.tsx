import ContactPage from "@/components/ContactPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Dillan Pho",
  description: "All the methods to get in contact with me",
};
export default function Contact(){
    return(
        <div>
       <ContactPage/>
        </div>
    )
}