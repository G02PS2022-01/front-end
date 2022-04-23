import React from 'react'
import Navbar from './layouts/Navbar/Navbar'
import Home from './pages/Home-page/Home'
import About from './pages/About/About'
import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import IndexFooter from './layouts/Footer/IndexFooter'
import SignIn from './pages/SignIn';
import WhatCoding from './pages/WhatCoding'
import AboutUs from './pages/About/AboutUs'
import Curriculum from './pages/Curriculum/'
import Glossary from './pages/Glossary'

function App() {
  return (
    
    <Router>
      <Navbar />
      <Curriculum />
      <Home />
      <About />
      <Route>
        <Route path="/" exact component={Home} />
        <Route path="what-coding" component={WhatCoding} />
        <Route path="about-us" component={AboutUs} />
        <Route path="sign-in" component={SignIn} />
      </Route>
      <IndexFooter />
    </Router>

  )
}

export default App
