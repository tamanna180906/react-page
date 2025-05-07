import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "./list.css"
import { FaArrowRightLong } from "react-icons/fa6";
import pic1 from "../../assets/pic1.png"
import pic2 from "../../assets/pic2.png"
import pic3 from "../../assets/pic3.png"



function List() {
  return (
    <section id='list'>
        <Container>
            <Row className='list-main'>
                <Col lg={5} className='list-main1'>
                <h2>View our projects</h2>
                </Col>
                <Col lg={2} className='ms-auto'>
                <div className='list-main2'>
                    <p>View More</p>
                    <a><FaArrowRightLong/></a>
                </div>
                </Col>
            </Row>
            <Row className='list-down'>
              <Col lg={8}>
              <div className='list-down1'>
                <img src={pic1}></img>
                <div className='img-in'>
                  <h2>Workhub office Webflow Webflow Design</h2>
                  <p>View project</p>
                </div>
              </div>
              </Col>
              <Col lg={4}>
              <div className='list-down2'>
                <img src={pic2}></img>
                <div className='list-down2-in'></div>
              </div>
              <div className='list-down2 two'>
                <img src={pic3}></img>
                <div className='list-down2-in two2'></div>
              </div>
              </Col>
            </Row>
        </Container>
    </section>
  )
}

export default List