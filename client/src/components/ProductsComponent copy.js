import React from "react";
import ReactReadMoreReadLess from 'react-read-more-read-less';
import { Button, Col, Container, Row } from "reactstrap";
import { baseUrl } from "../baseUrl";

const products = [
    {
        id: "1",
        title: "filler hyaldew mid",
        name: 'hyaldew',
        image: "/products/hyaldew.jpg",
        price: 4,
        description: "The most popular lip filler from this line.  Delayed biodegradation due to new crosslinking technology and no BDDE! Security at the highest level! Certificates, EU, CFDA, GMP and laboratory test results. International recognition: the drug has been presented in Europe and in 20 countries for more than 4 years! The drug itself is plastic, practically does not give swelling, does not migrate, and is evenly distributed."
    },
    {
        id: "2",
        title: "revi strong",
        name: "revi",
        image: "/products/revi.jpg",
        price: 7,
        description: "Biorevitalizant of prolonged action Revi Strong (Revie Strong) is a protector of the intracellular matrix, which promotes the process of natural renewal and rehydration of the skin. Designed for intradermal microimplantation in the superficial and deep layers of the dermis."
    },
    {
        id: "3",
        title: "stylage s",
        name: "stylage",
        image: "/products/stylage.jpg",
        price: 25,
        description: "Stylage S is a dermal filler, a transparent gel based on stabilized hyaluronic acid. All Stylage preparations use a special, patented IPN-LIKE (Interpenetrating Stabilized Network) cross-linking technology. The concentration of hyaluronic acid in Stylage S is 16 mg/g. Filler Stylage S is designed specifically to fill in fine superficial wrinkles, folds, and skin imperfections. The drug is injected into the superficial and middle layers of the dermis. Ideal for correcting glabellar lines, crow's feet, periorbital area, labial commissures and for the most natural lip correction."
    }, 
    {
        id: "4",
        title: "neuramis deep lidocaine",
        name: "neuramis",
        image: "/products/neuramis.jpg",
        price: 3,
        description: "New generation monophasic dermal filler based on hyaluronic acid. The drug is suitable for deep and medium-expressed wrinkles, giving volume and skin rejuvenation. Neuramis® is manufactured using the unique Neuramis SHAPE TM technology, featuring a 2-step cross-linking process and an enhanced hyaluronic acid purification process, which in turn minimizes the amount of BDDE in cross-linking."
    },
    {
        id: "5",
        title: "kiara reju",
        name: "kiara",
        image: "/products/kiara.jpg",
        price: 7,
        description: "PDRN, a unit of DNA, which is the basic unit for supplying energy to the human body, together with hyaluronic acid (a natural moisturizing factor) is the best solution for skin hydration and repair, which can simultaneously stimulate skin repair and radiance. Skin radiance and regeneration solution supplemented with PDRN and hyaluronic acid. Due to the effect of polydeoxyribonucleotides, which are the material for cell tissue regeneration, on the processes of biosynthesis in the skin (epidermis, dermis), they restore and maintain skin elasticity. Hyaluronic acid, which is a component of the human body, provides moisture, smoothness and shine to the skin, makes it healthy and elastic, and also gives it radiance. Kiara Reju makes skin radiant and reduces micro-wrinkles by filling the skin with water moisturizing + fair skin tone + delicate shine + smooth skin texture. The drug acts not only as a moisturizer, but gives the effect of clean and fair skin, filling the skin with moisture from the inside. Age 35+."
    }
]

function RenderProducts (props) {

    const handleHover = (e) => {
        let parent = e.target;

        if (parent.nodeName === "BUTTON") {
            parent = parent.parentNode;
        }

        const imgRef = parent.querySelector('img');

        if (e.type === 'mouseenter') {
            imgRef.src = baseUrl + '/products/' + imgRef?.alt + "2.jpg";
        } else {
            imgRef.src = baseUrl + '/products/' + imgRef?.alt + "1.jpg";
        }
    };

    const handleClick = (productTitle) => {
        props.toggleModal();
        props.setModalProduct(productTitle.toUpperCase());
    }

    // v1: Scroll until form and focus on product clicked
    /* const orderProduct = (e) => {
        const parent = e.target.parentNode;
        const product = parent.querySelector('h6').querySelector('strong').innerHTML;
        const formProduct = document.querySelectorAll('.formProductInput');
        formProduct.forEach(item => item.value = product)

        const form = document.querySelector('#form');
        form.scrollIntoView({behavior: 'smooth'});      

        form.querySelectorAll('input').forEach(input => input.focus());
    } */

    return (
        <Row>
            { products.map((product, index) => {
                if (index >= props.current && index < (props.current + props.quantity)) {
                    return(
                        <Col key={product.id}
                            onMouseEnter={(e) => handleHover(e)}
                            onMouseLeave={(e) => handleHover(e)}>   
    
                            <figure className="img-container">
                                <img src={`${baseUrl}/products/${product.name}1.jpg`} alt={product.name}/>
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

function Products (props) {
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
        if (current + quantity < products.length) {
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
                products={products}
                current={current}
                quantity={quantity} />
        </Container>
    );
}

export default Products;