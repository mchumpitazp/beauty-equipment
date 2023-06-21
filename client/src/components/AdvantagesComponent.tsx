import React from "react";
import { Container, Row, Col } from "reactstrap";

function Advantages () {
    return (
        <Container id="advantages" className="py-5">
            <h4 className="mb-4"><strong>Company advantages</strong></h4>

            <Row>
                <Col className="col-12 col-sm-4 px-4">
                    <Row className="advantages-inner">
                        <Col className="col-4 col-sm-12">
                            <i className="bi-hand-thumbs-up"></i>
                        </Col>
                        <Col className="col-7 col-sm-12">
                            <h6><strong>PROVE EFFECTIVENESS</strong></h6>
                            <p>All components have scientifically proven effectiveness</p>
                        </Col>
                    </Row>
                </Col>
                <Col className="col-12 col-sm-4 px-4">
                    <Row className="advantages-inner">
                        <Col className="col-4 col-sm-12">
                            <i className="bi-check2-circle"></i>
                        </Col>
                        <Col className="col-7 col-sm-12">
                            <h6><strong>ACTIVE COMPONENTS</strong></h6>
                            <p>High concentration of active components</p>
                        </Col>
                    </Row>
                </Col>
                <Col className="col-12 col-sm-4 px-4">
                    <Row className="advantages-inner">
                        <Col className="col-4 col-sm-12">
                            <i className="bi-bounding-box"></i>
                        </Col>
                        <Col className="col-7 col-sm-12">
                            <h6><strong>MULTIFUNCTIONALITY</strong></h6>
                            <p>One institute product instead of four mass market products</p>
                        </Col>
                    </Row>
                </Col>
            </Row>

        </Container>
    );
}

export default Advantages;