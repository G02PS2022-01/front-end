import React, { useState } from 'react'
import Conteudo from './conteudo/Conteudo'
import './Glossary.css'

export default function Glossary() {
  const [item, setItem] = useState('data')

  const SideMenu = () => {
    const SUMMARY = [
      {
        index: 0,
        id: 'data',
        name: 'Tipos de Dados',
        title: 'Tipos de Dados'
      },
      {
        index: 1,
        id: 'functions',
        name: 'functions',
        title: 'Funções'
      },
      { index: 2, id: 'variables', name: 'variables', title: 'Variáveis' },
      { index: 3, id: 'math', name: 'math', title: 'Operadores Aritméticos' },
      {
        index: 4,
        id: 'assignment',
        name: 'assignment',
        title: 'Operadores de Atribuição'
      },
      {
        index: 5,
        id: 'comparison',
        name: 'comparison',
        title: 'Operadores de comparação'
      },
      {
        index: 7,
        id: 'logical',
        name: 'logical',
        title: 'Operadores lógicos'
      }
    ]
    return (
      <div className="list">
        <ul id="itemmenu">
          <div>
            <h2 className="title">Dicionário</h2>
          </div>
          {SUMMARY.map((item, index) => {
            return (
              <li
                key={item.index}
                id={item.id}
                onClick={() => handleSelect(item.name)}
              >
                <a className="subtitle" href="#">
                  {item.title}
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }

  const handleSelect = item => {
    // console.log(item);
    setItem(item)
  }

  return (
    <>
      <section className="section " id="glossary">
        <div className="containerGlossary container grid">
          {/* Sidebar Menu */}
          {SideMenu()}
          {/* Infocomponets */}
          <Conteudo itemSelected={item} />
        </div>
      </section>
    </>
  )
}
