import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';


class Privacy extends Component {

    render() {
        return (
            <Container fluid style={{ backgroundColor: "rgba(192,192,192)" }}>
                <Row className="justify-content-md-center">
                    <Col md={11}>
                        <div className=" text-center" style={{ backgroundColor: 'white', color: 'rgba(147,58,22)' }} ><br /><br /><br /><br /><br /><br />
                            <h5> PRIVACY POLICY</h5><br />
                            <p>I’m a privacy policy section. I’m a great place to inform your customers about how you use, store, and
                                protect their<br /> personal information. Add details such as how you use third-party banking to verify
                                payment, the way you collect<br /> data or when will you contact users after their purchase was completed
                                successfully.<br /><br />
                                Your user’s privacy is of the highest importance to your business, so take the time to write an accurate and
                                detailed<br /> policy. Use straightforward language to gain their trust and make sure they keep coming back
                                to your site!</p><br /><br /><br /><br /><br /><br />
                            <h5 > SAFETY SECURITY</h5><br />
                            <p>I’m a safety and security section. I’m a great place to inform your customers about how you use, store, and
                                protect <br />their personal information. Add details such as how you use third-party banking to verify
                                payment, the way you<br /> collect data or when will you contact users after their purchase was completed
                                successfully.<br /><br />
                                Your user’s security is of the highest importance to your business, so take the time to write an accurate
                                and detailed<br /> policy. Use straightforward language to gain their trust and make sure they keep coming
                                back to your site!</p><br /><br /><br /><br /><br /><br />
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Privacy;