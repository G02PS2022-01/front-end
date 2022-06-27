import React, {useState} from 'react'
import axios from 'axios';
import MonacoEditor from '@monaco-editor/react';
import { Base64 } from 'js-base64';
import './GameScreen.css'

export default function GameScreen() {

  const [codigo, setCodigo] = useState('');

  let decode_codigo = '';
  let resultao_compilador = "";

  
  function executa_codigo() {

    const vari = Base64.encode(codigo);
    const source = vari;
    let data = '';
    const BASE_URL = 'https://judge0.p.rapidapi.com/submissions';

    console.log(source)

    axios({
      method: "POST",
      url: BASE_URL,
      params: {base64_encoded: 'true', fields: '*'},
      headers: {
        "content-type": "application/json",
        'Content-Type': 'application/json',
        "x-rapidapi-key": "9976bf9373msh708cf2036c13e35p1d4f03jsn9a681ec62654",
        "x-rapidapi-host": "judge0-ce.p.rapidapi.com",
      },
      data: {
        language_id: 49,
        source_code: source,
        stdin: "SnVkZ2Uw",
      },
    })
      .then((response)=>{

        console.log(response.data);

        let token = response.data;

        let url = BASE_URL + "/" + token.token;

        const req = axios({
          method: "GET",
          url: url,
          params: {base64_encoded: 'true', fields: '*'},
          headers: {
            "x-rapidapi-key": "9976bf9373msh708cf2036c13e35p1d4f03jsn9a681ec62654",
            "x-rapidapi-host": "judge0-ce.p.rapidapi.com",
          }
        })

        return req;

      })
      .then((response)=>{
        data = response.data;
        console.log(data);
        decode_codigo = Base64.decode(data.source_code);
        resultao_compilador = Base64.decode(data.stdout);

        console.log(decode_codigo)
        console.log(resultao_compilador)
      })
      .catch((error) => {
        console.log(error);
      }
    );

  }


  return (
    <>
      <main className="container-game-screen">
        <header className="header-gamer-min">
          <nav className="container-nivel">
            <a className="logo-nivel" href="#">
              Dog<span>Code</span>.
            </a>
            <div className="menu">
              <ul className="grid">
                <li>
                  <button className="button-sair">Sair</button>
                </li>
              </ul>
            </div>
          </nav>
        </header>
        <aside className="aside-inicio-game">
          <div>
            <h2>Ajuda para criação de variável</h2>
          </div>
          <div>
            <h3>Instruções</h3>
            <p>
              O que temos que ter sempre em mente é que a hegemonia do ambiente
              político faz parte de um processo de gerenciamento do impacto na
              agilidade decisória.
            </p>
          </div>
        </aside>
        <div className="central-game-screen">
          {/* <header className="header-gamer-full">
            <nav className="container-nivel">
              <a className="logo-nivel" href="#">
                Dog<span>Code</span>.
              </a>
              <div className="menu">
                <ul className="grid">
                  <li>
                    <button className="button-sair">Sair</button>
                  </li>
                </ul>
              </div>
            </nav>
          </header> */}
          <div className="form-game-screen">
            <MonacoEditor
              height="80vh"
              language="c"
              theme="vs-dark"
              onChange={(value) =>{setCodigo(value)}}
            />
             <button onClick={()=>{
                  executa_codigo()
              }} className="button-executar">Executar código</button>
          </div>

          {/* <footer>
            <h2>Botões de resposta</h2>
          </footer> */}
        </div>
        <aside className="aside-final-game">
          <div className="aside-solucao">
            <h2>Solução</h2>
            <p>{resultao_compilador}</p>
          </div>
          {/* <div className="aside-outro">
            <h2>outro</h2>
          </div> */}
        </aside>
      </main>
    </>
  )
}
