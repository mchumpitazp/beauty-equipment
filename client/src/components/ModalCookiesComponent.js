import React from "react";
import { Modal, ModalHeader, ModalBody, Row, Col, Button } from "reactstrap";
import { baseUrl } from "../baseUrl";

function ModalCookies () {
    const [cookies, setCookies] = React.useState(true);
    const toggle = () => setCookies(!cookies);

    const acceptCookies = () => {
        document.cookie = "CookieBy=BeautyEquipment; max-age=" + 60*60*24*7;

        if (document.cookie) {
            toggle();
        } else {
            alert("Cookies can't be set. Verify your settings.")
        }
    }

    return (
        <Modal id="modal-cookies" isOpen={cookies} toggle={toggle} centered>
            <ModalHeader toggle={toggle}>Cookies consent</ModalHeader>
            <ModalBody className="d-flex flex-column align-items-center my-2">
                <img src={'/images/frames/cookies.jpg'} alt="cookies" width="100px"/>
                <p className="mx-5 my-3">This website uses cookies in order to offer you the best experience on our site.</p>
                <Row className="mx-5">
                    <Col xs className="d-flex justify-content-center">
                        <Button onClick={acceptCookies}>I understand</Button>
                    </Col>
                    <Col xs className="d-flex justify-content-center">
                        <a href="https://www.termsfeed.com/live/4a336f38-ea7e-491c-975b-766f5f73f016" target="_blank" rel="noreferrer">Learn more</a>
                    </Col>
                </Row>
            </ModalBody>
        </Modal>
    )
}

export default ModalCookies;