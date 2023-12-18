import React from "react";
import Footer from "./Footer";


const Layout = (props) => {

    return <>
        <main>
            {props.children}
        </main>
        <Footer />
    </>
}

export default Layout;