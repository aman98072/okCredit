import React, { Component } from 'react';
import "./header.css";
import URLS from "../../../config/config.js";
import { Row, Col } from 'antd';

class Header extends Component {

  menu = () => {
    let menuData = '';
    let headerMenu = URLS.B_L_header;
    Object.keys(headerMenu).forEach( function(index) {      
      menuData += "<li><h2>" + headerMenu[index].name + "</h2></li>";      
    });
    
    return menuData;
  }

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
                {this.menu()}
                <li><h2>About US</h2></li>
                <li><h2>Contact US</h2></li>
                <li><h2>Login</h2></li>
                <li><h2>Register</h2></li>
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
