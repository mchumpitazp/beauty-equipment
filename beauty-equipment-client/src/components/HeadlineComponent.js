import React from 'react';
import { Button, Col, Container, Row } from 'reactstrap';

function Headline () {
    const [product, setProduct] = React.useState('PROFHILO');

    const handleProduct = (e) => {
        const currentProduct = e.target.querySelector('.custom-btn-text').innerHTML;
        
        if (currentProduct !== product) {
            setProduct(currentProduct);

            document.querySelectorAll('.custom-btn-line').forEach((line) => {
                line.classList.remove('active');
            });

            e.target.querySelector('.custom-btn-line').classList.add('active');

            if (currentProduct === 'PROFHILO') {
                document.querySelector('#img-product').src = '/profhilo.jpg';
                document.querySelector('#img-product').alt = 'profhilo';
                document.querySelector('#headline-product-name').innerHTML = 'PROFHILO (1*20ML)';
                document.querySelector('#headline-product-des').innerHTML = 'It is the first stabilized hyaluronic acid (HA) product that is made without the use of chemical crosslinkers (BDDE) and is used to remodel skin and treat skin laxity, not just fill in wrinkles. Prevents aging of the skin of the face and body through bioremodeling or direct action on atonic skin. Hybrid hyaluronic acid complexes PROFHILO have a dual activity: moisturizing and stimulating action - the effect of low molecular weight HA (L-HA) HYDRO. creation of a "supporting frame" in the skin - the effect of high molecular weight HA (H-HA) LIFT.';
                document.querySelector('#headline-product-price').innerHTML = '$599';
            }
            else {
                document.querySelector('#img-product').src = '/juvederm.png';
                document.querySelector('#img-product').alt = 'juvederm';
                document.querySelector('#headline-product-name').innerHTML = 'JUVEDERM ULTRA 2';
                document.querySelector('#headline-product-des').innerHTML = 'The Juvederm Ultra 2 filler is designed to correct moderate wrinkles. It is used exclusively on young skin (25-30 years). The drug is based on a unique substance of hyaluronic acid 3D MATRIX. It is this formula that provides a stable prolonged result - from a year or more.';
                document.querySelector('#headline-product-price').innerHTML = '$799';
            }
        }
    }

    return (
        <Container id='headline'>
            <div id='headline-left'>
                <Row className='align-items-center'>
                    <Col sm>
                        <div className='img-container'> 
                            <img id='img-product' src='/profhilo.jpg' alt='profhilo'/>
                        </div>
                    </Col>

                    <Col sm id='headline-text'>
                        <h6><strong id='headline-product-name'>PROFHILO (1*20ML)</strong></h6>

                        <p id='headline-product-des'>It is the first stabilized hyaluronic acid (HA) product that is made without the use of chemical crosslinkers (BDDE) and is used to remodel skin and treat skin laxity, not just fill in wrinkles. Prevents aging of the skin of the face and body through bioremodeling or direct action on atonic skin. Hybrid hyaluronic acid complexes PROFHILO have a dual activity: moisturizing and stimulating action - the effect of low molecular weight HA (L-HA) HYDRO. creation of a "supporting frame" in the skin - the effect of high molecular weight HA (H-HA) LIFT.</p>

                        <h4 className='mb-3'><strong id='headline-product-price'>$599</strong> </h4>

                        <Button className='d-none d-sm-block'>
                            ORDER PRODUCT
                        </Button>

                        <Button className='d-block d-sm-none btn-sm'>
                            ORDER PRODUCT
                        </Button>
                    </Col>
                </Row>

                <Row className='justify-content-center mt-3'>
                    <div className='custom-btn me-3' onClick={(e) => handleProduct(e)}>
                        <span className='custom-btn-text'>PROFHILO</span>
                        <span className='custom-btn-line active'></span>
                    </div>

                    <div className='custom-btn ms-3' onClick={(e) => handleProduct(e)}>
                        <span className='custom-btn-text'>JUVEDERM</span>
                        <span className='custom-btn-line'></span>
                    </div>
                </Row>
            </div> 

            <div id='headline-right' className='d-none d-lg-block'>
                <img id='img-bg' src='/bg-headline.png' alt='background-headline'/>
            </div>
        </Container>
    );
}

export default Headline;