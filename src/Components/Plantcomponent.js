import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';


class Plant extends Component {

    render() {
        return (
            <Container fluid style={{ backgroundColor: 'rgba("192,192,192")' }}>
                <Row className="justify-content-md-center">
                    <Col md={11}>

                        <div className=" text-center"
                            style={{ backgroundImage: 'url("./image/plant-bg.jpg")', backgroundAttachment: 'fixed', backgroundSize: 'cover' }}>
                            <br /><br /><br /><br />
                            <a href="./Shopall" style={{ color: 'white', textDecoration: 'none' }}>Shop
                                All</a><br /><br /><br /><br /><br />
                            <h1 className="display-1 text-center" style={{ color: 'floralwhite' }}>THE WORLD
                                NEEDS <br /> MORE PLANTS</h1><br />
                            <p className="text-center" style={{ color: 'white' }}> I'm a paragraph. Click here to add your own text and edit me. It’s
                                easy. Just click “Edit Text” or double <br />click me to add your own content and make changes to the font.
                                I’m a great place for you to tell a <br />story and let your users know a little more about you.</p>
                            <br /><br /><br /><br /><br /><br /><br /><br />
                        </div><br /><br />

                        <div >
                            <h4 className="text-center" style={{ color: 'black' }}>PLANT</h4><br />
                            <div className="row row-cols-1 row-cols-md-3 g-4">
                                <div className="col">
                                    <div className="card ">
                                        <img src="./image/plant 1.jpg" class="card-img-top" alt="..." />
                                        {/* <div className="overlay">Quick view</div> */}
                                    </div><br />
                                    <a className="link" href="#" style={{ color: 'rgba(147,58,22)', textDecoration: 'none' }}>I'm a product</a><br />
                                    <a href="#" style={{ color: 'rgba(147,58,22)', textDecoration: 'none', alignItems: 'center' }}>
                                        $13.50</a><br />
                                    <button type="button" class="btn text-center "
                                        style={{ backgroundColor: 'rgba(147,58,22)', color: 'floralwhite' }}><a style={{ color: 'white', textDecoration: 'none' }} href="./Cart" >Add to
                                        Cart
                                         </a></button>
                                </div>
                                <div className="col">
                                    <div className="card">
                                        <img src="./image/plant 2.jpg" class="card-img-top" alt="..." />
                                        {/* <div className="overlay">Quick view</div> */}
                                    </div><br />
                                    <a className="link" href="#" style={{ color: 'rgba(147,58,22)', textDecoration: 'none' }}>I'm a product</a><br />
                                    <a href="#" style={{ color: 'rgba(147,58,22)', textDecoration: 'none', alignItems: 'center' }}>
                                        $13.50</a><br />
                                    <button type="button" class="btn text-center "
                                        style={{ backgroundColor: 'rgba(147,58,22)', color: 'floralwhite' }}><a style={{ color: 'white', textDecoration: 'none' }} href="./Cart" >Add to
                                        Cart
                                         </a></button>
                                </div>
                                <div className="col">
                                    <div className="card">
                                        <img src="./image/plant 3.jpg" class="card-img-top" alt="..." />
                                        {/* <div className="overlay">Quick view</div> */}
                                    </div><br />
                                    <a className="link" href="#" style={{ color: 'rgba(147,58,22)', textDecoration: 'none' }}>I'm a product</a><br />
                                    <a href="#" style={{ color: 'rgba(147,58,22)', textDecoration: 'none', alignItems: 'center' }}>
                                        $13.50</a><br />
                                    <button type="button" class="btn text-center "
                                        style={{ backgroundColor: 'rgba(147,58,22)', color: 'floralwhite' }}><a style={{ color: 'white', textDecoration: 'none' }} href="./Cart" >Add to
                                        Cart
                                         </a></button>
                                </div>
                            </div><br /><br />
                            <div className="row row-cols-1 row-cols-md-3 g-4">
                                <div className="col">
                                    <div className="card">
                                        <img src="./image/plant 4.jpg" class="card-img-top" alt="..." />
                                        {/* <div className="overlay">Quick view</div> */}
                                    </div><br />
                                    <a className="link" href="#" style={{ color: 'rgba(147,58,22)', textDecoration: 'none' }}>I'm a product</a><br />
                                    <a href="#" style={{ color: 'rgba(147,58,22)', textDecoration: 'none', alignItems: 'center' }}>
                                        $13.50</a><br />
                                    <button type="button" class="btn text-center "
                                        style={{ backgroundColor: 'rgba(147,58,22)', color: 'floralwhite' }}><a style={{ color: 'white', textDecoration: 'none' }} href="./Cart" >Add to
                                        Cart
                                         </a></button>
                                </div>
                                <div className="col">
                                    <div className="card">
                                        <img src="./image/plant 5.jpg" class="card-img-top" alt="..." />
                                        {/* <div className="overlay">Quick view</div> */}
                                    </div><br />
                                    <a className="link" href="#" style={{ color: 'rgba(147,58,22)', textDecoration: 'none' }}>I'm a product</a><br />
                                    <a href="#" style={{ color: 'rgba(147,58,22)', textDecoration: 'none', alignItems: 'center' }}>
                                        $13.50</a><br />
                                    <button type="button" class="btn text-center "
                                        style={{ backgroundColor: 'rgba(147,58,22)', color: 'floralwhite' }}><a style={{ color: 'white', textDecoration: 'none' }} href="./Cart" >Add to
                                        Cart
                                         </a></button>
                                </div>
                                <div className="col">
                                    <div className="card">
                                        <img src="./image/plant 6.jpg" class="card-img-top" alt="..." />
                                        {/* <div className="overlay">Quick view</div> */}
                                    </div><br />
                                    <a className="link" href="#" style={{ color: 'rgba(147,58,22)', textDecoration: 'none' }}>I'm a product</a><br />
                                    <a href="#" style={{ color: 'rgba(147,58,22)', textDecoration: 'none', alignItems: 'center' }}>
                                        $13.50</a><br />
                                    <button type="button" class="btn text-center "
                                        style={{ backgroundColor: 'rgba(147,58,22)', color: 'floralwhite' }}><a style={{ color: 'white', textDecoration: 'none' }} href="./Cart" >Add to
                                        Cart
                                         </a></button>
                                </div>
                            </div>
                        </div><br />
                    </Col>
                </Row>
            </Container>

        );
    }
}

export default Plant;