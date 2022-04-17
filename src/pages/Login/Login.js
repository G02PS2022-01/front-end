import React from "react";
import './login.css';

const Login = ()=>{
    return(
        <section class="section" id="login">
          <div class="container grid">
            <div class="imageLogin">
              <img src="./img/login.svg" alt="" />
            </div>
  
            <div class="login">
              <div class="loginGoogle">
                <a class="button" href="#"
                  >Entrar com Google <i class="icon-google"></i
                ></a>
              </div>
              <div class="loginEmail">
                <a class="button" href="#"
                  >Sign in E-mail <i class="icon-gmail"></i
                ></a>
              </div>
              <a href="#" class="register">Cadastrar usando E-mail</a>
            </div>
          </div>
        </section>
    )
}

export default Login