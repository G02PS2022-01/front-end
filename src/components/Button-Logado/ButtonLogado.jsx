import React, {useState} from 'react';
import './style.css';
import DogIcon from "../../assets/img/dog-icon-navbar.png";
import ModalConfig from '../../components/Modals/ModalConfig'

export function ButtonLogado() {

  const [isActive, setIsActive] = useState(false)
  const [modalConfigOpen, setModalConfigOpen] = useState(false)

  return (
    <>
      <div className="dropDowAvatar">
        <div
          className="dropDowAvatar-btn"
          onClick={e => setIsActive(!isActive)}
        >
          <img src={DogIcon} className="DropDowImg" />
        </div>
        {isActive && (
          <div className="dropDow-content">
            <div className="dropDow-item">Comunicar bug</div>
            <div
              className="dropDow-item openModalBtn"
              onClick={() => {
                setModalConfigOpen(true)
              }}
            >
              Configurações
            </div>
            {modalConfigOpen && (
              <ModalConfig setOpenModalConfig={setModalConfigOpen} />
            )}
            
            <div className="dropDow-item">Sair</div>
          </div>
        )}
      </div>
    </>
  );
}