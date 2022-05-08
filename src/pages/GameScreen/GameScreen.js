import React from 'react'
import './GameScreen.css'

export default function GameScreen() {
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
            <form>
              <textarea
                id="story"
                name="story"
                placeholder="Digite a solução aqui"
              ></textarea>
              <button className="button-executar">Executar código</button>
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
