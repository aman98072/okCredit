import React, { Component, Fragment } from "react";
import 'antd/dist/antd.css';
import './index.css';
import { Carousel, Row, Col, Icon, footer } from 'antd';

class Index extends Component {
    render() {
        return (
            <Fragment>
                <Carousel autoplay className="slider">
                    <div>
                        <img src={process.env.PUBLIC_URL + "images/banner1.jpg"} className="imgDimension" />
                    </div>
                    <div>
                        <img src={process.env.PUBLIC_URL + "images/banner2.jpg"} className="imgDimension" />
                    </div>
                    <div>
                        <img src={process.env.PUBLIC_URL + "images/banner3.jpg"} className="imgDimension" />
                    </div>
                    <div>
                        <img src={process.env.PUBLIC_URL + "images/banner4.jpg"} className="imgDimension" />
                    </div>
                </Carousel>

                <Row>
                    <Col span={24} className="videoSection">
                        <div>
                            <Col offset={2} span={8}>
                                <iframe style={{ width: "100%", height: "300px" }} src="https://www.youtube.com/embed/VOLKJJvfAbg?list=RDVOLKJJvfAbg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </Col>
                            <Col offset={2} span={8}>
                                <h2>How does it work?</h2>
                                <p>Install OkCredit for free Register New Account Add customer</p>
                                <p>Record credit/payment Free SMS to Customer View Account Summary</p>
                            </Col>
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col offset={3} span={18} className="p50"> 
                        <Col span={6}>
                            <Col offset={8} span={16}><Icon type="phone" className="iconStyle"/></Col>
                            <h2>Digital Experience</h2>
                        </Col>
                        <Col span={6}>
                            <Col offset={8} span={16}><Icon type="safety" className="iconStyle"/></Col>
                            <h2>Safe & Secure</h2>
                        </Col>
                        <Col span={6}>
                            <Col offset={8} span={16}><Icon type="customer-service" className="iconStyle"/></Col>
                            <h2>Customer Trust</h2>
                        </Col>
                        <Col span={6}>
                            <Col offset={8} span={16}><Icon type="phone" className="iconStyle"/></Col>
                            <h2>Local Languages</h2>
                        </Col>
                    </Col>
                </Row>

                <Row className="p50">
                    <Col offset={3} span={18}>
                        <h2 className="center">About US</h2>
                        <p className="center">
                            OkCredit is a mobile based solution for small business owners and their customers to enable recording of credit/payment transactions digitally all across the country.</p>
                        <p className="center">
                            OkCredit provides merchants with a simple and reliable means of keeping credit and payments records for their business carried out on credit basis. It digitizes their transactions and records payment reducing the burden of maintaining and accounting paper account books. The ability to provide an on-demand visibility of the merchant’s record to the customers is possible for the first time.
                        </p>
                    </Col>
                </Row>

                <Row className="p50">
                    <Col offset={3} span={18}>
                        <h2 className="center">Contact US</h2>
                        <p className="center">
                            OkCredit is a mobile based solution for small business owners and their customers to enable recording of credit/payment transactions digitally all across the country.
                        </p>
                        <p className="center">
                            OkCredit provides merchants with a simple and reliable means of keeping credit and payments records for their business carried out on credit basis. It digitizes their transactions and records payment reducing the burden of maintaining and accounting paper account books. The ability to provide an on-demand visibility of the merchant’s record to the customers is possible for the first time.
                        </p>
                    </Col>
                </Row>

                <footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</footer>
            </Fragment>
        );
    }
}

export default Index;