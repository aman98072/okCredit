import React from 'react';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';
import { Layout } from 'antd';
import 'antd/dist/antd.css';
import Sidebar from "./container/layout/sidebar/sidebar.js";
import Footer from "./container/layout/footer/footer.js";
import Header from "./container/layout/header/header.js";
import Home from "./container/home/home.js";
import About from "./container/about/about.js";
import Dashboard from "./container/dashboard/dashboard.js";
import Login from "./container/login/login.js";
import Signup from "./container/signup/signup.js";
import Index from "./container/index/index.js";

const { Content } = Layout;

function App() {
  return (
    <div className="App">
      {(1) ?
        (
          <div><Header /> <Index /></div>
        )
        :
        (
          <Layout style={{ minHeight: '100vh' }}>
            <Router>
              <Sidebar />
              <Layout>
                <Header />
                <Content style={{ margin: '0 16px' }}>
                  <Login />
                  <Signup />
                  <div>
                    <Switch>
                      {/* <Route path='' component={Dashboard} /> */}
                      <Route path='/dashboard' component={Dashboard} />
                      <Route path='/home' component={Home} />
                      <Route path='/about' component={About} />
                    </Switch>
                  </div>
                </Content>
                <Footer />
              </Layout>
            </Router>
          </Layout>
        )
      }
    </div>
  );
}

export default App;
