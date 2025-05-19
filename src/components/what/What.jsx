import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "./what.css"
import what from "../../assets/what.png"

function What() {
  return (
    <section id='what'>
      <Container>
        <Row>
          <Col lg={4} className='what-main1'>
          <h2>What our clients say about us</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed.</p>
          </Col>
          <Col lg={7} className='what-main2 ms-auto'>
          <h2>"The best agency we’ve worked with so far. They understand our product and are able to add new 
            features with a great focus."</h2>
            <div className='what-main2-in'>
              <img src={what}></img>
              <div className='what-main2-in1'>
                <h6>Jenny Wilson</h6>
                <p>Vice President</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default What