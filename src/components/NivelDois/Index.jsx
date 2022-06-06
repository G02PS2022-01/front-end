import { Link } from 'react-router-dom';
import { CaretLeft, CaretRight } from "phosphor-react";
import './style.css';


export default function Index(){



    return (
        
      <div className='body-text'> 
            
            <div>
                <h1>Estrutura de seleção</h1>
                <p>
                    A estrutura condicional if executa uma afirmação dentro de um bloco, 
                    se a condição for verdadeira irá executar uma condição, Se for falso irá executar 
                    as afirmações dentro do else.
                </p>
                <br/>
                <h2>Sintaxe</h2>
                
                <p>
                    A condição permite uma expressão que pode ser avaliado como True ou False.  Pode ser qualquer instrução, 
                    incluindo mais condicionais if aninhadas à instrução
                </p>
                <br />
                <p>
                    Se a condicional que for executada em um if for True, podendo ser qualquer instrução ira cair
                    no bloco if. Se caso a instrucao for falsa e a condição else exista, pode ser qualquer instrução, 
                    incluindo instruões em bloco e mais condicionais if aninhadas. 
                </p>
                <br/>
                <h2>Exemplos</h2>
                
            </div>
            <br/>
            <div>
                <br/>
                <h1>Estrutura de repetição</h1>
                <p>
                   <h3>While</h3>
                   O comando While permite que um certo trecho de programa seja executado ENQUANTO uma certa condição 
                   for verdadeira.
                   
                </p>
                <h2>Sintaxe</h2>
                

                <h2>Exemplo</h2>
                
                <br/>
                <p>
                    <h3>Do-While</h3>
                    O comando do-while permite que um certo trecho de programa seja executado ENQUANTO uma certa 
                    condição for verdadeira.
                </p>
                <h2>Sintaxe</h2>
                

                <h2>Exemplo</h2>
                
                <br/>
                <p>
                    <h3>For</h3>
                    O comando for permite que um certo trecho de programa seja executado um determinado número de vezes
                </p>
                <br/>
                <h2>Sintaxe</h2>


                <h2>Exemplo</h2>
                <br/>
                
            </div>

            <div>
                <Link to='#' className='left-link'>
                    <p><span><CaretLeft size={16} /></span>Nivel Desafios</p>
                </Link>

                <Link to='#' className='right-link'>
                    <p>Desafios<span><CaretRight size={16} /></span></p>
                </Link>
            </div>
       
      </div>
    );

}