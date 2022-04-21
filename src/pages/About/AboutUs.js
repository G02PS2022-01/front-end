import React from 'react'
import './AboutUs.css'
import '../../assets/icon/style.css'
import padrao from '../../assets/img/padrao.jpg'

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
              <img src={padrao} />
            </div>
            <div>
              <p className="subtitle">Antonio</p>
              <p className="occupation">back-end developer</p>
            </div>
            <div className="social grid">
              <a target="_blank" href="#"><i className="icon-instagram"></i></a>
              <a target="_blank" href="#"><i className="icon-linkedin"></i></a>
              <a target="_blank" href="#"><i className="icon-github"></i></a>
            </div>
          </div>
          <div className="member grid">
            <div className="perfil">
              <img src="./img/Foto_Perfil.jpg" />
            </div>
            <div>
              <p className="subtitle">Amaury</p>
              <p className="occupation">front-end developer</p>
            </div>
            <div className="social grid">
              <a target="_blank" href="#"><i className="icon-instagram"></i></a>
              <a target="_blank" href="#"><i className="icon-linkedin"></i></a>
              <a target="_blank" href="#"><i className="icon-github"></i></a>
            </div>
          </div>
          <div className="member grid">
            <div className="perfil">
              <img src="./img/Foto_Perfil.jpg" />
            </div>
            <div>
              <p className="subtitle">Gabriel</p>
              <p className="occupation">back-end developer</p>
            </div>
            <div className="social grid">
              <a target="_blank" href="#"><i className="icon-instagram"></i></a>
              <a target="_blank" href="#"><i className="icon-linkedin"></i></a>
              <a target="_blank" href="#"><i className="icon-github"></i></a>
            </div>
          </div>
          <div className="member grid">
            <div className="perfil">
              <img src="./img/Foto_Perfil.jpg" />
            </div>
            <div>
              <p className="subtitle">Gustavo</p>
              <p className="occupation">front-end developer</p>
            </div>
            <div className="social grid">
              <a target="_blank" href="#"><i className="icon-instagram"></i></a>
              <a target="_blank" href="#"><i className="icon-linkedin"></i></a>
              <a target="_blank" href="#"><i className="icon-github"></i></a>
            </div>
          </div>
          <div className="member grid">
            <div className="perfil">
              <img src="./img/Foto_Perfil.jpg" />
            </div>
            <div>
              <p className="subtitle">Marcos</p>
              <p className="occupation">front-end developer</p>
            </div>
            <div className="social grid">
              <a target="_blank" href="#"><i className="icon-instagram"></i></a>
              <a target="_blank" href="#"><i className="icon-linkedin"></i></a>
              <a target="_blank" href="#"><i className="icon-github"></i></a>
            </div>
          </div>
          <div className="member grid">
            <div className="perfil">
              <img src="./img/Foto_Perfil.jpg" />
            </div>
            <div>
              <p className="subtitle">Nicolas</p>
              <p className="occupation">front-end developer</p>
            </div>
            <div className="social grid">
              <a target="_blank" href="#"><i className="icon-instagram"></i></a>
              <a target="_blank" href="#"><i className="icon-linkedin"></i></a>
              <a target="_blank" href="#"><i className="icon-github"></i></a>
            </div>
          </div>
          <div className="member grid">
            <div className="perfil">
              <img src="./img/Foto_Perfil.jpg" />
            </div>
            <div>
              <p className="subtitle">Vinicius</p>
              <p className="occupation">fullstack developer</p>
            </div>
            <div className="social grid">
              <a target="_blank" href="#"><i className="icon-instagram"></i></a>
              <a target="_blank" href="#"><i className="icon-linkedin"></i></a>
              <a target="_blank" href="#"><i className="icon-github"></i></a>
            </div>
          </div>
          <div className="member grid">
            <div className="perfil">
              <img src="./img/Foto_Perfil.jpg" />
            </div>
            <div>
              <p className="subtitle">Wanderson</p>
              <p className="occupation">front-end developer</p>
            </div>
            <div className="social grid">
              <a target="_blank" href="#"><i className="icon-instagram"></i></a>
              <a target="_blank" href="#"><i className="icon-linkedin"></i></a>
              <a target="_blank" href="#"><i className="icon-github"></i></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
  
}
