import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { CgProfile } from "react-icons/cg";
import { GiShoppingBag } from "react-icons/gi";


class Header extends Component {

    render() {
        return (
            <div className="body area">

                <Navbar collapseOnSelect expand="lg" fixed="top" variant="dark" style={{ backgroundColor: "rgba(192,192,192)" }}>
                    <div className="container">
                        <Navbar.Brand href="#home" style={{ color: "rgba(147,58,22)" }}><b>PRICKLES & CO.</b></Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{ color: 'rgba(147,58,22)' }} />
                        <Navbar.Collapse id="responsive-navbar-nav" >
                            <Nav className="mr-auto">
                                <NavDropdown title="Shop" id="collasible-nav-dropdown" style={{ color: 'rgba(147,58,22)' }}>
                                    <NavDropdown.Item to="/Cacti" style={{ color: 'rgba(147,58,22)' }} className="text-center">Cacti</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2" style={{ color: 'rgba(147,58,22)' }} className="text-center">Plant</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3" style={{ color: 'rgba(147,58,22)' }} className="text-center">Succulent</NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Link href="#pricing" style={{ color: 'rgba(147,58,22)' }}>About</Nav.Link>
                                <Nav.Link href="#pricing" style={{ color: 'rgba(147,58,22)' }}>FAQ</Nav.Link>
                                <Nav.Link href="#pricing" style={{ color: 'rgba(147,58,22)' }}>Contact</Nav.Link>
                            </Nav>
                            <Nav style={{ color: 'rgba(147,58,22)' }}>
                                <h6 style={{ marginLeft: '3em', marginTop: '10px' }}>We Deliver to Your Doorstep </h6>
                                <Nav.Link href="#pricing" style={{ color: 'rgba(147,58,22)' }}> <CgProfile /></Nav.Link>
                                <Nav.Link href="#pricing" style={{ color: 'rgba(147,58,22)' }}>Log in</Nav.Link>
                                <Nav.Link href="#pricing" style={{ color: 'rgba(147,58,22)' }}> <GiShoppingBag /></Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </div>
                </Navbar>
            </div>

        );
    }
}


export default Header;