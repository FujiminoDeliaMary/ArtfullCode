import React from "react";
import Contact from "../pages/Contact";
import Realisation from "../pages/Realisation";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Avis from "./Avis";
import Accueil from "../pages/Accueil";
const App = () => {
    return <>

        {/* <div className="App">
            
           
        </div> */}
        <BrowserRouter>
            <Layout>
                {/* <Header />
                <About />
                <Equipe />
                <Services /> */}
                <Routes>
                    <Route path="/" element={<Accueil />}></Route>
                    <Route path="realisation" element={<Realisation />}></Route>
                    <Route path="contact" element={<Contact />} ></Route>
                    <Route path="*" element={<Avis />} ></Route>
                </Routes>
            </Layout>
        </BrowserRouter>


    </>
}

export default App;