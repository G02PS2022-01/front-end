import React from 'react';
import './Step.css';
import Img01 from '../../../assets/img/coding.svg';
import Img02 from '../../../assets/img/researching.svg';
import Img03 from '../../../assets/img/sync.svg';

export default function Step() {
  return (
    <>
    <div className="divider-2"></div>
      <section className="section" id="passos">
        <div className="container grid">
          <header>
            <h2 className="title">Passo a passo</h2>
            <p>A melhor maneira de começar sua jornada na programação.</p>
          </header>
          <div className="cards grid">
            <div className="card">
              <i className=""><img src={Img01} /></i>
              <h3 className="title">Passo #1</h3>
              <p>
                Aprenda com lições rápidas e divertidas que ensinam você a
                escrever seu primeiro código.
              </p>
            </div>
            <div className="card">
              <i className=""><img src={Img02} /></i>
              <h3 className="title">Passo #2</h3>
              <p>
                Percorra níveis progressivamente desafiadores à medida que
                desenvolve suas habilidades.
              </p>
            </div>
            <div className="card">
              <i className=""><img src={Img03} /></i>
              <h3 className="title">Passo #3</h3>
              <p>
                Crie habilidades de programação fundamentais para o seu próximo
                passo como programador.
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="divider-1"></div>
  
    </>
  );
}