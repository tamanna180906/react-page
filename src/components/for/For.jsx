import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import for1 from "../../assets/for.png"
import "./for.css"
import { FaArrowRightLong } from "react-icons/fa6";


function For() {
    return (
        <section id='for'>
            <Container>
                <Row>
                    <Col lg={6}>
                        <div className='for-main'>
                            <img src={for1}></img>
                            <div className='for-main-in'>
                                <h2>Building stellar websites for early startups</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6} className='for-main2'>
                        <div className='for-main2-in'>
                            <h2>Send inquiry</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                            <div className='for-main2-input'>
                                <input type='text' placeholder='Your Name'></input>
                                <input type='text' placeholder='Your Name'></input>
                                <input type='text' placeholder='Your Name'></input>
                            </div>
                            <div className='for-main2-btn'>
                                <button>Send an Inquiry</button>
                                <button>Get in touch with us <FaArrowRightLong/> </button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default For