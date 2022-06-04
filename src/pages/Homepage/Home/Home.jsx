
import './Home.css';
import React from 'react';
import laptop from '../../../assets/img/screen-laptop.svg';
import { Link } from 'react-router-dom';

export default function Home() {

  return (
    <>
      <section className="section" id="home">
        <div className="container grid">
          <div className="image">
            <img src={laptop} alt="" />
          </div>
          <div className="text">
            <h2 className="title">
              Bem vindo ao DogCode, o ambiente feito para quem deseja começar a programar  
            </h2>
            <p>
              Aprenda conceitos que se aplicam a qualquer linguagem de programação
            </p>
            <br />
            <Link className="button" to='/register'> 
              Começar agora
            </Link>
          </div>
        </div>
      </section>
      <div class="divider-2"></div>
    </>
  );
}