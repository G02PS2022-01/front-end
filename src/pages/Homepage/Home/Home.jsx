import './Home.css';
import React, { useState } from 'react';
import laptop from '../../../assets/img/screen-laptop.svg';
import ModalLogin from '../../../components/Modals/ModalLogin/ModalLogin';

export default function Home() {

  const [modalLoginOpen, setModalLoginOpen] = useState(false)

  return (
    <>
      <section className="section" id="home">
        <div className="container grid">
          <div className="image">
            <img src={laptop} alt="imagem inicio" />
          </div>
          <div className="text">
            <h2 className="title">
              Bem-vindo ao <strong>DogCode</strong>, Ambiente feito para quem
              desejar começar programar
            </h2>
            <p className="subtitle">
              Aprenda conceitos que se aplicam a qualquer linguagem de
              programação.
            </p>
            <a style={{cursor: 'pointer'}} className="button openModalBtn" onClick={() => {
                setModalLoginOpen(true)
              }}>Começar Agora</a>
          </div>
          {modalLoginOpen && (
              <ModalLogin setOpenModalLogin={setModalLoginOpen} />
            )}
        </div>
      </section>
      <div className="divider-2"></div>
    </>
  );
}