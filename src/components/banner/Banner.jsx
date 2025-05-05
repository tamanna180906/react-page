import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "./banner.css"
import ami from "../../assets/banner1.png";

function Banner() {
  return (
    <section id='banner'>
        <Container>
            <Row>
                <Col lg={6}>
                <div className='banner-main'>
                    <h2>Building stellar websites for early startups</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                    <div className='banner-a'>
                        <a href='#'>View our work</a>
                        <a className='a-in' href='#'>View Pricing</a>
                    </div>
                </div>
                </Col>
                <Col lg={6}>
                <div className=' banner-main2'>
                <img src={ami}></img>
                </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Banner