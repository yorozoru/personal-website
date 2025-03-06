import ContactPage from "@/components/ContactPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Dillan Pho",
  description: "This is a contact page which has my LinkedIn, Email and resume, and a little interactive game in the background.",
};
export default function Contact(){
    return(
        <div>
       <ContactPage/>
        </div>
    )
}