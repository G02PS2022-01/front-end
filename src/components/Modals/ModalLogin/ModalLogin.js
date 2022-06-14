import React, { useState } from 'react'
import './ModalLogin.css'

function ModalLogin({ setOpenModalLogin }) {
  const [isSignUp, setisSignUp] = useState(false)
  const [data, setData] = useState({
    nome: '',
    email: '',
    password: '',
    confirmpass: ''
  })
  const [confirmPass, setConfirmPass] = useState(true)

  const handleChange = e => {
    setData({ ...data, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()

    if (isSignUp) {
      if (data.password !== data.confirmpass) {
        setConfirmPass(false)
      }
    }
  }

  const resetForm = () => {
    setConfirmPass(true)
    setData({
      nome: '',
      email: '',
      password: '',
      confirmpass: ''
    })
  }

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
          <h3>{isSignUp ? 'Cadastre-se' : 'Login'}</h3>
        </div>
        <form className="body" onSubmit={handleSubmit}>
          {isSignUp && (
            <div>
              <input
                type="text"
                name="nome"
                placeholder="Nome"
                required="required"
                onChange={handleChange}
                value={data.nome}
              />
            </div>
          )}

          <div>
            <input
              type="email"
              name="email"
              placeholder="E-mail"
              required="required"
              onChange={handleChange}
              value={data.email}
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Senha"
              name="password"
              required="required"
              onChange={handleChange}
              value={data.password}
            />
          </div>

          {isSignUp && (
            <div>
              <input
                type="password"
                placeholder="Confirmar Senha"
                name="confirmpass"
                required="required"
                onChange={handleChange}
                value={data.confirmpass}
              />
            </div>
          )}

          <span
            style={{
              display: confirmPass ? 'none' : 'block',
              color: 'red',
              fontSize: '12px',
              textAlign: 'end',
              marginRight: '5px'
            }}
          >
            * A Senha não confere
          </span>

          <div className="footer">
            <button type="submit">{isSignUp ? 'Cadastre-se' : 'Entrar'}</button>
          </div>
        </form>

        <div
          className="register-login"
          style={{ cursor: 'pointer' }}
          onClick={() => {
            setisSignUp(prev => !prev)
            resetForm()
          }}
        >
          {isSignUp
            ? 'Já tem uma conta. Login!'
            : 'Não tem uma conta. Cadastre-se'}
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
