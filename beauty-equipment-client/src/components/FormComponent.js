import React from "react";
import { Form, Row, Col, FormGroup, Label, Input, Button, Alert, FormFeedback, Spinner } from 'reactstrap';

function MyForm ({colClassName, setId=false, initProduct='', buttonInner}) {
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [product, setProduct] = React.useState('');

    const [nameVal, setNameVal] = React.useState('');
    const [emailVal, setEmailVal] = React.useState('');
    const [productVal, setProductVal] = React.useState('');

    const [success, setSuccess] = React.useState(false);
    const [validation, setValidation] = React.useState(false);
    const [spinnerOpen, setSpinnerOpen] = React.useState(false);

    React.useEffect(() => {
        setProduct(initProduct);
    }, [initProduct]);

    React.useEffect(() => {
        let timeout;

        if (validation) {
            timeout = setTimeout(() => {
                setSpinnerOpen(false);
                setSuccess(true);
                clearInputs();
            }, 800);
        }
        return () => clearTimeout(timeout);
    }, [validation]);

    React.useEffect(() => {
        let timeout;

        if (success) {
            timeout = setTimeout(() => { setSuccess(false); }, 1500);
        }
        return () => clearTimeout(timeout);
    }, [success]);

    const clearInputs = () => {
        setName('');
        setEmail('');
        setProduct('');
    };

    const validateForm = () => {
        let nameTmp = false;
        let emailTmp = false;
        let productTmp = false;

        const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (name.length > 0) {
            nameTmp = true;
            setNameVal(true);
        } else { setNameVal(false); }

        if (emailRegex.test(email)) {
            emailTmp = true;
            setEmailVal(true);
        } else { setEmailVal(false); }

        const productValue = document.querySelector('.formProductInput').value;
        if (productValue !== '') {
            setProduct(productValue);
        }
        if (productValue.length || product.length > 0) {
            productTmp = true;
            setProductVal(true);
        } else { setProductVal(false); }

        return (nameTmp & emailTmp & productTmp);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            setSpinnerOpen(true);
            setValidation(true);
        } else {
            setValidation(false);
        }
    }

    return (
        <Form id={setId? "form" : ""} noValidate onSubmit={handleSubmit}>            
            <Row>
                <Col className={colClassName}>
                    <FormGroup>
                        <Label>Your name *</Label>       
                        <Input type='text' required
                            value={name}
                            onChange={e => setName(e.target.value)}
                            onClick={() => setNameVal(true)}
                            invalid={nameVal===false}/>
                        <FormFeedback>
                            Please provide a name
                        </FormFeedback>
                    </FormGroup>
                </Col>
                <Col className={colClassName}>
                    <FormGroup>
                        <Label>Email *</Label>       
                        <Input type='text' required
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            onClick={() => setEmailVal(true)}
                            invalid={emailVal===false}/>      
                            <FormFeedback>
                                Please provide a valid email
                            </FormFeedback>      
                    </FormGroup>
                </Col>
                <Col className={colClassName}>
                    <FormGroup>
                        <Label>Name of Product *</Label>       
                        <Input className='formProductInput'
                            type='text' required
                            value={product}
                            onChange={e => setProduct(e.target.value)}
                            onClick={() => setProductVal(true)}
                            invalid={productVal===false}/>
                        <FormFeedback>
                            Please provide a product
                        </FormFeedback>
                    </FormGroup>
                </Col>
                <Col className="mb-2">
                    {
                        spinnerOpen &&
                        <div className='d-flex justify-content-center my-2'>
                            <Spinner type='grow' style={{backgroundColor: '#DD3450'}}>
                                Loading ...
                            </Spinner>
                        </div>
                    }

                    <Alert isOpen={success} className='my-3 py-2'>
                        <h6 className='text-center m-0' style={{fontSize: '0.75rem'}}>Thank you!</h6>
                    </Alert>

                    <Button onClick={(e) => handleSubmit(e)}>
                        {buttonInner}
                    </Button>
                </Col>
                <Col className="col-12">
                    <p><strong>* Required</strong></p>
                </Col>
            </Row>
        </Form>
    )
}

export default MyForm;