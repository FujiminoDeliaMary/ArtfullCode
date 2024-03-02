import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Avis from "./Avis";
import Accueil from "../pages/Accueil";
const App = () => {
    return <>
        <BrowserRouter>
            <Layout>

                <Routes>
                    <Route path="/" element={<Accueil />}></Route>
                    <Route path="*" element={<Accueil />}></Route>
                </Routes>
            </Layout>
        </BrowserRouter>


    </>
}

export default App;