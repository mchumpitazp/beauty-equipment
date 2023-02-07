import React from "react";
import Header from './HeaderComponent';
import Headline from "./HeadlineComponent";
import About from "./AboutComponent";
import Products from "./ProductsComponent";
import Promo from "./PromoComponent";
import Advantages from "./AdvantagesComponent";

function Main () {
    return (
        <React.Fragment>
            <Header />
            <Headline />
            <About />
            <Products />
            <Promo />
            <Advantages />
        </React.Fragment>
    );
}

export default Main;