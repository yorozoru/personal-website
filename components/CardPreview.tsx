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
import data from '@/app/projData';

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

    return(
        <div className="flex flex-col sm:grid sm:grid-cols-2 sm:grid-rows-4 lg:grid-cols-4 lg:grid-rows-2 gap-10 w-full">
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
                        alt={card.alt}/>
                        
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
                        <div className="flex flex-wrap gap-2 mt-2">
                            {card.tech.map((element, i) => (<div className={"rounded-xl bg-slate-200 px-2 py-1 text-sm"} key={i}>
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
                        {card.modalDesc && (
                        <DialogContent dividers>
                            <ul className="list-disc pl-5 space-y-2">
                                {Array.isArray(card.modalDesc) ? 
                                    card.modalDesc.map((point, i) => (
                                        <li key={i}>{point}</li>
                                    )) : 
                                    <li>{card.modalDesc}</li>
                                }
                            </ul>
                        </DialogContent>
                        )}
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