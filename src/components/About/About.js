import React from 'react'
import './About.css'

const About = () => {
  return (
    <>
      <div className="container">
        <div className="imgAbout">
          <img src="#" alt="" />
        </div>
        <div className="textAbout">
          <h2>Um pouco sobre nossa equipe e projeto.</h2>
          <p>
            Somos alunos da disciplina Projeto de Sistemas pelo curso Ciência da
            Computação na Universidade Federal do Tocantins, e como projeto
            decorrente da disciplina. Desenvolveremos uma aplicação com a
            finalidade do ensino básico e introdução a programação para
            indíviduos que qurem aprender de maneira simples e divertida a
            programar.
          </p>
          <p>Objetivos:</p>
          <ul>
            <li>Desenvolver aplicação</li>
            <li>Deixar o mais didático possível</li>
            <li>
              Aplicar modelos de ensino e gamificação aque obtiveram sucesso
            </li>
          </ul>
        </div>
        <section className="avatar">
          <div className="avatarSingle">
            <img
              src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909__340.png"
              alt=""
            />
            <p>
              <a href="#">@amaur1mmj</a>
            </p>
          </div>
          <div className="avatarSingle">
            <img src="./././avatar.png" alt="" />
            <p>
              <a href="#">@vinnieoh</a>
            </p>
          </div>
          <div className="avatarSingle">
            <img src="./avatar.png" alt="" />
            <p>
              <a href="#">@gabrielgcarvalho</a>
            </p>
          </div>
          <div className="avatarSingle">
            <img src="./avatar.png" alt="" />
            <p>
              <a href="#">@wandbueno</a>
            </p>
          </div>
          <div className="avatarSingle">
            <img src="./avatar.png" alt="" />
            <p>
              <a href="#">@Marcos1079</a>
            </p>
          </div>
          <div className="avatarSingle">
            <img src="./avatar.png" alt="" />
            <p>
              <a href="#">@nicolasarthur10</a>
            </p>
          </div>
          <div className="avatarSingle">
            <img src="./avatar.png" alt="" />
            <p>
              <a href="#">@gustavo</a>
            </p>
          </div>
        </section>
      </div>
    </>
  )
}
export default About
