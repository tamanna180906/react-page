import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Accordion from 'react-bootstrap/Accordion';
import "./more.css"

function More() {
    return (
        <section id='more'>
            <Container>
                <Row>
                    <Col lg={3} className='more-main1'>
                        <h2>Frequently asked questions</h2>
                        <p>Contact us for more info</p>
                    </Col>
                    <Col lg={8} className='ms-auto'>
                        <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>
                                    <div className='more-main2'>
                                        <h5>01</h5>
                                        <h6>How much time does it take?</h6>
                                    </div>
                                </Accordion.Header>
                                <Accordion.Body className='more-mainp'>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>
                                    <div className='more-main2'>
                                        <h5>02</h5>
                                        <h6>What is your class naming convention?</h6>
                                    </div>
                                </Accordion.Header>
                                <Accordion.Body className='more-mainp'>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>
                                    <div className='more-main2'>
                                        <h5>03</h5>
                                        <h6>How do you communicate?</h6>
                                    </div>
                                </Accordion.Header>
                                <Accordion.Body className='more-mainp'>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header>
                                    <div className='more-main2'>
                                        <h5>04</h5>
                                        <h6>I have a bigger project. Can you handle it?</h6>
                                    </div>
                                </Accordion.Header>
                                <Accordion.Body className='more-mainp'>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="4">
                                <Accordion.Header>
                                    <div className='more-main2'>
                                        <h5>05</h5>
                                        <h6>What is your class naming convention?</h6>
                                    </div>
                                </Accordion.Header>
                                <Accordion.Body className='more-mainp'>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default More