import React from 'react'
import FeaturesReusable from '../reusable/FeaturesReusable'
import { Col, Container, Row } from 'react-bootstrap'
import './features.css'
import fea1 from "../../assets/fea1.png";
import fea2 from "../../assets/fea2.png";
import fea3 from "../../assets/fea3.png";
import fea4 from "../../assets/fea4.png";
import fea5 from "../../assets/fea5.png";
import fea6 from "../../assets/fea6.png";


function Features() {
    return (
        <section id='features'>
            <Container>
                <Row className=' justify-content-center'>
                    <Col lg={6} className='text-center'>
                        <div className='features-main'>
                            <p>Features</p>
                            <h2>Design that solves problems, one product at a time</h2>
                        </div>
                    </Col>
                </Row>
                <Row className='features-main1'>
                    <FeaturesReusable title="Uses Client First" imga={fea1}/>
                    <FeaturesReusable title="Two Free Revision Round" imga={fea2}/>
                    <FeaturesReusable title="Template Customization" imga={fea3}/>
                    <FeaturesReusable title="24/7 Support" imga={fea4}/>
                    <FeaturesReusable title="Quick Delivery" imga={fea5}/>
                    <FeaturesReusable title="Hands-on approach" imga={fea6}/>
                </Row>
            </Container>
        </section>
    )
}

export default Features