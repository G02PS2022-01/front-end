import React from 'react';
import './Footer.css';

export default function IndexFooter(){
    return (
        <footer className="section">
            <div className="container grid">
                <div className="brand">
                <a className="logo logo-alt" href="#home">Dog<span>Code</span>.</a>
                <p>@2022 Projeto de Sistemas</p>
                <p>Todos os direitos reservados</p>
                </div>
                <div className="menuFooter grid">
                <ul>
                    <li><a target="_blank" href='#' id='meulink'>Termos de Serviço</a></li>
                    <li><a target="_blank" href='#' id='meulink'>Perguntas frequentes</a></li>
                    <li><a target="_blank" href='#' id='meulink'>Política de privacidade</a></li>
                </ul>
                </div>
                <div className="social grid">
                <a target="_blank" href="#"><i className="icon-instagram"></i></a>
                <a target="_blank" href="#"><i className="icon-facebook"></i></a>
                </div>
            </div>
        </footer>
    );

}