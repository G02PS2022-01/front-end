import React from 'react'
import Navbar from './layouts/Navbar/Navbar'
import About from './pages/About/About'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
//import IndexFooter from './components/Footer/IndexFooter';
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import WhatCoding from './pages/WhatCoding'
import AboutUs from './pages/About/AboutUs'
import Curriculum from './pages/Curriculum'
import Glossary from './pages/Glossary'

function App() {
  return (
    
    <Router>
      <Navbar />
      <About />
      <Routes>
        <Route path="/" exact element={Home} />
        <Route path="what-coding" element={WhatCoding} />
         <Route path="about-us" element={AboutUs} /> 
         <Route path="curriculum" element={Curriculum} />
         <Route path="glossary" element={Glossary} />
         <Route path="sign-in" element={SignIn} />  
      </Routes>
    </Router>

  )
}

export default App
