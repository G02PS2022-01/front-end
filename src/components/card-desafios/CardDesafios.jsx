import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import CardBloqueado from "../../assets/img/Card-Desafios-Bloqueado.png";
import CardDesloqueado from "../../assets/img/Card-Desafios-Desbloqueado.png";


export default function CardDesafios(){

    const [click, setClick] = useState(false);



    return (
        <>
        <section className="section" id="passos">
            <div className="container grid">
                <div className="cards grid">
                    <div className="card">
                        <i className=""><img src={CardDesloqueado} /></i>
                        <h3 className="title">Nivel #1</h3>
                        <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        </p>
                    </div>
                    <div className="card">
                        <i className=""><img src={CardBloqueado} /></i>
                        <h3 className="title">Nivel #2</h3>
                        <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        </p>
                    </div>
                    <div className="card">
                        <i className=""><img src={CardBloqueado}  /></i>
                        <h3 className="title">Nivel #3</h3>
                        <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        </p>
                    </div>
                    <div className="card">
                        <i className=""><img src={CardBloqueado}  /></i>
                        <h3 className="title">Nivel #4</h3>
                        <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        </p>
                    </div>
                    <div className="card">
                        <i className=""><img src={CardBloqueado}  /></i>
                        <h3 className="title">Nivel #5</h3>
                        <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        </p>
                    </div>
                    <div className="card">
                        <i className=""><img src={CardBloqueado}  /></i>
                        <h3 className="title">Nivel #6</h3>
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