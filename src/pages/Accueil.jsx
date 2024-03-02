import React from "react";
import Header from "../components/Header";
import About from "../components/About";
import Equipe from "../components/Equipe";
import Avis from "../components/Avis";
import Services from "../components/Services";
import Realisation from "../components/Realisation";
import Contact from "../components/Contact";


const Accueil = () => {

    return <>
        <Header />
        <About />
        <Equipe />
        <Services />
        <Realisation />
        <Avis />
        <Contact />
    </>


}
export default Accueil;