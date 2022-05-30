import React from 'react'
import './ModalBugs.css'

function ModalBugs({ setOpenModalBugs }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModalBugs(false)
            }}
          >
            X
          </button>
        </div>
        <div className="containerBugs">
          <h2>Enviar feedback</h2>
          <div>
            <p>
              Quer enviar um feedback? Queremos ouvir sua opinião, mas pedimos
              que não compartilhe informações confidenciais. Caso você tenha
              dúvidas, consulte nossos canais de ajuda ou suporte.
            </p>
          </div>
          <form>
            <div>
              <input type="text" placeholder="Digite aqui" />
            </div>
            <div className="textUser">
              <p>
                É possível que algumas informações de conta e sistema sejam
                enviadas para o Google. Usaremos esses dados para corrigir
                problemas e aprimorar serviços, de acordo com nossa Política de
                Privacidade e nossos Termos de Serviço. Você talvez receba
                e-mails nossos pedindo mais informações e atualizações. Para
                solicitar mudanças de conteúdo por motivos legais, acesse a
                página de Ajuda do Jurídico.
              </p>
            </div>
            <div className="buttosform">
              <button
                onClick={() => {
                  setOpenModalBugs(false)
                }}
                className="cancelBtn"
                type="submit"
              >
                Cancelar
              </button>
              <button className="entrarBtn">Enviar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ModalBugs
