import React from 'react'
import '../App.css'
import './Glossary.css'

export default function Glossary() {
  return (
    <>
      <section className="section" id="glossary">
        <div className="container grid containerGlossary">
          <div className="list">
            <ul id="itemmenu">
              <h2 className="title">Dicionário</h2>
              <li id="types">
                <a className="subtitle" href="#">
                  Tipos de Dados
                </a>
              </li>
              <li id="functions">
                <a className="subtitle" href="#">
                  Funções
                </a>
              </li>
              <li id="loops">
                <a className="subtitle" href="#">
                  Loops
                </a>
              </li>
              <li id="variaveis">
                <a className="subtitle" href="#">
                  Variáveis
                </a>
              </li>
              <li id="logicos">
                <a className="subtitle" href="#">
                  Operadores lógicos
                </a>
              </li>
              <li id="matematicos">
                <a className="subtitle" href="#">
                  Operadores matemáticos
                </a>
              </li>
              <li id="atribuicao">
                <a className="subtitle" href="#">
                  Operadores de Atribuição
                </a>
              </li>
              <li id="comparacao">
                <a className="subtitle" href="#">
                  Operadores de comparação
                </a>
              </li>
            </ul>
          </div>
          <div className="meanings" id="all">
            <div id="types">
              <h2 className="title">Tipos de Dados</h2>
              <div className="meaning">
                <p>
                  Cada linguagem de programação tem seus próprios tipos de dados
                  integrados. Os tipos de dados em JavaScript incluem números,
                  strings, booleanos, arrays e objetos.
                </p>
              </div>
              <div className="meaning">
                <h2>Número</h2>
                <br />
                <p>
                  Em JavaScript, os números podem ser inteiros (como 10) ou
                  conter um decimal (como 10.5).
                  <details>
                    <p>EXEMPLO:</p>
                    <br />
                    <p id="example">
                      var numeroDeAulas = 10 ;<br />
                      var temperatura = 74 . 6 ;
                    </p>
                    <p>
                      As variáveis <span>numeroDeAulas</span> e{' '}
                      <span>temperatura</span> armazenam números.
                    </p>
                  </details>
                </p>
              </div>
              <div className="meaning">
                <h2>Strings</h2>
                <br />
                <p>
                  Strings armazenam texto, como letras, palavras, símbolos e
                  espaços. Strings são cercadas por aspas.
                  <details>
                    <p>EXEMPLO:</p>
                    <br />
                    <p id="example">var mensagem = 'Olá mundo' ;</p>
                    <p>
                      A variávei <span>mensagem</span> armazena a string 'Olá
                      mundo'.
                    </p>
                  </details>
                </p>
              </div>
              <div className="meaning">
                <h2>boleano</h2>
                <br />
                <p>
                  Um booleano armazena o valor true ou false.
                  <details>
                    <p>EXEMPLO:</p>
                    <br />
                    <p id="example">
                      var estudandoProgramacao = true ;<br /> var
                      aprenderSemEstudar = false ;
                    </p>
                    <p>
                      É <span>verdade</span> que você está aprendendo
                      programação, mas é <span>falso</span> que você aprende sem
                      estudar.
                    </p>
                  </details>
                </p>
              </div>
            </div>
            <div id="functions">
              <h2 className="title">Funções</h2>
              <div className="meaning">
                <p>
                  A function is a reusable block of code that tells a computer
                  to do a specific thing. Functions usually take information,
                  process it, and return a result.
                </p>
              </div>
            </div>
            <div id="loops">
              <h2 className="title">Loops</h2>
              <div className="meaning">
                <p>
                  Loops are used to run the same block of code multiple times.
                  There are many different types of loops in JavaScript.
                </p>
              </div>
            </div>
            <div id="teste">
              <h2 className="title">Testando</h2>
              <div className="meaning">
                <p>
                  Loops are used to run the same block of code multiple times.
                  There are many different types of loops in JavaScript.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
