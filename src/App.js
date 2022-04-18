import React from 'react'
import Navbar from './layouts/Navbar/Navbar'
//import About from './pages/About/About'
//import Step from './pages/Home-page/Step/Step'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import IndexFooter from './layouts/Footer/IndexFooter'
import Home from './pages/Home-page/Home'
import SignIn from './pages/SignIn'
import WhatCoding from './pages/WhatCoding/WhatCoding'
import AboutUs from './pages/About/AboutUs'
import Curriculum from './pages/Curriculum'
import Glossary from './pages/Glossary'

function App() {
  return (
    
    <Router>
      <Navbar />

     <AboutUs />
     <WhatCoding />

      <Routes>
        <Route path="/" exact element={Home} />
        <Route path="what-coding" element={WhatCoding} />
         <Route path="about-us" element={AboutUs} /> 
         <Route path="curriculum" element={Curriculum} />
         <Route path="glossary" element={Glossary} />
         <Route path="sign-in" element={SignIn} />  
      </Routes>

      <IndexFooter />
    </Router>

  )
}

export default App
