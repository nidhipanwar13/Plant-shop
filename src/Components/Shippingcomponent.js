import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';


class Shipping extends Component {

    render() {
        return (

            <Container fluid style={{ backgroundColor: "rgba(192,192,192)" }}>
                <Row className="justify-content-md-center">
                    <Col md={11}>
                        <div className="text-center" style={{ backgroundColor: 'white', color: 'rgba(147,58,22)' }}>
                            <br /><br /><br /><br /><br /><br />
                            <h5 > SHIPPING POLICY</h5><br />
                            <p>I’m a shipping policy section. I’m a great place to update your customers about your shipping methods,
                                packaging <br />and costs. Use plain, straightforward language to build trust and make sure that your
                                customers stay loyal!</p><br /><br /><br /><br /><br /><br />
                            <h5> RETURN POLICY</h5><br />
                            <p>I’m a return policy section. I’m a great place to let your customers know what to do in case they’ve changed
                                their<br /> mind about their purchase, or if they’re dissatisfied with a product. Having a straightforward
                                refund or exchange <br />policy is a great way to build trust and reassure your customers that they can buy
                                with confidence.</p><br /><br /><br /><br /><br /><br />
                            <h5> PAYMENT METHOD</h5><br />
                            <p>I’m a payment methods section. I’m a great place to give your customers as many details as possible about how
                                <br />they can pay for your stunning products. Make sure your use clear language so they enjoy their online
                                shopping <br />experience and stay loyal!</p><br /><br /><br /><br /><br /><br />
                            <h5> WHOLESALE INQUIRIES</h5><br />
                            <p>I’m a wholesale inquiries section. I’m a great place to inform other retailers about how they can sell your
                                stunning <br /> products. Use plain language and give as much information as possible in order to promote
                                your business and<br /> take it to the next level!</p><br /><br /><br /><br /><br /><br />
                        </div>
                    </Col>
                </Row>
            </Container>

        );
    }
}

export default Shipping;