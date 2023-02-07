import React from "react";
import Header from './HeaderComponent';
import Headline from "./HeadlineComponent";
import About from "./AboutComponent";

function Main () {
    return (
        <React.Fragment>
            <Header />
            <Headline />
            <About />
        </React.Fragment>
    );
}

export default Main;