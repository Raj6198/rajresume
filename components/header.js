import Link from 'next/link'
import Router from 'next/router';
import { Component } from 'react'
import { Navbar, Nav, NavDropdown, Modal } from 'react-bootstrap';

class Header extends Component {
    render() {
        return (
            <div className="row">
                <Navbar expand="lg" fixed="top">
                    <div className="col-12 col-lg-12 d-flex align-items-center justify-content-lg-start justify-content-center p-0">
                        <div className="row w-100">
                            <Navbar.Brand className="col-md-2 col-lg-1 mx-auto d-flex d-lg-inline justify-content-center">
                                <div className="header-content">
                                    <h1>Resume</h1>
                                </div>
                            </Navbar.Brand>
                            <Navbar.Collapse id="basic-navbar-nav" className="col-md-10 col-lg-11 pr-0">
                                <Nav className="mr-auto">
                                    <Nav.Link className=''>My Story</Nav.Link>
                                    <Nav.Link className=''>Contact</Nav.Link>
                                    <Nav.Link className='active'>Welcome! Raj</Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </div>
                    </div>
                </Navbar>
            </div>
        )
    }
}

export default Header;