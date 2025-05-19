import React from 'react'
import { Col } from 'react-bootstrap'
import { FaArrowRightLong } from "react-icons/fa6";

function BlogReusable({imgb}) {
  return (
    <>
    <Col lg={4} className='blog-main2-in'>
    <img src={imgb}></img>
    <h6>19 Jan 2022</h6>
    <h2>How one Webflow user grew his single person consultancy from $0-100K in 14 months</h2>
    <p>See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract</p>
    <h6>Read More import <FaArrowRightLong/> </h6>
    </Col>
    </>
  )
}

export default BlogReusable