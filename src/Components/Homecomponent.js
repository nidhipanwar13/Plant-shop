import React, { Component } from 'react';
import { GiChestnutLeaf } from "react-icons/gi";
import { Form, Row, Col, Button, Container } from 'react-bootstrap'



class Home extends Component {

    render() {
        return (

            <Container fluid style={{ backgroundColor: "rgba(192,192,192)" }}>
                <Row className="justify-content-md-center">
                    <Col md={11}>
                        <div class="bg-image"
                            style={{ backgroundImage: 'url("./image/cover.jpg")', backgroundAttachment: 'fixed', backgroundSize: 'cover', backgroundColor: "rgba(192,192,192)" }}><br /><br /><br /><br /><br /><br /><br /><br /><br />

                            <div className="d-inline  " style={{ color: 'floralwhite' }}><u>ESTB</u></div>
                            <GiChestnutLeaf style={{ color: 'floralwhite' }} />
                            {/* <i class="fa fa-pagelines" aria-hidden="true" style={{ color: 'floralwhite'}}></i> */}
                            <div className="d-inline " style={{ color: 'floralwhite' }}><u>2023</u></div>
                            <br /><br />
                            <h1 class="display-3" style={{ color: 'floralwhite' }}>PRICKLES & CO</h1>
                            <br />
                            <h6 class="small-heading" style={{ color: 'floralwhite', letterSpacing: '9px', fontSize: 'large' }}>BRING NATURE
                                INDOORS</h6><br /><br />
                            <a class="btn " style={{ fontWeight: '100', backgroundColor: 'rgba(147,58,22)', color: 'floralwhite' }}
                                href="./Shopall" role="button">Shop Now</a>
                            <br /><br /><br /><br /><br /><br /><br /><br /><br />

                        </div><br /><br />


                        {/* <!---- GRID--> */}

                        <div className=" text-center">
                            <div className="row row-cols-1 row-cols-md-3 g-4">
                                <div class="col">
                                    <div className="card h-100"><br />
                                        <a href="#" style={{ color: 'rgba(147,58,22)', fontWeight: '500' }}>CACTI</a><br />
                                        <a className="btn mx-auto"
                                            style={{ fontWeight: '100', backgroundColor: 'rgba(147,58,22)', color: 'floralwhite', width: 'fit-content' }}
                                            href="#" role="button">Shop Collection</a><br /><br />
                                        <img src="./image/collection1.jpg" class="card-img-top" alt="..." />
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="card h-100"><br />
                                        <a href="./Plant.html" style={{ color: 'rgba(147,58,22)', fontWeight: '500' }}>PLANTS</a><br />
                                        <a className="btn mx-auto"
                                            style={{ fontWeight: '100', backgroundColor: 'rgba(147,58,22)', color: 'floralwhite', width: 'fit-content' }}
                                            href="./Plant.html" role="button">Shop Collection</a><br /><br />
                                        <img src="./image/collection2.jpg" class="card-img-top" alt="..." />
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="card h-100"><br />
                                        <a href="./Succulent.html" style={{ color: 'rgba(147,58,22)', fontWeight: '500' }}>SUCCULENT</a><br />
                                        <a className="btn mx-auto"
                                            style={{ fontWeight: '100', backgroundColor: 'rgba(147,58,22)', color: 'floralwhite', width: 'fit-content' }}
                                            href="./Succulent.html" role="button">Shop Collection</a><br /><br />
                                        <img src="./image/collection3.jpg" class="card-img-top" alt="..." />
                                    </div>
                                </div>
                            </div>
                        </div><br /><br />

                        {/* <!---- CONTACT DETAILS--> */}

                        <div id="section2"
                            style={{ backgroundImage: 'url(./image/contact.jpg)', backgroundSize: 'cover', backgroundAttachment: 'fixed' }}>
                            <br /><br /><br /><br />

                            <div className="row">
                                <div className="col-12 col-md-8 offset-md-2"
                                    style={{ backgroundColor: 'rgba(255,255,255,0.7)', alignItems: 'center' }}><br /><br />
                                    <h5 style={{ color: 'rgba(147,58,22)', textAlign: 'center' }}>FOR
                                        SPECIAL REQUEST & ORDERS</h5><br /><br /><br />
                                    <Form>
                                        <Row>
                                            <Col>
                                                <Form.Label style={{ alignItems: 'initial' }}>First Name</Form.Label>
                                                <Form.Control />
                                            </Col>
                                            <Col>
                                                <Form.Label>Last Name</Form.Label>
                                                <Form.Control />
                                            </Col>
                                        </Row>
                                        <Form.Group controlId="formBasicEmail"><br />
                                            <Form.Label>Email</Form.Label>
                                            <Form.Control type="email" />
                                        </Form.Group>
                                        <Form.Group controlId="formBasicPassword"><br />
                                            <Form.Label>Phone</Form.Label>
                                            <Form.Control type="password" />
                                        </Form.Group>
                                        <Form.Group controlId="exampleForm.ControlTextarea1">
                                            <Form.Label>Message</Form.Label>
                                            <Form.Control as="textarea" rows={6} />
                                        </Form.Group>
                                        <Button type="submit" style={{ backgroundColor: 'rgba(147,58,22)', color: 'floralwhite' }} >
                                            Send
                                        </Button>
                                    </Form><br /><br />
                                </div>
                            </div><br /><br /><br /><br />
                        </div>
                    </Col>
                </Row>
            </Container>

        );
    }
}

export default Home;