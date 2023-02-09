import React from "react";
import Header from './HeaderComponent';
import Headline from "./HeadlineComponent";
import About from "./AboutComponent";
import Products from "./ProductsComponent";
import Promo from "./PromoComponent";
import Advantages from "./AdvantagesComponent";
import Scope from "./ScopeComponent";
import Stages from "./StagesComponent";
import Footer from "./FooterComponent";

function Main () {
    return (
        <React.Fragment>
            <Header />
            <Headline />
            <About />
            <Products />
            <Promo />
            <Advantages />
            <Scope />
            <Stages />
            <Footer />
        </React.Fragment>
    );
}

export default Main;