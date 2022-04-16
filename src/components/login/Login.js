import React from "react";
import './login.css';
import imagemEmail from "../../assets/img/email.png";
import imagemGoogle from "../../assets/img/google.png";

const Login = ()=>{
    return(

    <div className="containerLogin">
        <div className="buttonEmail">
            
            <div className="buttonEntrar">
                <a href="#">
                        Entrar com Google
                <img src={imagemGoogle}/> 
                </a>
            </div>

            <div className="buttonSign">
                <a href="#">

                        Sign e-mail
                    
                <img src={imagemEmail}/> 
                </a>
            </div>
                <div className="novoUsuario">
                <p>
                    Cadastrar usando <a href="#">e-mail</a>
                </p>
        </div>
            
        
        </div>
        
    </div>
    )
}

export default Login