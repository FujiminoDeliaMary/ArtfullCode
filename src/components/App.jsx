import React from "react";
import Header from "./Header";
import About from "./About";
import Equipe from "./Equipe";
import Services from "./Services";
import Footer from "./Footer";

const App = () => {
    return <div className="App">
        <Header />
        
        <About />
        <Equipe />
        <Services />
        <Footer />
    </div>
}

export default App;