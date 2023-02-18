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
import ModalCookies from "./ModalCookiesComponent";

function Main () {
    const [modal, setModal] = React.useState(false);
    const [modalProduct, setModalProduct] = React.useState('');
    const toggleModal = () => setModal(!modal);

    const checkCookie = document.cookie.indexOf("CookieBy=BeautyEquipment");

    return (
        <React.Fragment>
            <Header />
            <Headline toggleModal={toggleModal} setModalProduct={setModalProduct} />
            <About />
            <Products toggleModal={toggleModal} setModalProduct={setModalProduct} />
            <Promo toggleModal={toggleModal} setModalProduct={setModalProduct} />
            <Advantages />
            <Scope />
            <Stages />
            <Footer />
            <ModalOrder modal={modal} toggle={toggleModal} product={modalProduct}/>

            {
                (checkCookie === -1) ?
                <ModalCookies /> : null 
            }
        </React.Fragment>
    );
}

export default Main;