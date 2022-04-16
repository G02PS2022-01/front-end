import React from "react";
import Navbar from "./layouts/Navbar/Navbar";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import IndexFooter from './components/Footer/IndexFooter';
import Home from "./pages/Home";
import SignIn from './pages/SignIn';
import WhatCoding from "./pages/WhatCoding";
import AboutUs from "./pages/AboutUs";


function App() {
  return (
    <Router>
      <Navbar />
          <Routes>
            
            <Route path="/" exact component={Home} />
            <Route path="what-coding" component={WhatCoding} />
            <Route path="about-us" component={AboutUs} />
            <Route path="sign-in" component={SignIn} />
          </Routes>
      
    </Router>

  );
}

export default App;