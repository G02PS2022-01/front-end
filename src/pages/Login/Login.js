import React from "react";
import './login.css';
 import login from "../../assets/img/login.svg";
 import '../../assets/icon/style.css'

const Login = ()=>{
    return(
        <section className="section" id="login">
          <div className="container grid">
            <div className="imageLogin">
              <img src={login}  alt="" />
            </div>
  
            <div className="login">
              
              <div className="loginGoogle">
                <a className="buttongoogle" href="#"
                  >Entrar com Google <i className="icon-google"></i></a>
              </div>
              <div className="loginEmail">
                <a className="button" href="#"
                  >Sign in E-mail <i className="icon-gmail"></i></a>
              </div>
              <a href="/cadastro/new" className="register">Cadastrar usando E-mail</a>

            </div>
          </div>
        </section>
    )
}

export default Login