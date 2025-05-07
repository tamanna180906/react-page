import React from 'react'
import "./footer.css"
import { Col, Container,Row } from 'react-bootstrap'
import fot from "../../assets/nav1.png"
import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <section id='footer'>
        <Container>
            <Row>
                <Col lg={5}>
                <div className='footer-main1'>
                    <img src={fot}></img>
                    <p>We are always open to discuss your project and improve your online presence.</p>
                </div>
                <div className='footer-main-in'>
                <Row className='footer-main-in1'>
                    <Col lg={4}>
                    <div className='footer-main1-in2'>
                        <h5>Email me at</h5>
                        <h6>contact@website.com</h6>
                    </div>
                    </Col>
                    <Col lg={7} className='ms-auto'>
                    <div className='footer-main1-in2'>
                        <h5>Call us</h5>
                        <h6>0927 6277 28525</h6>
                    </div>
                    </Col>
                </Row>
                </div>
                </Col>
                <Col lg={6} className='ms-auto'>
                <Row>
                    <Col lg={4}>
                    <div className='footer-main2'>
                        <h2>Lets Talk!</h2>
                        <div className='footer-main2-in'>
                            <a href='#'><FaFacebook/></a>
                            <a href='#'><FaTwitter/></a>
                            <a href='#'><FaInstagram/></a>
                            <a href='#'><FaLinkedin/></a>
                        </div>
                    </div>
                    </Col>
                </Row>
                </Col>
            </Row>           
        </Container>
    </section>
  )
}

export default Footer