import React, { useState } from "react";
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import valuesImg from '../assets/Humaaans - 3 Characters.png'
import { MdKeyboardArrowDown } from "react-icons/md";
import CountUp from 'react-countup';


const About = () => {

 
    return <section  className="presentation" id="about">
                <article className="about">
                    <div className="infos">
                        <h2 className="about__title">Notre Agence</h2>
                        <p>
                            ArtFull Code est une <span>agence web</span> basé sur la conception de
                            site <span>e-learning</span>, <span>vitrine</span> et
                            <span> e-commerce</span>.
                        </p><br></br>
                        <p className="about__content--justify">
                            Pour les entreprises cherchant à établir leur présence en ligne, notre équipe d'artisans numériques développe des sites vitrines qui sont bien plus que des pages web. Ce sont des reflets numériques de votre essence, capturant l'essence de votre marque et créant des interactions significatives avec votre audience.
                            <br></br><br></br>
                            Chez ArtFull Code, chaque ligne de code, chaque élément graphique est méticuleusement choisi et intégré pour transcender le simple site web. Nous créons des œuvres d'art digitales qui résistent à l'épreuve du temps et inspirent une connexion authentique entre votre marque et votre audience.
                        </p>
                    </div>


                    <div className="stats">
                        <div className="stats__div">
                            <h3 className="stats__number"><CountUp start={0} end={600000} duration={4} /> </h3>
                            <p>lignes de code</p>
                        </div>

                        <div className="stats__div">
                            <h3 className="stats__number"><CountUp start={0} end={53} duration={4} /></h3>
                            <p>membres</p>
                        </div>
                        <div className="stats__div">
                            <h3 className="stats__number"><CountUp start={0} end={90} duration={4} />%</h3>
                            <p>de satisfaction</p>
                        </div>
                    </div>
                </article>
                <article className="values">
                    <div className="values__presentation">
                           <h2 className="values__title">Nos valeurs</h2>
                           <img src={valuesImg} alt="nos valeurs" className="values__img"/>
                    </div>
                 
                  
                        <ul className="values__list">
                                <Accordion className="values__item">
                                    <AccordionSummary
                                        expandIcon={<MdKeyboardArrowDown size={25}/>}
                                        aria-controls="panel2-content"
                                        id="panel2-header"
                                 
                                        >
                                        <Typography  className="title">Communication</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography className="details">
                                        Chez ArtFull Code, nous plaçons la communication au cœur de notre processus créatif. Nous comprenons que l'établissement d'un dialogue ouvert et honnête entre nos équipes et nos clients est essentiel pour transformer une vision en réalité digitale. Notre approche repose sur l'écoute active, permettant de capturer l'essence de votre marque et de la transmettre à travers chaque aspect de votre site web. Nous croyons que c'est en parlant le même langage que nous pouvons créer des connexions durables et significatives.
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>

                                <Accordion className="values__item">
                                    <AccordionSummary
                                        expandIcon={<MdKeyboardArrowDown size={25}/>}
                                        aria-controls="panel2-content"
                                        id="panel2-header"
                                     
                                        >
                                        <Typography className="title">Créativité</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography className="details">
                                        La créativité est le pilier de notre identité chez ArtFull Code. Nous embrassons l'innovation et l'originalité, cherchant constamment à repousser les limites de ce qui est possible dans le développement web. Notre équipe est composée de penseurs créatifs qui intègrent une perspective artistique unique dans chaque projet, garantissant que votre site se démarque non seulement techniquement, mais aussi esthétiquement. Nous ne nous contentons pas de créer des sites web; nous forgeons des expériences digitales immersives qui captivent et engagent.
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>

                                <Accordion className="values__item">
                                    <AccordionSummary
                                        expandIcon={<MdKeyboardArrowDown size={25}/>}
                                        aria-controls="panel2-content"
                                        id="panel2-header"
                                       
                                        >
                                        <Typography  className="title">Sois le client</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography  className="details">
                                        "Sois le client" incarne notre philosophie centrée sur l'utilisateur chez ArtFull Code. Cette approche empathique nous guide à travers chaque décision de conception et de développement, nous assurant que nous répondons aux besoins réels de vos utilisateurs. En nous mettant à la place du client, nous pouvons anticiper les attentes et concevoir des solutions qui améliorent l'expérience utilisateur, augmentent l'engagement et favorisent la fidélité à la marque. Notre objectif est de créer des sites web qui ne se contentent pas de satisfaire les visiteurs, mais de les émerveiller.
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>

                                <Accordion className="values__item">
                                    <AccordionSummary
                                        expandIcon={<MdKeyboardArrowDown size={25}/>}
                                        aria-controls="panel2-content"
                                        id="panel2-header"
                                        
                                        >
                                        <Typography className="title">ArtfullCode</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography className="details">
                                        ArtFull Code est plus qu'un nom; c'est notre engagement envers l'excellence dans la fusion de l'art et de la technologie. Chaque projet est une toile où nous combinons des codes précis avec une conception visuelle impressionnante pour créer des sites web qui sont des chefs-d'œuvre numériques. Nous croyons que chaque pixel compte et que chaque ligne de code est une opportunité d'innover. Chez ArtFull Code, nous ne construisons pas simplement des sites web; nous sculptons des expériences digitales qui racontent l'histoire de votre marque de manière captivante et mémorable.
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                        
                    </ul>

                </article>
 


    </section>
}

export default About;