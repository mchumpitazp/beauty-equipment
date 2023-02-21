import React from "react";

// Components
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

// Redux
import { connect } from 'react-redux';
import { fetchProducts } from '../redux/ActionCreators';

const mapStateToProps = state => {
    return { products: state.products }
}

const mapDispatchToProps = (dispatch) => ({
    fetchProducts: () => {dispatch(fetchProducts())}
})

function Main ({ products, fetchProducts }) {
    const [modal, setModal] = React.useState(false);
    const [modalProduct, setModalProduct] = React.useState('');
    const toggleModal = () => setModal(!modal);

    const checkCookie = document.cookie.indexOf("CookieBy=BeautyEquipment");

    React.useLayoutEffect(() => {
        fetchProducts();
    }, [fetchProducts]);

    return (
        <React.Fragment>
            <Header />
            <Headline
                products={products.products.filter(p => p.headline)}
                productsLoading={products.isLoading}
                toggleModal={toggleModal} 
                setModalProduct={setModalProduct} />
            <About />
            <Products 
                products={products.products.filter(p => !p.headline)}
                productsLoading={products.isLoading}
                toggleModal={toggleModal} 
                setModalProduct={setModalProduct} />
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

export default connect(mapStateToProps, mapDispatchToProps)(Main);