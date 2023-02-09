import React from "react";
import { Button, Col, Container, Row } from "reactstrap";
import Countdown from "./CountdownComponent";

function Promo () {
    const orderProduct = () => {
        const form = document.querySelector('#form');
        form.scrollIntoView({behavior: 'smooth'});      

        form.querySelectorAll('input').forEach(input => input.click());
        // NOT CLICKING, SOLVE IT 
    }

    return (
        <React.Fragment>
            <img id="img-promo-top" className='d-none d-sm-block'
                src="/bg-promo-top.png" alt="bg-promo-top"/>
            
            <section id="promo">
            
                <div id="promo-bg" className='d-none d-sm-flex'>
                    <img id="promo-frame" src="/promo-frame.png" alt="promo-frame"/>
                    <img id="promo-plant" src="/promo-plant.png" alt="promo-plant"/>
                </div>

                <Container className="px-5">
                    <Row>
                        <Col className="col-12 col-sm-6">
                            <h5><strong>Get 25% off on your first order</strong></h5>
                            <p>Contact us for a discount. Promotion time is limited!</p>
                            <div className="d-flex">
                                <Button onClick={orderProduct}>
                                    ORDER A PRODUCT
                                </Button>
                            </div>
                        </Col>
                        <Col id="promo-time" className="col-12 col-sm-6 text-center mt-3">
                            <h5>TIME LEFT</h5>
                            <Countdown />
                        </Col>
                    </Row>
                </Container>

        </section>
        </React.Fragment>
        
    );
}

export default Promo;