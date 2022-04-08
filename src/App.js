import React from "react";
import './App.css'

import Navbar from "./Layouts/Navbar/Navbar";
import About from './Pages/About/About'
import Team from './Components/Team/Team';
import IndexFooter from './Layouts/Footer/IndexFooter';


function App() {
  return (
    <div className="App">
      <div className="Home">
        <div className="page-header">
            <Navbar />
        </div>
        <div className="page-center">
          <div className="page-center-left">
            <p>
              Seja Bem-vindo ao DogeCode!
              Ambiente feito para quem deseja
              começar a programar.
            </p>
            <button className="button action-button">
              Comece agora!
            </button>
          </div>
          <div>
            {/* <h1>a</h1> */}
          </div>
        </div>
        <About />
        <Team />
        <div className="page-footer">
          <IndexFooter />
        </div>
      </div>
    </div>
  )
}
export default App;