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
import ModalOrder from "./ModalOrderComponent";

function Main () {
    const [modal, setModal] = React.useState(false);
    const [product, setProduct] = React.useState('');

    const toggleModal = () => setModal(!modal);

    return (
        <React.Fragment>
            <Header />
            <Headline toggle={toggleModal} setProduct={setProduct} />
            <About />
            <Products toggle={toggleModal} setProduct={setProduct} />
            <Promo toggle={toggleModal} setProduct={setProduct} />
            <Advantages />
            <Scope />
            <Stages />
            <Footer />
            <ModalOrder modal={modal} toggle={toggleModal} product={product}/>
        </React.Fragment>
    );
}

export default Main;