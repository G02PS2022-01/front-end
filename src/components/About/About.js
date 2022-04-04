import React from 'react'
import './About.css'

const About = () => {
  return (
    <>
      <div className="container">
        <div className="imgAbout">
          <img src="https://wandersonbueno.com.br/ps/dogCode.svg" alt="" />
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
      </div>
    </>
  )
}
export default About
