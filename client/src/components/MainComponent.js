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
    const [isLoading, setLoading] = React.useState(true);
    const [modal, setModal] = React.useState(false);
    const [modalProduct, setModalProduct] = React.useState('');
    const toggleModal = () => setModal(!modal);

    const checkCookie = document.cookie.indexOf("CookieBy=BeautyEquipment");

    React.useLayoutEffect(() => fetchProducts(), [fetchProducts]);

    React.useEffect(() => {
        if (!products.isLoading) {
            products.products.forEach(p => {
                const img = new Image();
                img.src = '/images' + p.image;

                if (!p.headline) {
                    const img2 = new Image();
                    img2.src = '/images' + p.image.replace('1.', '2.');
                }
            });
            setTimeout(() => setLoading(false), 1000);
        }        
    }, [products.isLoading]);

    React.useEffect(() =>{
        if (!isLoading) {
            document.querySelector('#spinner-container').style.display = 'none';
            document.querySelector('body').style.height = 'auto';
            document.querySelector('html').style.overflowY = 'auto';
        }
    }, [isLoading]);

    if (products.isLoading) {
        return (
            <div id="spinner-container">
                <Spinner type="grow"/>
            </div>
        )
    } else {
        return (
            <React.Fragment>
                <div id="spinner-container">
                    <Spinner type="grow"/>
                </div>
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