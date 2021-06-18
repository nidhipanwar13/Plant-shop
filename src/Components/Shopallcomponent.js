import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';


class Shop extends Component {

    render() {
        return (
            <Container fluid style={{ backgroundColor: "rgba(192,192,192)" }}>
                <Row className="justify-content-md-center">
                    <Col md={11}>

                        <div
                            style={{ backgroundImage: 'url(./image/shop-bg.jpg)', backgroundAttachment: 'fixed', backgroundSize: 'cover' }}>
                            <br /><br /><br /><br /><br /><br /><br /><br />
                            <h1 class="display-1 text-center" style={{ color: 'floralwhite' }}>EVERYTHING
                                THAT GROWS<br /> IN OUR GARDEN</h1><br /><br />
                            <p class="text-center" style={{ color: 'white' }}> I'm a paragraph. Click here to add your own text and edit me. It’s
                                easy. Just click “Edit Text” or double <br />click me to add your own content and make changes to the font.
                                I’m a great place for you to tell a <br />story and let your users know a little more about you.</p>
                            <br /><br /><br /><br /><br /><br /><br /><br /><br />
                        </div><br /><br />
                        <h4 class="text-center" style={{ color: 'black' }}>SHOP ALL</h4><br />
                        <div class="row row-cols-1 row-cols-md-3 g-4">
                            <div class="col">
                                <div class="card">
                                    <img src="/image/collection1.jpg" class="card-img-top" alt="..." />
                                </div><br />
                                <a class="link" href="#" style={{ color: 'rgba(147,58,22)', textDecoration: 'none',alignItems: 'center'  }}>I'm a product<br/>$13.50</a><br />

                                <button type="button" class="btn text-center "
                                    style={{ backgroundColor: 'rgba(147,58,22)', color: 'floralwhite' }}>Add to
                                    Cart</button>
                            </div>
                            <div class="col">
                                <div class="card">
                                    <img src="./image/cacti 2.jpg" class="card-img-top" alt="..." />
                                </div><br />
                                <a class="link" href="#" style={{ color: 'rgba(147,58,22)', textDecoration: 'none',alignItems: 'center'  }}>I'm a product<br/>$13.50</a><br />

                                <button type="button" class="btn text-center "
                                    style={{ backgroundColor: 'rgba(147,58,22)', color: 'floralwhite' }}>Add to
                                    Cart</button>
                            </div>
                            <div class="col">
                                <div class="card">
                                    <img src="./image/cacti 3.jpg" class="card-img-top" alt="..." />
                                </div><br />
                                <a class="link" href="#" style={{ color: 'rgba(147,58,22)', textDecoration: 'none',alignItems: 'center'  }}>I'm a product<br/>$13.50</a><br />

                                <button type="button" class="btn text-center "
                                    style={{ backgroundColor: 'rgba(147,58,22)', color: 'floralwhite' }}>Add to
                                    Cart</button>
                            </div>
                        </div><br /><br />
                        <div class="row row-cols-1 row-cols-md-3 g-4">
                            <div class="col">
                                <div class="card">
                                    <img src="./image/cacti 4.jpg" class="card-img-top" alt="..." />
                                </div><br />
                                <a class="link" href="#" style={{ color: 'rgba(147,58,22)', textDecoration: 'none',alignItems: 'center'  }}>I'm a product<br/>$13.50</a><br />
                            
                                <button type="button" class="btn text-center "
                                    style={{ backgroundColor: 'rgba(147,58,22)', color: 'floralwhite' }}>Add to
                                    Cart</button>
                            </div>
                            <div class="col">
                                <div class="card">
                                    <img src="./image/cacti 5.jpg" class="card-img-top" alt="..." />
                                </div><br />
                                <a class="link" href="#" style={{ color: 'rgba(147,58,22)', textDecoration: 'none',alignItems: 'center'  }}>I'm a product<br/>$13.50</a><br />

                                <button type="button" class="btn text-center "
                                    style={{ backgroundColor: 'rgba(147,58,22)', color: 'floralwhite' }}>Add to
                                    Cart</button>
                            </div>
                            <div class="col">
                                <div class="card">
                                    <img src="./image/cacti 6.jpg" class="card-img-top" alt="..." />
                                </div><br />
                                <a class="link" href="#" style={{ color: 'rgba(147,58,22)', textDecoration: 'none',alignItems: 'center'  }}>I'm a product<br/>$13.50</a><br />

                                <button type="button" class="btn text-center "
                                    style={{ backgroundColor: 'rgba(147,58,22)', color: 'floralwhite' }}>Add to
                                    Cart</button>
                            </div>
                        </div><br /><br />
                        <div class="row row-cols-1 row-cols-md-3 g-4">
                            <div class="col">
                                <div class="card">
                                    <img src="./image/plant 1.jpg" class="card-img-top" alt="..." />
                                </div><br />
                                <a class="link" href="#" style={{ color: 'rgba(147,58,22)', textDecoration: 'none',alignItems: 'center'  }}>I'm a product<br/>$13.50</a><br />

                                <button type="button" class="btn text-center "
                                    style={{ backgroundColor: 'rgba(147,58,22)', color: 'floralwhite' }}>Add to
                                    Cart</button>
                            </div>
                            <div class="col">
                                <div class="card">
                                    <img src="./image/plant 2.jpg" class="card-img-top" alt="..." />
                                </div><br />
                                <a class="link" href="#" style={{ color: 'rgba(147,58,22)', textDecoration: 'none',alignItems: 'center'  }}>I'm a product<br/>$13.50</a><br />

                                <button type="button" class="btn text-center "
                                    style={{ backgroundColor: 'rgba(147,58,22)', color: 'floralwhite' }}>Add to
                                    Cart</button>
                            </div>
                            <div class="col">
                                <div class="card">
                                    <img src="./image/plant 3.jpg" class="card-img-top" alt="..." />
                                </div><br />
                                <a class="link" href="#" style={{ color: 'rgba(147,58,22)', textDecoration: 'none',alignItems: 'center'  }}>I'm a product<br/>$13.50</a><br />

                                <button type="button" class="btn text-center "
                                    style={{ backgroundColor: 'rgba(147,58,22)', color: 'floralwhite' }}>Add to
                                    Cart</button>
                            </div>
                        </div><br /><br />
                        <div class="row row-cols-1 row-cols-md-3 g-4">
                            <div class="col">
                                <div class="card">
                                    <img src="./image/plant 4.jpg" class="card-img-top" alt="..." />
                                </div><br />
                                <a class="link" href="#" style={{ color: 'rgba(147,58,22)', textDecoration: 'none',alignItems: 'center'  }}>I'm a product<br/>$13.50</a><br />

                                <button type="button" class="btn text-center "
                                    style={{ backgroundColor: 'rgba(147,58,22)', color: 'floralwhite' }}>Add to
                                    Cart</button>
                            </div>
                            <div class="col">
                                <div class="card">
                                    <img src="./image/plant 5.jpg" class="card-img-top" alt="..." />
                                </div><br />
                                <a class="link" href="#" style={{ color: 'rgba(147,58,22)', textDecoration: 'none',alignItems: 'center'  }}>I'm a product<br/>$13.50</a><br />

                                <button type="button" class="btn text-center "
                                    style={{ backgroundColor: 'rgba(147,58,22)', color: 'floralwhite' }}>Add to
                                    Cart</button>
                            </div>
                            <div class="col">
                                <div class="card">
                                    <img src="./image/plant 6.jpg" class="card-img-top" alt="..." />
                                </div><br />
                                <a class="link" href="#" style={{ color: 'rgba(147,58,22)', textDecoration: 'none',alignItems: 'center'  }}>I'm a product<br/>$13.50</a><br />

                                <button type="button" class="btn text-center "
                                    style={{ backgroundColor: 'rgba(147,58,22)', color: 'floralwhite' }}>Add to
                                    Cart</button>
                            </div>
                        </div><br /><br />
                        <div class="row row-cols-1 row-cols-md-3 g-4">
                            <div class="col">
                                <div class="card">
                                    <img src="./image/sucu 1.jpg" class="card-img-top" alt="..." />
                                </div><br />
                                <a class="link" href="#" style={{ color: 'rgba(147,58,22)', textDecoration: 'none',alignItems: 'center'  }}>I'm a product<br/>$13.50</a><br />

                                <button type="button" class="btn text-center "
                                    style={{ backgroundColor: 'rgba(147,58,22)', color: 'floralwhite' }}>Add to
                                    Cart</button>
                            </div>
                            <div class="col">
                                <div class="card">
                                    <img src="./image/sucu 2.jpg" class="card-img-top" alt="..." />
                                </div><br />
                                <a class="link" href="#" style={{ color: 'rgba(147,58,22)', textDecoration: 'none',alignItems: 'center'  }}>I'm a product<br/>$13.50</a><br />

                                <button type="button" class="btn text-center "
                                    style={{ backgroundColor: 'rgba(147,58,22)', color: 'floralwhite' }}>Add to
                                    Cart</button>
                            </div>
                            <div class="col">
                                <div class="card">
                                    <img src="./image/sucu 3.jpg" class="card-img-top" alt="..." />
                                </div><br />
                                <a class="link" href="#" style={{ color: 'rgba(147,58,22)', textDecoration: 'none',alignItems: 'center'  }}>I'm a product<br/>$13.50</a><br />

                                <button type="button" class="btn text-center "
                                    style={{ backgroundColor: 'rgba(147,58,22)', color: 'floralwhite' }}>Add to
                                    Cart</button>
                            </div>
                        </div><br /><br />
                        <div class="row row-cols-1 row-cols-md-3 g-4">
                            <div class="col">
                                <div class="card">
                                    <img src="./image/sucu 4.jpg" class="card-img-top" alt="..." />
                                </div><br />
                                <a class="link" href="#" style={{ color: 'rgba(147,58,22)', textDecoration: 'none',alignItems: 'center'  }}>I'm a product<br/>$13.50</a><br />

                                <button type="button" class="btn text-center "
                                    style={{ backgroundColor: 'rgba(147,58,22)', color: 'floralwhite' }}>Add to
                                    Cart</button>
                            </div>
                            <div class="col">
                                <div class="card">
                                    <img src="./image/sucu 5.jpg" class="card-img-top" alt="..." />
                                </div><br />
                                <a class="link" href="#" style={{ color: 'rgba(147,58,22)', textDecoration: 'none',alignItems: 'center'  }}>I'm a product<br/>$13.50</a><br />

                                <button type="button" class="btn text-center "
                                    style={{ backgroundColor: 'rgba(147,58,22)', color: 'floralwhite' }}>Add to
                                    Cart</button>
                            </div>
                            <div class="col">
                                <div class="card">
                                    <img src="./image/sucu 6.jpg" class="card-img-top" alt="..." />
                                </div><br />
                                <a class="link" href="#" style={{ color: 'rgba(147,58,22)', textDecoration: 'none',alignItems: 'center'  }}>I'm a product<br/>$13.50</a><br />

                                <button type="button" class="btn text-center "
                                    style={{ backgroundColor: 'rgba(147,58,22)', color: 'floralwhite' }}>Add to
                                    Cart</button>
                            </div>
                        </div><br />
                    </Col>
                </Row>
            </Container >

        );
    }
}

export default Shop;