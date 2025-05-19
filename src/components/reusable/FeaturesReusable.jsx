import React from 'react'
import { Col } from 'react-bootstrap'
import fea1 from "../../assets/fea1.png";

function FeaturesReusable({title,imga}) {
    return (
        <>
            <Col lg={4}>
                <div className='features-main1-in'>
                    <img src={imga}></img>
                    <h2>{title}</h2>
                    <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi.
                        Pellentesque et velit aliquam sed mi. </p>
                </div>
            </Col>
        </>
    )
}

export default FeaturesReusable