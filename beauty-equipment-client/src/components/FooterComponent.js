import React from "react";
import { Col, Container, Row } from "reactstrap";

function Footer () {

    const footerRef = React.useRef(null);

    React.useEffect(() => {
        const handleFooter = () => {
            if (window.innerWidth < 576) {
                footerRef.current.classList.remove('align-items-start');
                footerRef.current.classList.add('align-items-center');
            } else {
                footerRef.current.classList.remove('align-items-center');
                footerRef.current.classList.add('align-items-start');
            }
        }
        handleFooter();

        window.addEventListener("resize", handleFooter);
        return () => window.removeEventListener("resize", handleFooter);
    }, []);
    
    return (
        <footer>
            <Container className="py-5 px-4">
                <Row>
                    <Col sm className="order-sm-2">
                        <h5 className="mb-2">CONTACT</h5>
                        <div className="d-flex flex-column justify-content-around">
                            <div className="d-flex align-items-center my-1">
                                <i className="bi-geo me-2"></i>
                                <h6 className="m-0">4th Upper Mikhailovsky proezd, 10k2, Moscow, 115419</h6>
                            </div>
                            <div className="d-flex align-items-center my-1">
                                <i className="bi-envelope me-2"></i>
                                <h6 className="m-0">info@be.com</h6>
                            </div>
                            <div className="d-flex align-items-center my-1">
                                <i className="bi-telephone me-2"></i>
                                <h6 className="m-0">8 800 000 00 01</h6>
                            </div>
                        </div>
                    </Col>
                    <div ref={footerRef} className="col order-sm-1 mt-3 d-flex flex-column justify-content-between">
                        <figure className="img-container">
                            <img src="/logo-footer.png" alt="logo-footer"/>
                        </figure>
                        
                        <p className="m-2 align-content-start">Beauty Equipment © 2023 - All rights reserved.</p>
                    </div>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer;