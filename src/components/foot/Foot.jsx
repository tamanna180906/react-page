import React from 'react'
import { Navbar,Nav,Container } from 'react-bootstrap'
import './foot.css'

function Foot() {
  return (
       <Navbar expand="lg" id='foot'>
      <Container>
        <Navbar.Brand href="#home" className='foot-main' >
            <h4>Copyright 2022,Finsweet.com</h4>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
          <Nav.Link className='inf' href="#home">Home</Nav.Link>
          <Nav.Link className='inf' href="#link">About us</Nav.Link>
          <Nav.Link className='inf' href="#link">Features</Nav.Link>
          <Nav.Link className='inf' href="#link">Pricing</Nav.Link>
          <Nav.Link className='inf' href="#link">FAQ</Nav.Link>
          <Nav.Link className='inf' href="#link">Blog</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Foot