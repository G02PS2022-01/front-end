import React from 'react';
import { useHistory } from 'react-router-dom';
import './style.css';
import { LockKey, Dog } from "phosphor-react";


export default function CardDesafios(){

    const history = useHistory();

    const nivel = 2;
    const valor = true;

    return (
        <>
        <section className="section" id="passos">
            <div className="container ">
                <header>
                    <h2 class="title">Desafios de Programação</h2>
                </header>
                <div className="cards grid">
                    <div className="card" onClick={() => history.push('#')}>
                        <i className=""><Dog size={120} /></i>
                        <button id='btn'>
                            <h3 className="title">Nivel #1</h3>
                        </button>
                        <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        </p>
                    </div>
                    <div className="card" onClick={() => { if(nivel >= 2) valor && history.push('/nivel-dois');}} >
                        <i className="">{(nivel >= 2) ? <Dog size={120} /> :<LockKey size={120} />}</i>
                        <button id='btn'>
                            <h3 className="title">Nivel #2</h3>
                        </button>
                        <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        </p>
                    </div>
                    <div className="card" onClick={() => { if(nivel >= 3) valor && history.push('#');}}>
                        <i className="">{(nivel >= 3) ? <Dog size={120} /> :<LockKey size={120} />}</i>
                        <button id='btn' >
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