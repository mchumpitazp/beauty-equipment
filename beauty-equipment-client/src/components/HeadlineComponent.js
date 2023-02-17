import React from 'react';
import MyForm from './FormComponent';
import { Button, Col, Row, Container } from 'reactstrap';
import { baseUrl } from '../baseUrl';
import $ from 'jquery';

const products = [
    {
        id: 1,
        title: 'profhilo (1*20ml)',
        name: 'profhilo',
        image: '/products/profhilo.jpg',
        price: 22,
        description: 'It is the first stabilized hyaluronic acid (HA) product that is made without the use of chemical crosslinkers (BDDE) and is used to remodel skin and treat skin laxity, not just fill in wrinkles. Prevents aging of the skin of the face and body through bioremodeling or direct action on atonic skin. Hybrid hyaluronic acid complexes PROFHILO have a dual activity: moisturizing and stimulating action - the effect of low molecular weight HA (L-HA) HYDRO. creation of a "supporting frame" in the skin - the effect of high molecular weight HA (H-HA) LIFT.'
    },
    {
        id: 2,
        title: 'juvederm ultra',
        name: 'juvederm',
        image: '/products/juvederm.jpg',
        price: 26,
        description: 'The Juvederm Ultra filler is designed to correct moderate wrinkles. It is used exclusively on young skin (25-30 years). The drug is based on a unique substance of hyaluronic acid 3D MATRIX. It is this formula that provides a stable prolonged result - from a year or more.'
    },
    {
        id: 3,
        title: 'juvederm ultra 2',
        name: 'juvederm 2',
        image: '/products/juvederm2.jpg',
        price: 23,
        description: 'The Juvederm Ultra 2 filler is designed to correct moderate wrinkles. It is used exclusively on young skin (25-30 years). The drug is based on a unique substance of hyaluronic acid 3D MATRIX. It is this formula that provides a stable prolonged result - from a year or more.'
    },
    {
        id: 4,
        title: 'juvederm ultra 3',
        name: 'juvederm 3',
        image: '/products/juvederm3.jpg',
        price: 26,
        description: 'The Juvederm Ultra 3 filler is designed to correct moderate wrinkles. It is used exclusively on young skin (25-30 years). The drug is based on a unique substance of hyaluronic acid 3D MATRIX. It is this formula that provides a stable prolonged result - from a year or more.'
    },
    {
        id: 5,
        title: 'juvederm ultra 4',
        name: 'juvederm 4',
        image: '/products/juvederm4.jpg',
        price: 26,
        description: 'The Juvederm Ultra 4 filler is designed to correct moderate wrinkles. It is used exclusively on young skin (25-30 years). The drug is based on a unique substance of hyaluronic acid 3D MATRIX. It is this formula that provides a stable prolonged result - from a year or more.'
    },
    {
        id: 6,
        title: 'juvederm ultra smile',
        name: 'juvederm smile',
        image: '/products/juvederm-smile.jpg',
        price: 23,
        description: 'The Juvederm Ultra Smile filler is designed to correct moderate wrinkles. It is used exclusively on young skin (25-30 years). The drug is based on a unique substance of hyaluronic acid 3D MATRIX. It is this formula that provides a stable prolonged result - from a year or more.'
    }
]

function RenderProduct (props) {

    const handleClick = (e) => {
        const productClicked = $(e.target).siblings('#headline-product-title').eq(0).text();
        props.setModalProduct(productClicked);
        props.toggleModal();
    }

    return (
        <Row className='align-items-center'>
            <Col sm>
                <div className='img-container'> 
                    <img src={baseUrl + props.product.image} alt={props.product.name}/>
                </div>
            </Col>

            <Col sm id='headline-text'>
                <h6 id='headline-product-title'>{props.product.title}</h6>

                <p id='headline-product-des'>{props.product.description}</p>

                <h4 className='mb-3'><strong id='headline-product-price'>€ {props.product.price}</strong> </h4>

                <Button className='d-none d-sm-block' onClick={handleClick}>
                    ORDER PRODUCT
                </Button>

                <Button className='d-block d-sm-none btn-sm' onClick={handleClick}>
                    ORDER PRODUCT
                </Button>
            </Col>
        </Row>
    );  
}

const MemoizedRenderButtons = React.memo (
    function RenderButtons ({ setIndex }) {

        const handleClick = (e) => {
            // Update index
            const newIndex = e.target.getAttribute('data-key');
            setIndex(newIndex);
    
            // Update classes
            $('.btn-headline-line').removeClass('active');
            $(e.target).children('.btn-headline-line').addClass('active');
        }
    
        return (
            <Row className='justify-content-center mt-3'>
                { products.map((product, index) => {
                    return (
                        <div key={index} data-key={index} className='btn-headline mx-2 my-1' onClick={handleClick}>
                            <span className='btn-headline-text'>{product.name}</span>
                            {                    
                                index === 0 ?
                                <span className='btn-headline-line active'></span>
                                :
                                <span className='btn-headline-line'></span>
                            }
                        </div>
                    );
                }) }
            </Row>
        );
    }
)



function Headline (props) {
    const [index, setIndex] = React.useState(0)
    const [product, setProduct] = React.useState(products[index]);

    React.useEffect(() => {
        setProduct(products[index]);
    }, [index])

    return (
        <Container id='headline'>
            <div id='headline-left'>
                <RenderProduct 
                    product={product}
                    toggleModal={props.toggleModal}
                    setModalProduct={props.setModalProduct} />
                <MemoizedRenderButtons  
                    setIndex={setIndex} />
            </div> 

            <div id='headline-right' className='d-none d-lg-block'>
                <img id='bg-headline' src={baseUrl + '/frames/bg-headline.jpg'} alt='bg-headline'/>

                <Container id='headline-form-container'>
                    <div id='headline-form'>
                        <Row>
                            <h5 className='mb-3'><strong>Submit your application</strong></h5>
                        </Row>
                        <MyForm colClassName="col-12" buttonInner="CONTACT WITH ME!"/>
                    </div>
                </Container>
            </div>
        </Container>
    );
}

export default Headline;