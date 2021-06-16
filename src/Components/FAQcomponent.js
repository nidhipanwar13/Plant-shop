
import React, { Component } from 'react';
import Accordion from 'react-bootstrap/Accordion'


class FAQ extends Component {

    render() {
        return (

            // <div className="container-fluid text-center"><br /><br /><br /><br /><br /><br />
            //     <h4 style="color: rgba(147,58,22); "> FAQ</h4>
            //     <div className="col-md-6 offset-md-3">
            //         <div class="accordion accordion-flush" id="accordionFlushExample">
            //             <div class="accordion-item">
            //                 {/* <!-- <h2 class="accordion-header" id="flush-headingOne"> --> */}
            //                 <button
            //                     class="accordion-button collapsed"
            //                     type="button"
            //                     data-mdb-toggle="collapse"
            //                     data-mdb-target="#flush-collapseOne"
            //                     aria-expanded="false"
            //                     aria-controls="flush-collapseOne"
            //                     style="color: rgba(147,58,22); font-size: large;">
            //                     How do I add a new question?
            //                 </button>
            //                 <div
            //                     id="flush-collapseOne"
            //                     class="accordion-collapse collapse"
            //                     aria-labelledby="flush-headingOne"
            //                     data-mdb-parent="#accordionFlushExample">
            //                     <div class="accordion-body" style="text-align: left; color: rgba(147,58,22);">
            //                         To add a new question go to app settings and press "Manage Questions" button.
            //                     </div>
            //                 </div>
            //             </div><br />
            //             <hr />
            //             <div class="accordion-item">
            //                 <h2 class="accordion-header" id="flush-headingTwo">
            //                     <button
            //                         class="accordion-button collapsed"
            //                         type="button"
            //                         data-mdb-toggle="collapse"
            //                         data-mdb-target="#flush-collapseTwo"
            //                         aria-expanded="false"
            //                         aria-controls="flush-collapseTwo"
            //                         style="color: rgba(147,58,22); font-size: large;"

            //                     >
            //                         Can I insert pictures in my FAQ?
            //                     </button>
            //                 </h2>
            //                 <div
            //                     id="flush-collapseTwo"
            //                     class="accordion-collapse collapse"
            //                     aria-labelledby="flush-headingTwo"
            //                     data-mdb-parent="#accordionFlushExample"
            //                 >
            //                     <div class="accordion-body" style="text-align: left;color: rgba(147,58,22);">
            //                         Yes! To add a picture follow these simple steps:<br />
            //                         1. Enter App Settings<br />
            //                         2.Click the "Manage Questions" button<br />
            //                         3.Click on the question you would like to attach a picture to<br />
            //                         4.When editing your answer, click on the picture icon and then add an image from your library
            //                     </div>
            //                 </div>
            //             </div><br /><hr />
            //             <div class="accordion-item">
            //                 <h2 class="accordion-header" id="flush-headingThree">
            //                     <button
            //                         class="accordion-button collapsed"
            //                         type="button"
            //                         data-mdb-toggle="collapse"
            //                         data-mdb-target="#flush-collapseThree"
            //                         aria-expanded="false"
            //                         aria-controls="flush-collapseThree"
            //                         style="color: rgba(147,58,22); font-size: large;"

            //                     >
            //                         Can I insert a video in my FAQ?
            //                     </button>
            //                 </h2>
            //                 <div
            //                     id="flush-collapseThree"
            //                     class="accordion-collapse collapse"
            //                     aria-labelledby="flush-headingThree"
            //                     data-mdb-parent="#accordionFlushExample">
            //                     <div class="accordion-body" style="text-align: left; color: rgba(147,58,22);">
            //                         Yes! Users can add video from YouTube or Vimeo with ease:<br />
            //                         1.Enter App Settings<br>
            //                             2.Click the "Manage Questions" button<br />
            //                             3.Click on the question you would like to attach a video to<br />
            //                             4.When editing your answer, click on the video icon and then paste the YouTube or Vimeo video URL<br />
            //                             5.That's it! A thumbnail of your video will appear in answer text box
            //                         </div>
            //                     </div>
            //                 </div><br /><hr />
            //                 <div class="accordion-item">
            //                     <h2 class="accordion-header" id="flush-headingThree">
            //                         <button
            //                             class="accordion-button collapsed"
            //                             type="button"
            //                             data-mdb-toggle="collapse"
            //                             data-mdb-target="#flush-collapseThree"
            //                             aria-expanded="false"
            //                             aria-controls="flush-collapseThree"
            //                             style="color: rgba(147,58,22); font-size: large;"

            //                         >
            //                             How do I edit or remove the "FAQ title" ?
            //                         </button>
            //                     </h2>
            //                     <div
            //                         id="flush-collapseThree"
            //                         class="accordion-collapse collapse"
            //                         aria-labelledby="flush-headingThree"
            //                         data-mdb-parent="#accordionFlushExample"
            //                     >
            //                         <div class="accordion-body" style="text-align: left; color: rgba(147,58,22);">
            //                             The FAQ title can be adjusted in the settings tab of the App Settings. You can also remove the title by unchecking its checkbox in the settings tab.              </div>
            //                     </div>
            //                 </div><br />




            //             </div>
            //         </div><br /><br />

                    <Accordion defaultActiveKey="0">
  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="0">
      Click me!
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="0">
      <Card.Body>Hello! I'm the body</Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="1">
      Click me!
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="1">
      <Card.Body>Hello! I'm another body</Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion>


                    );
    }
}

export default FAQ;

