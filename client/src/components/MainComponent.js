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
import { Spinner } from "reactstrap";

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
        if (!products.isLoading) {
            document.querySelector('body').style.height = 'auto';
            document.querySelector('#root').style.height = 'auto';
        }        
    }, [products.isLoading]);

    React.useLayoutEffect(() => {
        setTimeout(() => fetchProducts(), 1000);
    }, [fetchProducts]);

    if (products.isLoading) {
        return (
            <div id="spinner-container">
                <Spinner type="grow"/>
            </div>
        )
    } else {
        return (
            <React.Fragment>
                <Header />
                <Headline
                    products={products.products.filter(p => p.headline)}
                    toggleModal={toggleModal} 
                    setModalProduct={setModalProduct} />
                <About />
                <Products 
                    products={products.products.filter(p => !p.headline)}
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
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);