import React, { Component } from 'react';
import "./header.css";
import { Row, Col } from 'antd';

class Header extends Component {
  render() {
    return (
      <div>
        <Row className="header">
          <Col span={24} style={{paddingTop : 20, paddingLeft : 30}}>
            <Col span={1}>
              <img src={process.env.PUBLIC_URL + "images/logo.svg"} width="50" height="50" />                        
            </Col>
            <Col span={4}>
                <h1>Excel Credit</h1>
                <p style={{"marginTop" : "-18px"}}><b>Simple. Solid. Paperless</b></p>
            </Col>
            <Col offset={8} span={11}>
              <ul>
                <li><h2>About US</h2></li>
                <li><h2>Contact US</h2></li>
              </ul>
            </Col>
          </Col>
        </Row>
        {/* <PageHeader onBack={() => null} title="Header" subTitle="This is a subtitle" /> */}
      </div>
    );
  }
}

export default Header;
