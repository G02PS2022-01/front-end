import React from 'react'
import './ModalConfig.css'

function ModalConfig({ setOpenModalConfig }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModalConfig(false)
            }}
          >
            X
          </button>
        </div>
        <div className="containerConfig">
          <h2>Minhas configurações</h2>
          <div>
            <h4 className="titleConfig">Seu Nome</h4>
            <p>Wanderson Bueno</p>
          </div>
          <div>
            <h4 className="titleConfig">Seu E-mail</h4>
            <p>wanderson@gmail.com</p>
          </div>
          <div>
            <h4 className="titleConfig">Seu idioma</h4>
            <p>Português (Brasil)</p>
          </div>
          <button>Sair</button>
        </div>
      </div>
    </div>
  )
}

export default ModalConfig
