import React from 'react';
import { DogProvider } from "./DogCodeContext/DogProvider";
import Navbar from './layouts/Navbar/Navbar'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Footer from './layouts/Footer/Footer'
import Homepage from './pages/Homepage/Homepage'
import SignIn from './pages/SignIn'
import WhatCoding from './pages/WhatCoding/WhatCoding'
import AboutUs from './pages/About/AboutUs'
import Curriculum from './pages/Curriculum/Curriculum'
import Glossary from './pages/Glossary/Glossary'
//import Desafios from "./pages/Desafios";
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import GameScreen from './pages/GameScreen/GameScreen'

function App() {
  return (
    <DogProvider>
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/what-coding" component={WhatCoding} />
        <Route exact path="/about-us" component={AboutUs} />
        <Route exact path="/curriculum" component={Curriculum} />
        <Route exact path="/glossary" component={Glossary} />
        <Route exact path="/sign-in" component={SignIn} />
        <Route exact path="/register" component={Login} />
        <Route exact path="/Register/new" component={Register} />
        <Route exact path="/game-screen" component={GameScreen} />
      </Switch>
      <Footer />
    </Router>
    </DogProvider>
  )
}

export default App
