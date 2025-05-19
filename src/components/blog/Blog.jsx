import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "./blog.css"
import BlogReusable from '../reusable/BlogReusable'
import blog1 from "../../assets/blog1.png"
import blog2 from "../../assets/blog2.png"
import blog3 from "../../assets/blog3.png"

function Blog() {
  return (
    <section id='blog'>
        <Container>
            <Row>
                <Col lg='3' className='blog-main1'>
                <h2>Our blog</h2>
                </Col>
            </Row>
            <Row className='blog-main2'>
              <BlogReusable imgb={blog1}/>    
              <BlogReusable imgb={blog2}/>  
              <BlogReusable imgb={blog3}/>  
            </Row>
        </Container>
    </section>
  )
}

export default Blog