import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import Link from 'next/link';

const date = new Date();
export default function Footer(){
    return(
    <div className="flex flex-col justify-center items-center min-h-full py-4">
        <div className="flex flex-row gap-4">
            <Link href="https://www.linkedin.com/in/dillan-pho/" target="_blank"><LinkedInIcon sx={{color:"white"}}/></Link>
            <Link href="https://github.com/yorozoru/" target="_blank"><GitHubIcon sx={{color:"white"}}/></Link>
            <Link href="mailto:dillanpho@dilloh.com"><EmailIcon sx={{color:"white"}}/></Link>
        </div>
        <h1 className="text-white mt-1">made with ❤️ by dillan pho</h1>
        <h2 className="text-white mt-1">copyright © {date.getFullYear()}</h2>
    </div>
    );

}
