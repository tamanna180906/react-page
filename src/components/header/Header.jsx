import React from 'react'
import { Navbar,Container,Nav,NavDropdown} from 'react-bootstrap'
import './header.css'
import navi from "../../assets/nav1.png"

function Header (){
  return (
    <Navbar expand="lg" className="bg-main">
    <Container>
      <Navbar.Brand href="#home">
        <img src={navi}></img>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto a-in">
          <Nav.Link className='in' href="#home">Home</Nav.Link>
          <Nav.Link className='in' href="#link">About us</Nav.Link>
          <Nav.Link className='in' href="#link">Features</Nav.Link>
          <Nav.Link className='in' href="#link">Pricing</Nav.Link>
          <Nav.Link className='in' href="#link">FAQ</Nav.Link>
          <Nav.Link className='in' href="#link">Blog</Nav.Link>
        </Nav>
        <div className='btn'>
          <a>Contact us</a>
        </div>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Header