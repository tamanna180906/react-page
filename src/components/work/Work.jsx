import React from 'react'
import { Col, Container,Row } from 'react-bootstrap'
import "./work.css"
import work1 from "../../assets/work1.png"
import work2 from "../../assets/work2.png"
import work3 from "../../assets/work3.png"
import work4 from "../../assets/work4.png"

function Work() {
  return (
    <section id='work'>
        <Container>
            <Row>
                <Col lg={4}>
                <div className='work-main1'>
                    <h2>How we work</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                    <a href='#'>Get in touch with us</a>                   
                </div>
                </Col>
                <Col lg={7} className='ms-auto'>
                <Row>
                <Col lg={6}>
                <div className='work-main2'>
                <img src={work1}></img>
                <h2>Strategy</h2>
                <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .</p>
                </div>
                </Col>
                <Col lg={6}>
                <div className='work-main2'>
                <img src={work2}></img>
                <h2>Wireframing</h2>
                <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .</p>
                </div>
                </Col>
                <Col lg={6}>
                <div className='work-main2 top-in'>
                <img src={work3}></img>
                <h2>Design</h2>
                <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .</p>
                </div>
                </Col>
                <Col lg={6}>
                <div className='work-main2 top-in'>
                <img src={work4}></img>
                <h2>Development</h2>
                <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .</p>
                </div>
                </Col>
                </Row>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Work