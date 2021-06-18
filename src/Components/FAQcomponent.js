
import React, { Component } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { Card, Button, Col, Row, Container } from 'react-bootstrap';


class FAQ extends Component {

  render() {
    return (


      <Container fluid style={{ backgroundColor: "rgba(192,192,192)" }}>
        <Row className="justify-content-md-center">
          <Col md={11}>
            <div className=" text-center" style={{ backgroundColor: 'white', color: 'rgba(147,58,22)' }} ><br /><br /><br /><br /><br /><br />
              <h4> FAQ</h4>

              <Accordion defaultActiveKey=""><br /><br /><br /><br />
                <Col md={{ span: 6, offset: 3 }}>
                  <Accordion.Toggle className="text-center" style={{ color: 'rgba("147,58,22")' }} as={Card.Body} eventKey="0">
                    How do I add a new question?

                  </Accordion.Toggle>
                  <Accordion.Collapse className="text-center" eventKey="0">
                    <p>        To add a new question go to app settings and press "Manage Questions" button.
                    </p>
                  </Accordion.Collapse>
                </Col><hr style={{ color: 'rgba("147,58,22")' }} />
                <br />
                <Col md={{ span: 6, offset: 3 }}>
                  <Accordion.Toggle className="text-center" style={{ color: 'rgba("147,58,22")' }} as={Card.Body} eventKey="0">
                    Can I insert pictures in my FAQ?

                  </Accordion.Toggle>
                  <Accordion.Collapse className="text-center" eventKey="0">
                    <p style={{ color: 'rgba("147,58,22")' }} >Yes! To add a picture follow these simple steps:<br />
                      1. Enter App Settings<br />
                      2.Click the "Manage Questions" button<br />
                      3.Click on the question you would like to attach a picture to<br />
                      4.When editing your answer, click on the picture icon and then add an image from your library    </p>
                  </Accordion.Collapse>
                </Col><hr style={{ color: 'rgba("147,58,22")' }} />
                <br />
                <Col md={{ span: 6, offset: 3 }}>
                  <Accordion.Toggle className="text-center" style={{ color: 'rgba("147,58,22")' }} as={Card.Body} eventKey="0">
                    Can I insert video in my FAQ?

                  </Accordion.Toggle>
                  <Accordion.Collapse className="text-center" eventKey="0">
                    <p style={{ color: 'rgba("147,58,22")' }} > Yes! Users can add video from YouTube or Vimeo with ease:<br />
                      1.Enter App Settings<br />
                      2.Click the "Manage Questions" button<br />
                      3.Click on the question you would like to attach a video to<br />
                      4.When editing your answer, click on the video icon and then paste the YouTube or Vimeo video URL<br />
                      5.That's it! A thumbnail of your video will appear in answer text box </p>
                  </Accordion.Collapse>
                </Col><hr style={{ color: 'rgba("147,58,22")' }} />
                <br />
                <Col md={{ span: 6, offset: 3 }}>
                  <Accordion.Toggle className="text-center" style={{ color: 'rgba("147,58,22")' }} as={Card.Body} eventKey="0">
                    How do I edit or remove the "FAQ title" ?

                  </Accordion.Toggle>
                  <Accordion.Collapse className="text-center" eventKey="0">
                    <p style={{ color: 'rgba("147,58,22")' }} >  The FAQ title can be adjusted in the settings tab of the App Settings. You can also remove the title by unchecking its checkbox in the settings tab.
                    </p>
                  </Accordion.Collapse>
                </Col><hr style={{ color: 'rgba("147,58,22")' }} />
                <br />

              </Accordion>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default FAQ;

