import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./common/header/header.js"; 
import Home from "./home/home.js"; 
import Footer from "./common/footer/footer.js"; 

function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
