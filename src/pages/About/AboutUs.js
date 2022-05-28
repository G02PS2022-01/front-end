import React from 'react'
import './AboutUs.css'
import '../../assets/icon/style.css'

import amauri from '../../assets/img/amauri.png'
import antonio from '../../assets/img/antonio.jpeg'
import vini from '../../assets/img/vini.jpeg'
import wanderson from '../../assets/img/wanderson.jpg'
import gustavo from '../../assets/img/gustavo.jpeg'
import marcos from '../../assets/img/marcos.jpg'
import nicolas from '../../assets/img/nicolas.jpeg'


export default function AboutUs() {
  return (
  
  <section className="section" id="aboutus">
      <div className="container grid">
        <div className="text">

          <h2 className="title">Saiba um pouco sobre nós</h2>
          <p>
            O DogCode foi criado por grupo de alunos do curso de Ciência da
            computação da Universidade Federal do Tocantins , para a materia de
            Projeto de Sistemas. Ao perceber que a programação está se tornando
            uma habilidade essencial, queremos possibilitar seus primeiros
            passos.
          </p>
          <br />
          <p>
            Criamos o DogCode para ajudar pessoas como você a ingressar no mundo
            da programação de maneira fácil e divertida. Esperamos que você
            goste e que ajude você a embarcar ou continuar sua jornada
            aprendendo a programar.
          </p>
        </div>

        <div className="members">
          <div className="member grid">
            <div className="perfil">
              <img src={antonio} />
            </div>
            <div>
              <p className="subtitle">Antônio Arieiro</p>
              <p className="occupation">back-end developer</p>
            </div>
            <div className="social grid">
              <a target="_blank" href="https://www.instagram.com/a.arieirojr/"><i className="icon-instagram"></i></a>
              <a target="_blank" href="https://www.linkedin.com/in/antonio-arieiro-50a9301b2/"><i className="icon-linkedin"></i></a>
              <a target="_blank" href="https://github.com/antonioarieiro"><i className="icon-github"></i></a>
            </div>
          </div>
          <div className="member grid">
            <div className="perfil">
              <img src={amauri} />
            </div>
            <div>
              <p className="subtitle">Amauri Junior</p>
              <p className="occupation">front-end developer</p>
            </div>
            <div className="social grid">
              <a target="_blank" href="https://www.instagram.com/amaur1mmj/"><i className="icon-instagram"></i></a>
              <a target="_blank" href="#"><i className="icon-linkedin"></i></a>
              <a target="_blank" href="https://github.com/amaur1mmj"><i className="icon-github"></i></a>
            </div>
          </div>
          
          <div className="member grid">
            <div className="perfil">
              <img src={gustavo} />
            </div>
            <div>
              <p className="subtitle">Gustavo Cascaes</p>
              <p className="occupation">front-end developer</p>
            </div>
            <div className="social grid">
              <a target="_blank" href="#"><i className="icon-instagram"></i></a>
              <a target="_blank" href="#"><i className="icon-linkedin"></i></a>
              <a target="_blank" href="https://github.com/Zokyn"><i className="icon-github"></i></a>
            </div>
          </div>
          <div className="member grid">
            <div className="perfil">
              <img src={marcos}/>
            </div>
            <div>
              <p className="subtitle">Marcos Costa</p>
              <p className="occupation">front-end developer</p>
            </div>
            <div className="social grid">
              <a target="_blank" href="https://www.instagram.com/marcos.costafilho/"><i className="icon-instagram"></i></a>
              <a target="_blank" href="https://www.linkedin.com/in/marcos-antonio-costa-filho-32805b226"><i className="icon-linkedin"></i></a>
              <a target="_blank" href="https://github.com/marcos1079"><i className="icon-github"></i></a>
            </div>
          </div>
          <div className="member grid">
            <div className="perfil">
              <img src={nicolas} />
            </div>
            <div>
              <p className="subtitle">Nicolas Ribeiro</p>
              <p className="occupation">front-end developer</p>
            </div>
            <div className="social grid">
              <a target="_blank" href="https://www.instagram.com/_nicolasarthur_/"><i className="icon-instagram"></i></a>
              <a target="_blank" href="#"><i className="icon-linkedin"></i></a>
              <a target="_blank" href="https://github.com/nicolasarthur10"><i className="icon-github"></i></a>
            </div>
          </div>
          <div className="member grid">
            <div className="perfil">
              <img src={vini} />
            </div>
            <div>
              <p className="subtitle">Vinicius Oliveira</p>
              <p className="occupation">fullstack developer</p>
            </div>
            <div className="social grid">
              <a target="_blank" href="https://www.instagram.com/_viniciusoliveira0101/"><i className="icon-instagram"></i></a>
              <a target="_blank" href="https://www.linkedin.com/in/vinicius-de-oliveira-oliveira/"><i className="icon-linkedin"></i></a>
              <a target="_blank" href="https://github.com/vinnieoh"><i className="icon-github"></i></a>
            </div>
          </div>
          <div className="member grid">
            <div className="perfil">
              <img src={wanderson} />
            </div>
            <div>
              <p className="subtitle">Wanderson Bueno</p>
              <p className="occupation">front-end developer</p>
            </div>
            <div className="social grid">
              <a target="_blank" href="https://www.instagram.com/wandersonnbueno/"><i className="icon-instagram"></i></a>
              <a target="_blank" href="https://www.linkedin.com/in/wanderson-bueno"><i className="icon-linkedin"></i></a>
              <a target="_blank" href="https://github.com/wandbueno/"><i className="icon-github"></i></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
  
}
