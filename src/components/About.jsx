import React, { useState } from "react";
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import valuesImg from '../assets/Humaaans - 3 Characters.png'
import { MdKeyboardArrowDown } from "react-icons/md";


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
                            <h3 className="stats__number">600,000+ </h3>
                            <p>lignes de code</p>
                        </div>

                        <div className="stats__div">
                            <h3 className="stats__number">53</h3>
                            <p>membres</p>
                        </div>
                        <div className="stats__div">
                            <h3 className="stats__number">90%</h3>
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
                                        Chez ArtFull Code, chaque ligne de code, chaque élément graphique est méticuleusement choisi et intégré pour transcender le simple site web. Nous créons des œuvres d'art digitales qui résistent à l'épreuve du temps et inspirent une connexion authentique entre votre marque et votre audience.
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
                                        Chez ArtFull Code, chaque ligne de code, chaque élément graphique est méticuleusement choisi et intégré pour transcender le simple site web. Nous créons des œuvres d'art digitales qui résistent à l'épreuve du temps et inspirent une connexion authentique entre votre marque et votre audience.
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
                                        Chez ArtFull Code, chaque ligne de code, chaque élément graphique est méticuleusement choisi et intégré pour transcender le simple site web. 
                                        Nous créons des œuvres d'art digitales qui résistent à l'épreuve du temps et inspirent une connexion authentique entre votre marque et votre audience.
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
                                        Chez ArtFull Code, chaque ligne de code, chaque élément graphique est méticuleusement choisi et intégré pour transcender le simple site web. Nous créons des œuvres d'art digitales qui résistent à l'épreuve du temps et inspirent une connexion authentique entre votre marque et votre audience.
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                        
                    </ul>

                </article>
 


    </section>
}

export default About;