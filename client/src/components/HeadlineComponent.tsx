import React from 'react';
import MyForm from './FormComponent';
import { Button, Col, Row, Container } from 'reactstrap';
import $ from 'jquery';

interface RenderProductProps {
    product: any,
    toggleModal: () => void,
    setModalProduct: (product: string) => void
}

function RenderProduct (props: RenderProductProps) {

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        const productClicked = $(e.target).siblings('#headline-product-title').eq(0).text();
        props.setModalProduct(productClicked);
        props.toggleModal();
    }

    return (
        <Row className='align-items-center'>
            <Col sm>
                <div className='img-container'> 
                    <img src={'/images' + props.product.image} alt={props.product.name}/>
                </div>
            </Col>

            <Col sm id='headline-text'>
                <h6 id='headline-product-title'>{props.product.title}</h6>

                <p id='headline-product-des'>{props.product.description}</p>

                <h4 className='mb-3'><strong id='headline-product-price'>€ {props.product.price}</strong> </h4>

                <Button className='d-none d-sm-block' onClick={handleClick}>
                    ORDER PRODUCT
                </Button>

                <Button className='d-block d-sm-none btn-sm' onClick={handleClick}>
                    ORDER PRODUCT
                </Button>
            </Col>
        </Row>
    );  
}

interface RenderButtonsProps {
    setIndex: (index: number) => void,
    products: any
}

const MemoizedRenderButtons = React.memo (
    function RenderButtons (props: RenderButtonsProps) {

        const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
            // Update index
            const newIndex = (e.target as HTMLElement).getAttribute('data-key');
            props.setIndex(parseInt(newIndex!));
    
            // Update classes
            $('.btn-headline-line').removeClass('active');
            $(e.target).children('.btn-headline-line').addClass('active');
        }
    
        return (
            <Row className='justify-content-center mt-3'>
                { props.products.map((product: any, index: number) => {
                    return (
                        <div key={index} data-key={index} className='btn-headline mx-2 my-1' onClick={handleClick}>
                            <span className='btn-headline-text'>{product.name}</span>
                            {                    
                                index === 0 ?
                                <span className='btn-headline-line active'></span>
                                :
                                <span className='btn-headline-line'></span>
                            }
                        </div>
                    );
                }) }
            </Row>
        );
    }
)

interface HeadlineProps {
    products: any,
    toggleModal: () => void,
    setModalProduct: (product: string) => void
}

function Headline (props: HeadlineProps) {
    const [index, setIndex] = React.useState(0);

    return (
        <Container id='headline'>
            <div id='headline-left'>
                <RenderProduct 
                    product={props.products[index]}
                    toggleModal={props.toggleModal}
                    setModalProduct={props.setModalProduct} />
                <MemoizedRenderButtons  
                    setIndex={setIndex}
                    products={props.products} />
            </div> 

            <div id='headline-right' className='d-none d-lg-block'>
                <img id='bg-headline' src='/images/frames/bg-headline.jpg' alt='bg-headline'/>

                <Container id='headline-form-container'>
                    <div id='headline-form'>
                        <Row>
                            <h5 className='mb-3'><strong>Submit your application</strong></h5>
                        </Row>
                        <MyForm colClassName="col-12"
                                setId={false}
                                initProduct=''
                                buttonInner="CONTACT WITH ME!"/>
                    </div>
                </Container>
            </div>
        </Container>
    );
}

export default Headline;