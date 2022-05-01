import React from 'react'
import Navbar from './layouts/Navbar/Navbar'
import Home from './pages/Home-page/Home'
import About from './pages/About/About'
import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import IndexFooter from './layouts/Footer/IndexFooter'
import SignIn from './pages/SignIn';
import WhatCoding from './pages/WhatCoding'
import AboutUs from './pages/About/AboutUs'
import Curriculum from './pages/Curriculum/Curriculum'
import Glossary from './pages/Glossary'
import Login from './pages/Login/Login'
import Cadastro from './pages/Cadastro/Cadastro'

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
        <Route exact path="/cadastro" component={Login} />
        <Route exact path="/cadastro/new" component={Cadastro} />
      </Switch>
      <IndexFooter />
    </Router>

  )
}

export default App
