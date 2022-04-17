import React from 'react'
import Navbar from './layouts/Navbar/Navbar'
import About from './pages/About/About'
import Step from './pages/Home-page/Step/Step'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import IndexFooter from './layouts/Footer/IndexFooter'
import Home from './pages/Home-page/Home'
import SignIn from './pages/SignIn'
import WhatCoding from './pages/WhatCoding'
import AboutUs from './pages/About/AboutUs'

function App() {
  return (
    <Router>
      <Navbar />
      <About />
      <Step />
      <Routes>
        <Route path="/" exact component={Home} />
        <Route path="what-coding" component={WhatCoding} />
        <Route path="about-us" component={AboutUs} />
        <Route path="sign-in" component={SignIn} />
      </Routes>
      <IndexFooter />
    </Router>
  )
}

export default App
