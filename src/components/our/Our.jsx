import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "./our.css"
import our from "../../assets/our.png"

function Our() {
  return (
    <section id='our'>
        <Container>
            <Row>
                <Col lg={5} className='our-main1'>
                <h6>About us</h6>
                <h2>Our designs solve problems</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                     aliqua. Ut enim ad minim veniam.</p>
                </Col>
                <Col lg={5} className='ms-auto our-main2'>
                   <img src={our}></img>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Our