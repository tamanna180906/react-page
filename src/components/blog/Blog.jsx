import React from 'react'
import { Container, Col, Row,Card,Button } from 'react-bootstrap'
import "./blog.css"
import list1 from "../../assets/list1.png"
import list2 from "../../assets/list2.png"
import list3 from "../../assets/list3.png"


function Blog() {
    return (
        <section id='blog'>
            <Container className='blog-main'>
                <h2>Our blog</h2>
                <Row className='blog-main1'>
                    <Col lg={4}>
                        <Card>
                            <Card.Img variant="top" src={list1}/>
                            <Card.Body className='blog-main2'>
                                <p>19 Jan 2022</p>
                                <Card.Title>
                                  <h2>How one Webflow user grew his single person consultancy from $0-100K in 14 months</h2>  
                                </Card.Title>
                                <Card.Text>
                                    <h6>See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract</h6>
                                </Card.Text>
                                <Button variant="primary">Read More</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={4}>
                        <Card>
                            <Card.Img variant="top" src={list2}/>
                            <Card.Body className='blog-main2'>
                                <p>19 Jan 2022</p>
                                <Card.Title>
                                  <h2>How one Webflow user grew his single person consultancy from $0-100K in 14 months</h2>  
                                </Card.Title>
                                <Card.Text>
                                    <h6>See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract</h6>
                                </Card.Text>
                                <Button variant="primary">Read More</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={4}>
                        <Card>
                            <Card.Img variant="top" src={list3}/>
                            <Card.Body className='blog-main2'>
                                <p>19 Jan 2022</p>
                                <Card.Title>
                                  <h2>How one Webflow user grew his single person consultancy from $0-100K in 14 months</h2>  
                                </Card.Title>
                                <Card.Text>
                                    <h6>See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract</h6>
                                </Card.Text>
                                <Button variant="primary">Read More</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Blog