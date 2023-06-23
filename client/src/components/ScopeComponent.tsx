import React from "react";
import { Container, Row, Col } from "reactstrap";

interface RenderImagesProps {
    images: string[],
    current: number,
    quantity: number
}

function RenderImages (props: RenderImagesProps) {
    return (
        <Row>
            { props.images.map((image: string, index: number) => {
                if (index >= props.current && index < (props.current + props.quantity)) {
                    return (
                        <Col key={index}>
                            <figure className="img-container">
                                <img src={`/images/scopes/${image}.jpg`} alt={image}/>
                            </figure>
                        </Col>
                    )
                } else { return null; }
            }) }
        </Row>
    )
}

function Scope () {
    const images = ['scope1', 'scope2', 'scope3', 'scope4', 'scope5'];
    const [current, setCurrent] = React.useState(0);
    const [quantity, setQuantity] = React.useState(0);

    React.useLayoutEffect(() => {
        const handleImages = () => {
            if (window.innerWidth < 576) {
                setQuantity(1);
            } else if (window.innerWidth < 992) {
                setQuantity(3);
            } else {
                setQuantity(4);
            }
        }
        handleImages();

        window.addEventListener("resize", handleImages);
        return () => { window.removeEventListener("resize", handleImages); }
    }, []);

    const handleNext = () => {
        if (current + quantity < images.length) {
            setCurrent(current + 1);
        }
    }
    
    const handlePrevious = () => {
        if (current > 0) {
            setCurrent(current - 1);
        }
    }

    return (
        <Container id="scope" className="py-5">
            <header className="d-flex justify-content-between align-items-center mb-3">
                <h4 className="m-0"><strong>Scope of application</strong></h4>
                <div>
                    <i className="btn btn-icon bi-chevron-left"  onClick={handlePrevious}></i>
                    <i className="btn btn-icon bi-chevron-right" onClick={handleNext}></i>
                </div>
            </header>
            <RenderImages images={images} current={current} quantity={quantity}/>
        </Container>
    );
}

export default Scope;