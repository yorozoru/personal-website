"use client"
import { useState, forwardRef } from 'react';
import { CardActionArea, CardMedia, Slide } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkIcon from '@mui/icons-material/Link';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import Link from 'next/link';
import { TransitionProps } from '@mui/material/transitions';

const Transition = forwardRef(function Transition(
    props: TransitionProps & { children: React.ReactElement },
    ref: React.Ref<unknown>
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function CardPreview(){
    const [openModalId, setOpenModalId] = useState<number | null>(null);

    const handleOpen = (id:number) =>{
        setOpenModalId(id)
    }

    const handleClose = () =>{
        setOpenModalId(null)
    }

    const data = [
        {id:1, title:"Domain-Specific Language Interpreter", img:"IMG_5278.jpg", description:"A DSL Interpreter built in OCaml that follows a BNF design specification.", tech:["OCaml", "Menhir", "Dune"], modalDesc: "Blah Blah Blah What If i yap on some more about this and nothing can be done about it so I dont even know what to do about it"},
        {id:2, title:"Second Nature", img:"IMG_5278.jpg", description:"Lorem", tech:["Python", "Pandas", "Numpy", "Matplotlib"], modalDesc: "Blah Blah Blah"},
        {id:3, title:"Mass. HS Concussions Data Analysis", img:"IMG_5278.jpg", description:"Lorem", tech:["Python", "Pandas", "Seaborn", "Matplotlib", "Nominatim", "Tableau"], modalDesc: "Blah Blah Blah"},
        {id:4, title:"Bit.ly Clone (Link Shortener)", img:"IMG_5278.jpg", description:"Lorem", tech:["Typescript","Next.js", "React", "MongoDB", "Material UI"], modalDesc: "Blah Blah Blah", github:"https://github.com/yorozoru/Bitly-Clone", website:"https://mp-5-brown.vercel.app/"},
        {id:5, title:"Class Registration Bot", img:"IMG_5278.jpg", description:"Lorem", tech:["Python", "Selenium", "ChromeDriver", "Twilio"], modalDesc: "Blah Blah Blah"},
        {id:6, title:"Keta", img:"IMG_5278.jpg", description:"A medication conflict checker that checks if interactions exist to help reduce potential adverse effects.", tech:["React", "Python", "Javascript", "Flask", "Firebase"], modalDesc: "Blah Blah Blah", github:"https://github.com/yorozoru/Keta", video:"https://youtu.be/EcB2JuPXxG8"},
        {id:7, title:"Credit Card Fraud Detection AI Model", img:"IMG_5278.jpg", description:"Lorem", tech:["Python", "Pandas", "Scikit-Learn", "Seaborn", "Matplotlib", "Numpy"], modalDesc: "Blah Blah Blah", github:"https://github.com/yorozoru/Fraud-Detection-Model"},
        {id:8, title:"Throughput and Round-Trip Time App", img:"IMG_5278.jpg", description:"Lorem", tech:["Java", "Python"], modalDesc: "Blah Blah Blah", github:"https://github.com/yorozoru/RTT-TPUT"},
    ]
    return(
        <div className="grid grid-cols-4 grid-rows-2 gap-10 w-full">
            {data.map((card, i) =>(
                <Card key={i} sx={{maxWidth: 275, height: 300 }}
                className="relative group">
                    <CardActionArea className="h-full"
                    onClick={() => handleOpen(card.id)}>
                        <CardMedia
                        className="object-cover h-full w-full transform transition-transform duration-300 group-hover:scale-95"
                        component="img"
                        height="300"
                        image={card.img}
                        alt="image of boston temp"/>
                        
                        <CardContent
                        className="absolute bottom-0 left-0 right-0 h-1/2 bg-white transform translate-y-1/2 transition-all duration-300 
                        group-hover:translate-y-0">
                            <h5 className="font-lexend">{card.title}</h5>
                            <p className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300">{card.description}</p>
                        </CardContent>
                    </CardActionArea>
                    <Dialog
                    open = {openModalId === card.id}
                    TransitionComponent={Transition}
                    onClose={handleClose}
                    >
                        <DialogTitle className="font-lexend">{card.title}
                        <div className="flex flex-row space-x-2 mt-2">
                            {card.tech.map((element, i) => (<div className="rounded-xl bg-slate-200 px-2 py-1 text-sm" key={i}>
                                {element}
                            </div>))}
                        </div>
                        </DialogTitle>
                        <IconButton
                        onClick={handleClose}
                        sx={(theme) => ({
                            position: 'absolute',
                            right: 8,
                            top: 8,
                            color: theme.palette.grey[500],
                        })}
                        >
                        <CloseIcon/>
                        </IconButton>
                        <DialogContent dividers>
                            <h4>{card.modalDesc}</h4>
                        </DialogContent>
                        {(card.github || card.video || card.website) && (
                        <DialogActions>
                            {card.github && (
                             <Link href={card.github} target="_blank"><GitHubIcon sx={{color:"black"}}/></Link>
                            )}
                             {card.video && (
                             <Link href={card.video} target="_blank"><YouTubeIcon sx={{color:"black"}}/></Link>
                            )}
                            {card.website && (
                             <Link href={card.website} target="_blank"><LinkIcon sx={{color:"black"}}/></Link>
                            )}
                        </DialogActions>
                    )}
                    </Dialog>
                </Card>
            ))}
        </div>

    )
}