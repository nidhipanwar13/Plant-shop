import React, { Component } from 'react';

class Cacti extends Component {

    render() {
        return (
<div>
                <div className="container text-center"
                    style={{ backgroundImage: 'url("./image/cacti-bg.jpg")', backgroundAttachment: 'fixed', backgroundSize: 'cover' }}>
                    <br />
                    <a href="./Shop.html" style={{ color: 'white', textDecoration: 'none' }}>Shop
                        All</a><br /><br /><br />
                    <h1 className="display-1 text-center" style={{ color: 'floralwhite' }}>HAVE
                        YOURSELF <br />A CACTUS</h1><br /><br />
                    <p className="text-center" style={{ color: 'white' }}> I'm a paragraph. Click here to add your own text and edit me. It’s
                        easy. Just click “Edit Text” or double <br />click me to add your own content and make changes to the font.
                        I’m a great place for you to tell a <br />story and let your users know a little more about you.</p>
                    <br /><br /><br /><br /><br /><br /><br /><br /><br />
                </div><br /><br />



                <div className="container">
                    <h4 className="text-center" style={{ color: 'black' }}>CACTI</h4><br />
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        <div className="col">
                            <div className="card ">
                                <img src="./image/collection1.jpg" class="card-img-top" alt="..."/>
                                    {/* <div className="overlay">Quick view</div> */}
                </div><br />
                                <a className="link" href="#" style={{ color: 'rgba(147,58,22)', textDecoration: 'none' }}>I'm a product</a><br />
                                <a href="#" style={{ color: 'rgba(147,58,22)', textDecoration: 'none', alignItems: 'center' }}>
                                    $13.50</a><br />
                                <button type="button" class="btn text-center "
                                    style={{ backgroundColor: 'rgba(147,58,22)', color: 'floralwhite' }}><a href="./Cart.html">Add to
                                        Cart </a></button>
                            </div>
                            <div className="col">
                                <div className="card">
                                    <img src="./image/cacti 2.jpg" class="card-img-top" alt="..."/>
                                        {/* <div className="overlay">Quick view</div> */}
                </div><br />
                                    <a className="link" href="#" style={{ color: 'rgba(147,58,22)', textDecoration: 'none' }}>I'm a product</a><br />
                                    <a href="#" style={{ color: 'rgba(147,58,22)', textDecoration: 'none', alignItems: 'center' }}>
                                        $13.50</a><br />
                                    <button type="button" class="btn text-center "
                                        style={{ backgroundColor: 'rgba(147,58,22)', color: 'floralwhite' }}>Add to
                                        Cart</button>
                                </div>
                                <div className="col">
                                    <div className="card">
                                        <img src="./image/cacti 3.jpg" class="card-img-top" alt="..."/>
                                            {/* <div className="overlay">Quick view</div> */}
                </div><br />
                                        <a className="link" href="#" style={{ color: 'rgba(147,58,22)', textDecoration: 'none' }}>I'm a product</a><br />
                                        <a href="#" style={{ color: 'rgba(147,58,22)', textDecoration: 'none', alignItems: 'center' }}>
                                            $13.50</a><br />
                                        <button type="button" class="btn text-center "
                                            style={{ backgroundColor: 'rgba(147,58,22)', color: 'floralwhite' }}>Add to
                                            Cart</button>
                                    </div>
                                </div><br /><br />
                                <div className="row row-cols-1 row-cols-md-3 g-4">
                                    <div className="col">
                                        <div className="card">
                                            <img src="./image/cacti 4.jpg" class="card-img-top" alt="..."/>
                                                {/* <div className="overlay">Quick view</div> */}
                </div><br />
                                            <a className="link" href="#" style={{ color: 'rgba(147,58,22)', textDecoration: 'none' }}>I'm a product</a><br />
                                            <a href="#" style={{ color: 'rgba(147,58,22)', textDecoration: 'none', alignItems: 'center' }}>
                                                $13.50</a><br />
                                            <button type="button" class="btn text-center "
                                                style={{ backgroundColor: 'rgba(147,58,22)', color: 'floralwhite' }}>Add to
                                                Cart</button>
                                        </div>
                                        <div className="col">
                                            <div className="card">
                                                <img src="./image/cacti 5.jpg" class="card-img-top" alt="..."/>
                                                    {/* <div className="overlay">Quick view</div> */}
                </div><br />
                                                <a className="link" href="#" style={{ color: 'rgba(147,58,22)', textDecoration: 'none' }}>I'm a product</a><br />
                                                <a href="#" style={{ color: 'rgba(147,58,22)', textDecoration: 'none', alignItems: 'center' }}>
                                                    $13.50</a><br />
                                                <button type="button" class="btn text-center "
                                                    style={{ backgroundColor: 'rgba(147,58,22)', color: 'floralwhite' }}>Add to
                                                    Cart</button>
                                            </div>
                                            <div className="col">
                                                <div className="card">
                                                    <img src="./image/cacti 6.jpg" class="card-img-top" alt="..."/>
                                                        {/* <div className="overlay">Quick view</div> */}
                </div><br />
                                                    <a className="link" href="#" style={{ color: 'rgba(147,58,22)', textDecoration: 'none' }}>I'm a product</a><br />
                                                    <a href="#" style={{ color: 'rgba(147,58,22)', textDecoration: 'none', alignItems: 'center' }}>
                                                        $13.50</a><br />
                                                    <button type="button" class="btn text-center "
                                                        style={{ backgroundColor: 'rgba(147,58,22)', color: 'floralwhite' }}>Add to
                                                        Cart</button>
                                                </div>
                                            </div>
                                        </div><br />
</div>

                                    );
    }
}

export default Cacti;