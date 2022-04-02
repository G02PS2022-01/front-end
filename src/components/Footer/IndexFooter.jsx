import React from 'react';
import './style.css';

export default function IndexFooter(){
    return (
        <footer>
            <div class="footer_conteiner">
                <div class="links">
                    <ul>
                        <li><a href="#">Inicio</a></li>
                        <li><a href="#">O que é codificação</a></li>
                        <li><a href="#">Sobre</a></li>
                    </ul>
                </div>
                <div class="links">
                    <ul>
                        <li><a href="#">Email</a></li>
                        <li><a href="#">Perguntas frequentes</a></li>
                    </ul>
                </div>
                <div class="links">
                    <ul>
                        <li><a href="#">Termos de serviço</a></li>
                        <li><a href="#">Política de Privacidade</a></li>
                    </ul>
                </div>
            </div>
            <div class="footer-cop">
                <p>UFT - Projeto de Sistema</p>
            </div>
        </footer>
    );

}