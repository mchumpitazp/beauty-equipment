import React from "react";
import Header from './HeaderComponent';
import Headline from "./HeadlineComponent";
import About from "./AboutComponent";
import Products from "./ProductsComponent";

function Main () {
    return (
        <React.Fragment>
            <Header />
            <Headline />
            <About />
            <Products />
        </React.Fragment>
    );
}

export default Main;