import './style.css';

export default function IndexFooter(){
    return (
        <footer>
            <div className="footer_conteiner">
                <div className="links">
                    <ul>
                        <li><a href="#">Inicio</a></li>
                        <li><a href="#">O que é codificação</a></li>
                        <li><a href="#">Sobre</a></li>
                    </ul>
                </div>
                <div className="links">
                    <ul>
                        <li><a href="#">Email</a></li>
                        <li><a href="#">Perguntas frequentes</a></li>
                    </ul>
                </div>
                <div className="links">
                    <ul>
                        <li><a href="#">Termos de serviço</a></li>
                        <li><a href="#">Política de Privacidade</a></li>
                    </ul>
                </div>
            </div>
            <div className="footer-cop">
                <p>UFT - Projeto de Sistema</p>
            </div>
        </footer>
    );

}