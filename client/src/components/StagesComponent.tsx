import React from "react";
import { Col, Container, Row, Badge } from "reactstrap";
import MyForm from "./FormComponent";

function Stages () {

    return (
        <React.Fragment>
            <img id="img-stages-top" className='d-none d-sm-block'
                src='/images/frames/bg-curve.jpg' alt="bg-stages-top"/>

            <section id="stages">

                <div id="stages-figure-top" className='d-none d-sm-flex'>
                    <img id="stages-frame" src='/images/frames/stages-frame.png' alt="stages-frame"/>
                </div>

                <Container id="stages-container-top">
                    <Row>
                        <Col className="col-12 col-md-6 col-lg-3">
                            <div className="stages-blur">
                                <h5><Badge>FIRST STEP</Badge></h5>
                                <h6><strong>You apply for a product on our website</strong></h6>
                            </div>
                            
                        </Col>
                        <Col className="col-12 col-md-6 col-lg-3">
                            <div className="stages-blur">
                                <h5><Badge>SECONDS STAGE</Badge></h5>
                                <h6><strong>We will contact you to confirm your order and check availability</strong></h6>
                            </div>
                        </Col>
                        <Col className="col-12 col-md-6 col-lg-3">
                            <div className="stages-blur">
                                <h5><Badge>THIRD STAGE</Badge></h5>
                                <h6><strong>You pay for the order in any way convenient for you</strong></h6>
                            </div>
                        </Col>
                        <Col className="col-12 col-md-6 col-lg-3">
                            <div className="stages-blur">
                                <h5><Badge>FINAL STAGE</Badge></h5>
                                <h6><strong>The collected order is sent to anywhere in the world</strong></h6>
                            </div>
                        </Col>
                    </Row>
                </Container>
                
                <div id="stages-figure-bottom" className='d-none d-sm-flex'>
                    <img id="stages-plant" src='/images/frames/stages-plant.png' alt="stages-plant"/>
                </div>

                <Container id="stages-container-bottom">

                    <div id="stages-content-bottom">
                        <Row>
                            <h5 className='mb-3'><strong>Submit your application</strong></h5>
                        </Row>
                        <MyForm colClassName="col-12 col-md-3"
                                setId={true}
                                initProduct=""
                                buttonInner="CONTACT WITH ME!"/>
                        {/* <Form>
                            <Row className="align-items-center">
                                <Col className="col-12 col-md-3">
                                    <FormGroup>
                                        <Label>Your name</Label>       
                                        <Input type="text"/>            
                                    </FormGroup>
                                </Col>
                                <Col className="col-12 col-md-3">
                                    <FormGroup>
                                        <Label>Email</Label>       
                                        <Input type='text'/>            
                                    </FormGroup>
                                </Col>
                                <Col className="col-12 col-md-3">
                                    <FormGroup>
                                        <Label>Name of Product</Label>       
                                        <Input type='text'/>            
                                    </FormGroup>
                                </Col>
                                <Col className="col-12 col-md-3">
                                    <Button>
                                        CONTACT WITH ME!
                                    </Button>
                                </Col>
                            </Row>
                        </Form> */}
                    </div>
                </Container>

            </section>
        </React.Fragment>
    );
}

export default Stages;