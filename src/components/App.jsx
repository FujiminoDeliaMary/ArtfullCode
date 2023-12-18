import React from "react";
import Header from "./Header";
import About from "./About";
import Equipe from "./Equipe";
import Services from "./Services";

const App = () =>{
    return <div className="App">
        <Header />
        
        <About />
        <Equipe />
        <Services />
    </div>
}

export default App;