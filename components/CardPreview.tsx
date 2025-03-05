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
        {id:1, title:"Domain-Specific Language Interpreter", img:"proj1.png", description:"A DSL Interpreter built in OCaml that follows a BNF design specification.", tech:["OCaml", "Menhir", "Dune"],
            modalDesc: [
            "Built robust interpreter in OCaml capable of lexically tokenizing and parsing English input according to a defined BNF grammar specification.",
            "Enforced type checking to ensure compliance with static typing rules, with detailed error handling for type mismatches.",
            "Streamlined expression processing by incorporating syntactic desugaring to reduce complex constructs into simpler primitives.",
            "Enhanced type traceability through the integration of type annotations for clearer debugging and better error reporting.",
            "Executed efficient evaluation logic to process expressions accurately, while implementing safeguards for runtime and type-related errors."
          ], github: "https://github.com/yorozoru/DSL-OCaml-Interpreter"},
        {id:2, title:"Second Nature", img:"proj2.png", description:"Data analysis project identifying effective carbon reduction strategies for higher education institutions.", tech:["Python", "Pandas", "Numpy", "Matplotlib"], modalDesc: [
            "Partnered with Second Nature, a nonprofit organization focused on climate action, to analyze carbon emission reduction strategies for higher education institutions.",
            "Conducted comprehensive analysis across 5 distinct datasets to identify and evaluate affiliates exceeding their Carbon Reduction Goals.",
            "Developed 4 data visualization graphs and a comprehensive data sheet to quantitatively assess which institutions were making measurable progress toward sustainability targets.",
            "Identified and documented 2 critical errors in the organization's data collection methodology, enhancing data integrity for future analyses.",
            "Uncovered a significant design flaw in Second Nature's SIMAP (Sustainability Indicator Management & Analysis Platform) reporting tool, leading to improved data collection protocols."
        ], website:"https://docs.google.com/presentation/d/1-iboLBkHuI9A4cHj6iRwdwxnrDSS8tXQgmRv3hrUiS0/"},
        {id:3, title:"Mass. HS Concussions Data Analysis", img:"proj3.png", description:"Data pipeline and visualization of concussion trends across Massachusetts high schools.", tech:["Python", "Pandas", "Seaborn", "Matplotlib", "Nominatim", "Tableau"], modalDesc: [
            "Created Python scripts to automate the extraction of tables and other relevant texts from PDFs using PDFplumber.",
            "Implemented data pipeline to defragment over 800+ pages of text into 1 CSV file, enhancing efficiency and simplifying data processing.",
            "Streamlined data representation by implementing Geopandas for visualizing 236 Massachusetts high schools on interactive maps, enhancing reader engagement with a personalized touch.",
            "Utilized correlation matrices and linear regression techniques to identify trends within datasets.",
            "Applied Nominatim geocoding API and US Census geocoding API to acquire precise geolocation data and validate school locations effectively, facilitating accurate mapping of area median income alongside each high school."
        ], website:"https://docs.google.com/presentation/d/1vvPM-GZLkJTKZKjEPKeH8rYeOsqKd4Ll2EB_uPS1uw8/"},
        {id:4, title:"Bit.ly Clone (Link Shortener)", img:"proj4.png", description:"Shortens Link With User-Provided Alias", tech:["Typescript","Next.js", "React", "MongoDB", "MaterialUI"], github:"https://github.com/yorozoru/Bitly-Clone", website:"https://mp-5-brown.vercel.app/"},
        {id:5, title:"Class Registration Bot", img:"proj5.png", description:"Automated system for monitoring and registering for classes when seats become available.", tech:["Python", "Selenium", "ChromeDriver", "Twilio"], modalDesc: [
            "Engineered a fully automated Python bot to monitor university class registration systems and instantly register for courses when seats become available.",
            "Implemented web scraping using Selenium and ChromeDriver to continuously check class availability across multiple course sections.",
            "Integrated Twilio API to send real-time SMS notifications upon successful registration, improving user experience and confirmation.",
            "Designed resilient error handling mechanisms to manage website changes, network disconnections, and login session timeouts.",
            "Successfully deployed bot for personal use and expanded to help multiple peers secure spots in high-demand courses with limited availability."
        ]},
        {id:6, title:"Keta App", img:"proj6.png", description:"A medication conflict checker that checks if interactions exist to help reduce potential adverse effects.", tech:["React", "Python", "Javascript", "Flask", "Firebase"], modalDesc: [
            "Led 3-member team in developing a drug interaction web application to inform users of prescribed drugged interactions.",
            "Achieved microservices architecture to facilitate continuous development with minimal downtime.",
            "Designed user-friendly web interface for easy sign-up and efficient medication management.",
            "Managed user data, including medications and conflicts, leveraging Firebase’s Realtime Database."], github:"https://github.com/yorozoru/Keta", video:"https://youtu.be/EcB2JuPXxG8"},
        {id:7, title:"Credit Card Fraud Detection AI Model", img:"proj7.png", description:"Machine learning model that achieves 99% accuracy in detecting fraudulent transactions.", tech:["Python", "Pandas", "Scikit-Learn", "Seaborn", "Matplotlib", "Numpy"], modalDesc: [
            "Developed a classification model utilizing Scikit-learn to detect credit card fraud, achieving 99% accuracy rate and F1 score of 91%.",
            "Employed supervised learning techniques, utilizing K-Nearest Neighbors (KNN) as the model and clustering with KMeans and DBSCAN to identify potential features indicative of fraudulent activity.",
            "Conducted feature engineering to uncover hidden patterns, reducing false positives and enhancing overall precision.",
            "Refined cross-validation techniques to ensure model reliability and generalizability across datasets."], github:"https://github.com/yorozoru/Fraud-Detection-Model"},
        {id:8, title:"Throughput and Round-Trip Time App", img:"proj8.png", description:"Application measuring network performance metrics for improved connectivity analysis.", tech:["Java", "Python"], modalDesc: [
            "Developed a cross-language network performance measurement tool using Java for the server component and Python for the client interface.",
            "Implemented multi-threaded Java server architecture capable of handling multiple simultaneous client connections while maintaining precise timing measurements.",
            "Created an intuitive Python client application that sends variable-sized data packets and calculates throughput and round-trip time metrics.",
            "Designed custom networking protocols to ensure accurate time synchronization between client and server for millisecond-precise measurements."], github:"https://github.com/yorozoru/RTT-TPUT"},
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