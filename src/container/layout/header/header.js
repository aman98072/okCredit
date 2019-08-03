import React, { Component } from 'react';
import "./header.css";
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';
import { Row, Col } from 'antd';
import Index from '../../index';
import About from '../../about/about';
import Login from '../../login/login';
import Signup from '../../signup/signup';
import Home from '../../dashboard/dashboard';

class Header extends Component {
    state = {
      apiResponse : ''
    }

    componentWillMount() {
      fetch("http://localhost:3001/api")
        .then(res => res.json())
        .then((result) => {
          this.setState({ apiResponse: result });
        });

      console.log("data 3:", this.state.apiResponse);
    }

    render() {
      console.log("data 3:", this.state.apiResponse);
      return (
        <div>
          <Row className="header">
            <Col span={24} style={{ paddingTop: 20, paddingLeft: 30 }}>
              <Router>
                <Col span={1}>
                  <img src={process.env.PUBLIC_URL + "images/logo.svg"} width="50" height="50" />
                </Col>

                <Col span={4}>
                  <h1>Excel Credit</h1>
                  <p style={{ "marginTop": "-18px" }}><b>Simple. Solid. Paperless</b></p>
                </Col>

                <Col offset={8} span={11}>
                  <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About US</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/register">Register</Link></li>
                  </ul>
                </Col>

                <Col span={24}>
                  <Switch>
                    <Route exact path='/' component={Index} />
                    <Route path='/about' component={About} />
                    <Route path='/login' component={Login} />
                    <Route path='/register' component={Signup} />
                    <Route path='/dashboard' component={Home} />
                  </Switch>
                </Col>
              </Router>
            </Col>
          </Row>
        </div>
      );
    }
  }

  export default Header;
