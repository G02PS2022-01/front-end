import React, { useState } from "react";
import './login.css';
import login from "../../assets/img/login.svg";
import '../../assets/icon/style.css'
import GoogleLogin from "react-google-login";

const Login = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [profilePic, setProfilePic] = useState();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const responseGoogle = (response) => {
    console.log(response);
    const {
      profileObj: { name, email, imageUrl },
    } = response;
    setName(name);
    setEmail(email);
    setProfilePic(imageUrl);
    setIsLoggedIn(true);
  };
  return (
    <section className="section" id="login">
      <div className="container grid">
        <div className="imageLogin">

        </div>

        <div className="login">

          <div className="loginGoogle">
            <a className="buttongoogle" href="#">
              <GoogleLogin
                className="buttongoogle"
                clientId="366023343940-ndamikr6o5em3sivatijihspjsg8gmt2.apps.googleusercontent.com"
                render={renderProps => (
                  <a className="buttongoogle" onClick={renderProps.onClick} href="#"
                  >Entrar com Google <i className="icon-google"></i></a>
                )}
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
              />


            </a>
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

