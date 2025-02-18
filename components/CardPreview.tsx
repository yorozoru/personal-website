"use client"
import { useState } from 'react';
import { CardActionArea, CardMedia } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

export default function CardPreview(){
    const [open, setOpen] = useState(false)
    return(
        <div className="grid grid-cols-4 grid-rows-2 gap-10 w-full">
            <Card sx={{maxWidth: 275, height: 300 }}
              className="relative group">
                <CardActionArea className="h-full">
                    <CardMedia
                    className="object-cover h-full w-full transform transition-transform duration-300 group-hover:scale-95"
                    component="img"
                    height="300"
                    image="IMG_5278.jpg"
                    alt="image of boston temp"/>
                    
                    <CardContent
                    className="absolute bottom-0 left-0 right-0 h-1/2 bg-white transform translate-y-1/2 transition-all duration-300 
                    group-hover:translate-y-0">
                        <h5 className="font-lexend">Keta</h5>
                        <p className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </CardContent>
                </CardActionArea>
            </Card>
            <Card sx={{maxWidth: 275}}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    height="100"
                    image="IMG_5278.jpg"
                    alt="image of boston temp"/>
                    <CardContent>
                        <h5 className="font-lexend">Keta</h5>
                    </CardContent>
                </CardActionArea>
            </Card>
            <Card sx={{maxWidth: 275}}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    height="100"
                    image="IMG_5278.jpg"
                    alt="image of boston temp"/>
                    <CardContent>
                        <h5 className="font-lexend">Keta</h5>
                    </CardContent>
                </CardActionArea>
            </Card>
            <Card sx={{maxWidth: 275}}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    height="100"
                    image="IMG_5278.jpg"
                    alt="image of boston temp"/>
                    <CardContent>
                        <h5 className="font-lexend">Keta</h5>
                    </CardContent>
                </CardActionArea>
            </Card>
            <Card sx={{maxWidth: 275}}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    height="50"
                    image="IMG_5278.jpg"
                    alt="image of boston temp"/>
                    
                    <CardContent>
                        <h5 className="font-lexend">Keta</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </CardContent>
                </CardActionArea>
            </Card>
            <Card sx={{maxWidth: 275}}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    height="100"
                    image="IMG_5278.jpg"
                    alt="image of boston temp"/>
                    <CardContent>
                        <h5 className="font-lexend">Keta</h5>
                    </CardContent>
                </CardActionArea>
            </Card>
            <Card sx={{maxWidth: 275}}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    height="100"
                    image="IMG_5278.jpg"
                    alt="image of boston temp"/>
                    <CardContent>
                        <h5 className="font-lexend">Keta</h5>
                    </CardContent>
                </CardActionArea>
            </Card>
            <Card sx={{maxWidth: 275}}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    height="100"
                    image="IMG_5278.jpg"
                    alt="image of boston temp"/>
                    <CardContent>
                        <h5 className="font-lexend">Keta</h5>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    )
}