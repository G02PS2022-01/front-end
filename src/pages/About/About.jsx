import React from 'react'
import './About.css'
import macbook from '../../assets/img/macbook.svg'
import '../../assets/icon/style.css'

const About = () => {
  return (
    <>
      <section className="section" id="about">
        <div className="container grid">
          <div className="image">
            <img src={macbook} alt="" />
          </div>
          <div className="text">
            <h2 className="title">Sobre nós</h2>
            <p>
              O DogCode foi criado por grupo de alunos do curso de Ciência da
              computação da Universidade Federal do Tocantins , para a materia
              de Projeto de Sistemas. Ao perceber que a programação está se
              tornando uma habilidade essencial, queremos possibilitar seus
              primeiros passos.
            </p>
            <br />
            <p>
              Criamos o DogCode para ajudar pessoas como você a ingressar no
              mundo da programação de maneira fácil e divertida. Esperamos que
              você goste e que ajude você a embarcar ou continuar sua jornada
              aprendendo a programar.
            </p>

            <br />
            <a
              className="button"
              href="file:///C:/Users/wanol/Desktop/ps/abouts.html"
              >Conheça Nossa Equipe</a
            >
          </div>
        </div>
      </section>
      
    </>
  )
}
export default About
