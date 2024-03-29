import React from "react";
import ReactReadMoreReadLess from 'react-read-more-read-less';
import { Button, Col, Container, Row } from "reactstrap";

interface RenderProductsProps {
    products: any,
    toggleModal: () => void,
    setModalProduct: (product: string) => void,
    current: number,
    quantity: number
}

function RenderProducts (props: RenderProductsProps) {
    
    const handleHover = (e: React.MouseEvent<HTMLElement>) => {
        const parent = ((e.target as HTMLElement).nodeName === "BUTTON") ? (e.target as HTMLElement).parentNode : e.target;
        const imgRef = (parent! as HTMLElement).querySelector('img')!;

        if (e.type === 'mouseenter') {
            imgRef.src = imgRef.src.replace('1.', '2.');
        } else {
            imgRef.src = imgRef.src.replace('2.', '1.');
        }
    };

    const handleClick = (productTitle: string) => {
        props.toggleModal();
        props.setModalProduct(productTitle.toUpperCase());
    }

    return (
        <Row>
            { props.products.map((product: any, index: number) => {
                if (index >= props.current && index < (props.current + props.quantity)) {
                    return(
                        <Col key={product._id}
                            onMouseEnter={handleHover}
                            onMouseLeave={handleHover}>   
    
                            <figure className="img-container">
                                <img src={'/images' + product.image} alt={product.name}/>
                            </figure>
                            <h6><strong>{product.title}</strong></h6>
                            <h5><strong>{`€ ${product.price}`}</strong></h5>
                            <p>
                                <ReactReadMoreReadLess
                                    charLimit={120}
                                    readMoreText={"Read more"}
                                    readLessText={"Read less"} >
                                    {product.description}
                                </ReactReadMoreReadLess>
                            </p>
                            <Button onClick={() => handleClick(product.title)}>
                                ORDER PRODUCT
                            </Button>
                        </Col>
                    )
                } else { return null; }
            }) }
        </Row>
    );
}

interface ProductsProps {
    products: any,
    toggleModal: () => void,
    setModalProduct: (product: string) => void
}

function Products (props: ProductsProps) {
    const [current, setCurrent] = React.useState(0);
    const [quantity, setQuantity] = React.useState(1);

    React.useLayoutEffect(() => {
        const handleProducts = () => {
            if (window.innerWidth < 576) {
                setQuantity(1);
            } else if (window.innerWidth < 992) {
                setQuantity(3);
            } else {
                setQuantity(4);
            }
        }
        handleProducts();

        window.addEventListener("resize", handleProducts);
        return () => { window.removeEventListener("resize", handleProducts); }
    }, []);

    const handleNext = () => {
        if (current + quantity < props.products.length) {
            setCurrent(current + 1);
        }
    }
    
    const handlePrevious = () => {
        if (current > 0) {
            setCurrent(current - 1);
        }
    }

    return (
        <Container id="products" className="py-5">
            <header className="d-flex justify-content-between align-items-center mb-3">
                <h4 className="m-0"><strong>The most interesting offers</strong></h4>
                <div>
                    <i className="btn btn-icon bi-chevron-left"  onClick={handlePrevious}></i>
                    <i className="btn btn-icon bi-chevron-right" onClick={handleNext}></i>
                </div>
            </header>
            <RenderProducts 
                {...props}
                products={props.products}
                current={current}
                quantity={quantity} />
        </Container>
    );
}

export default Products;