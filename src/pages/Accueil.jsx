import React from "react";
import Header from "../components/Header";
import About from "../components/About";
import Equipe from "../components/Equipe";

import Services from "../components/Services";


const Accueil = () => {

    return <>
        <Header /><About /><Equipe /><Services />
        {/* <Avis /> */}
    </>


}
export default Accueil;