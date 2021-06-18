import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';


class Footer extends Component {

    render() {
        return (
            <Container fluid style={{ backgroundColor: "rgba(192,192,192)" }}>
                <Row className="justify-content-md-center">
                    <Col md={11}>

                        <div className="footer" style={{ backgroundColor: "rgba(192,192,192)" }}>
                            <div style={{ backgroundColor: 'rgba(0,41,41)', color: 'white' }}><br /><br /><br /><br />
                                <div className="row">
                                    <div className=" col-md-3 offset-md-2">
                                        <h5 className="text-center"  >OUR STORE</h5>
                                        <p className="text-center">Address: 500 Terry Francois <br />Street San Francisco, CA 94158 <br /> Phone:
                                            123-456-7890 <br /> Email: info@mysite.com</p><br /><br />
                                    </div>
                                    <div className="col-12 col-md-3 text-center">
                                        <h5 className="text-center" >OPENING HOURS </h5>
                                        <p className="text-center">Mon - Fri: 7am - 10pm <br />Saturday: 8am - 10pm <br />Sunday: 8am - 11pm</p>
                                        <br /><br />
                                    </div>
                                    <div className=" col-12 col-md-3 text-center">
                                        <h5 >HELP</h5>
                                        <a href="/Shipping" style={{ color: 'white' }}><u>Shipping & Returns </u></a><br />
                                        <a href="/Privacy" style={{ color: 'white' }}><u>Privacy Policy</u></a><br />
                                        <a href="/FAQ" style={{ color: 'white' }}><u>FAQ </u></a>
                                    </div>
                                </div><br /><br />
                                <h5 className="text-center">SUBSCRIBE</h5><br /><br />
                                <div className="form row offset-md-4">
                                    <label for="inputPassword" class="col-md-4 form-label">Enter your email here</label><br />
                                </div>
                                <div className="row">
                                    <div className="  col-12 col-md-3 offset-md-4">
                                        <input type="email" class="form-control" style={{ backgroundColor: 'rgba(0,41,41)', color: 'white' }}
                                            id="inputemail" />
                                    </div>&emsp;
                                    <div className="  col-12 col-md-2 ">
                                        <button type="button" class="btn mx-auto"
                                            style={{ backgroundColor: 'white', color: 'rgba(0,41,41)', textAlign: 'center' }}>Subscribe
                                            Now</button>
                                    </div>
                                </div><br />
                                <div className="row">
                                    <div className="  col-sm-2 offset-md-6   ">
                                        <a className="text-light" href="https://www.facebook.com/"><i class="fa fa-facebook"
                                            aria-hidden="true"></i></a>
                                        <a className="text-light" href="https://in.pinterest.com/"><i class="fa fa-pinterest-p"
                                            aria-hidden="true"></i></a>
                                        <a className="text-light" href="https://www.instagram.com/"> <i class="fa fa-instagram"
                                            aria-hidden="true"></i></a>
                                    </div>
                                </div><br /><br /><br /><br />
                            </div><br /><br />

                            <p className="text-center" style={{ color: 'rgba(147,58,22)' }}> © 2023 by Prickles & Co.</p><br />

                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Footer;