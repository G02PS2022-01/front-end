import React from 'react'
import Navbar from './layouts/Navbar/Navbar'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import IndexFooter from './layouts/Footer/IndexFooter'
import Home from './pages/Home-page/Home'
import SignIn from './pages/SignIn';
import WhatCoding from './pages/WhatCoding'
import AboutUs from './pages/About/AboutUs'
import Curriculum from './pages/Curriculum'
import Glossary from './pages/Glossary'
import Desafios from './pages/Desafios';

function App() {
  return (
    
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/what-coding" component={WhatCoding} />
        <Route exact path="/about-us" component={AboutUs} /> 
        <Route exact path="/curriculum" component={Curriculum} />
        <Route exact path="/glossary" component={Glossary} />
        <Route exact path="/sign-in" component={SignIn} />  
        <Route exact path="/desafios" component={Desafios}/>
      </Switch>
      <IndexFooter />
    </Router>

  )
}

export default App
