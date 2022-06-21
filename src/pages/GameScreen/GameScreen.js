import React, {useState} from 'react'
import axios from 'axios';
import './GameScreen.css'

export default function GameScreen() {

  const [codigo, setCodigo] = useState('');

  
  async function executa_codigo() {
    const source = codigo;

    axios({
      method: "POST",
      url: "https://judge0.p.rapidapi.com/submissions",
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

        let url =  "https://judge0.p.rapidapi.com/submissions/" + token.token;

        const req = axios({
          method: "GET",
          url: url,
          params: {base64_encoded: 'true', fields: '*'},
          headers: {
            "x-rapidapi-key": "9976bf9373msh708cf2036c13e35p1d4f03jsn9a681ec62654",
            "x-rapidapi-host": "judge0-ce.p.rapidapi.com",
          }
        })

        console.log(req)
      })
      
      .catch((error) => {
        console.log(error);
      }
    );

  }


  const chama_api = (e)=>{
    e.preventDefault()
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
          <header className="header-gamer-full">
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
          <div className="form-game-screen">
            <form onSubmit={chama_api}>
              <textarea
                id="story"
                name="story"
                placeholder="Digite a solução aqui"
                onChange={(e) =>{
                  setCodigo(e.target.value)
                }}
              ></textarea>
              <button onClick={()=>{
                  executa_codigo()
              }} className="button-executar">Executar código</button>
            </form>
          </div>

          <footer>
            <h2>Botões de resposta</h2>
          </footer>
        </div>
        <aside className="aside-final-game">
          <div className="aside-solucao">
            <h2>Solução</h2>
          </div>
          <div className="aside-outro">
            <h2>outro</h2>
          </div>
        </aside>
      </main>
    </>
  )
}
