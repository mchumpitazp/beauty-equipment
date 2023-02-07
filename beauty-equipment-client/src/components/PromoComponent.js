import React from "react";
import { Button, Col, Container, Row } from "reactstrap";

function Promo () {

    return (
        <React.Fragment>
            <img id="img-promo-top" src="/bg-promo-top.png" alt="bg-promo-top"/>
            
            <section id="promo">
            
                <figure>
                    <img id="promo-frame" src="/promo-frame.png" alt="promo-frame"/>
                    <img id="promo-plant" src="/promo-plant.png" alt="promo-plant"/>
                </figure>

                <Container className="px-5">
                    <Row>
                        <Col className="col-12 col-sm-6">
                            <h5><strong>Get 25% off on your first order</strong></h5>
                            <p>Contact us for a discount. Promotion time is limited!</p>
                            <Button>
                                ORDER A PRODUCT
                            </Button>
                        </Col>
                        <Col id="promo-time" className="col-12 col-sm-6 text-center">
                            <h5>TIME LEFT</h5>
                            <span>12 days 08:12:23</span>
                        </Col>
                    </Row>
                </Container>

        </section>
        </React.Fragment>
        
    );
}

export default Promo;