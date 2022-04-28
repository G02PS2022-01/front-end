import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import './style.css';
import CardBloqueado from "../../assets/img/Card-Desafios-Bloqueado.png";
import CardDesloqueado from "../../assets/img/Card-Desafios-Desbloqueado.png";


export default function CardDesafios(){

    const history = useHistory();
    const [disable, setDisable] = useState(false);

    const nivel = 1;

    return (
        <>
        <section className="section" id="passos">
            <div className="container grid">
                <header>
                    <h2 class="title">Desafios de Programação</h2>
                </header>
                <div className="cards grid">
                    <div className="card">
                        <i className=""><img src={CardDesloqueado}/></i>
                        <button id='btn' onClick={() => history.push('#')}>
                            <h3 className="title">Nivel #1</h3>
                        </button>
                        <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        </p>
                    </div>
                    <div className="card" >
                        <i className=""><img src={(nivel >= 2) ? CardDesloqueado: CardBloqueado}/></i>
                        <button disabled={nivel < 2 ? true:false} id='btn'onClick={() => history.push('#')}>
                            <h3 className="title">Nivel #2</h3>
                        </button>
                        <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        </p>
                    </div>
                    <div className="card">
                        <i className=""><img src={(nivel >= 3) ? CardDesloqueado: CardBloqueado}/></i>
                        <button id='btn' onClick={() => history.push('#')}>
                            <h3 className="title">Nivel #3</h3>
                        </button>
                        <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        </p>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}