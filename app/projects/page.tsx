import ProjectsPage from "@/components/ProjectsPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Dillan Pho",
  description: "Projects I've made or contributed to.",
};
export default function Projects(){
    return(
       <ProjectsPage/>
    )
}