import React from 'react';
import { Layout } from 'antd';
import 'antd/dist/antd.css';
import Footer from "./container/layout/footer/footer.js";
import Header from "./container/layout/header/header.js";

const { Content } = Layout;

function App() {
  return (
    <div className="App">
        <Header/>
        <Footer/>
        
       
          {/* <Layout style={{ minHeight: '100vh' }}>
              <Sidebar />
              <Layout>
                <Header />
                <Content style={{ margin: '0 16px' }}>
                  <Login />
                  <Signup />
                  <div>
                  
                  </div>
                </Content>
                <Footer />
              </Layout>
          </Layout> */}
    </div>
  );
}

export default App;
