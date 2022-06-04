import React from 'react'
import './ModalLogin.css'

function ModalLogin({ setOpenModalLogin }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModalLogin(false)
            }}
          >
            X
          </button>
        </div>
        <div className="title">
          <h3>Login</h3>
        </div>
        <form className="body">
          <div>
            <input
              type="email"
              id="email"
              placeholder="E-mail"
              required="required"
            />
          </div>
          <div>
            <input
              type="password"
              id="senha"
              placeholder="Senha"
              required="required"
            />
          </div>

          <div className="footer">
            <button type="submit">Entrar</button>
          </div>
        </form>
        <div className="register-login">
          Não tem uma conta?
          <span>
            <a href="/register"> Registre-se</a>
          </span>
        </div>
        <div class="separador-login">
          <div></div>
          <div>ou</div>
          <div></div>
        </div>
        <button className="googleBtn">
          <i className="icon-google"></i>Entrar com o google
        </button>
      </div>
    </div>
  )
}

export default ModalLogin
