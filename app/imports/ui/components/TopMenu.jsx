import React from 'react';
import { Container, Image, Nav, Navbar } from 'react-bootstrap';

const TopMenu = () => (
  <Container fluid className="py-1" id="topMenu">
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#"><Image src="/images/dukeslogo.png" alt="Duke's Logo" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link href="#">MENUS</Nav.Link>
            <Nav.Link href="#">DUKE</Nav.Link>
            <Nav.Link href="#">SHOP</Nav.Link>
            <Nav.Link href="#">JOIN OUR TEAM</Nav.Link>
            <Nav.Link href="#">CONTACT</Nav.Link>
            <Nav.Link href="#" className="orange">ORDER TAKEOUT & DELIVERY</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </Container>
);

export default TopMenu;
