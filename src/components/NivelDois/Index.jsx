import { Link } from 'react-router-dom';
import { CaretLeft, CaretRight } from "phosphor-react";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import './style.css';


export default function Index(){
    const sintaxe_if = 'if( Condição ){ \n  bloco_if \n}else{\n  bloco_else \n}';
    const exemplo_if_01 = 'int idade = 60;\nif(idade < 18){ \n  printf("Menor de idade");\n }else if(idade >= 18 && idade < 60){\n  printf("Maior de idade");\n}else{\n  printf("Idoso");\n} ';
    const exemplo_if_02 = 'int idade = 60;\nif(idade < 18){\n  printf("Menor de idade");\n}else if(idade >= 18 && idade < 60){\n  printf("Maior de idade");\n}else{\n  printf("Idoso");\n}';

    const sintaxe_while = 'while( Condição ){\n  Bloco_while\n}';
    const exemplo_while_01 = 'int cont = 0;\nwhile(cont == 10){\n  cont ++;\n}';

    const sintaxe_do_while = 'do{\n Bloco_Do_While \n}while( Condição );';
    const exemplo_do_while_02 = 'int cont = 0;\ndo{\n  cont ++;\n}while(cont == 10);';

    const sintaxe_for = 'for( Condição ){\n Bloco_for\n}';
    const exemplo_for = 'int cont = 10;\nfor(int i=0; i<cont; i++){\n  printf("%x", i);\n}';

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
                <SyntaxHighlighter language="cpp" style={dark}>
                    {sintaxe_if}
                </SyntaxHighlighter>

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
                <SyntaxHighlighter language="cpp" style={dark}>
                    {exemplo_if_01}
                </SyntaxHighlighter>
                <br />
                <SyntaxHighlighter language="cpp" style={dark}>
                    {exemplo_if_02}
                </SyntaxHighlighter>

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
                <SyntaxHighlighter language="cpp" style={dark}>
                    {sintaxe_while}
                </SyntaxHighlighter>

                <h2>Exemplo</h2>
                <SyntaxHighlighter language="cpp" style={dark}>
                    {exemplo_while_01}
                </SyntaxHighlighter>
                
                <br/>
                <p>
                    <h3>Do-While</h3>
                    O comando do-while permite que um certo trecho de programa seja executado ENQUANTO uma certa 
                    condição for verdadeira.
                </p>
                <h2>Sintaxe</h2>
                <SyntaxHighlighter language="cpp" style={dark}>
                    {sintaxe_do_while}
                </SyntaxHighlighter>

                <h2>Exemplo</h2>
                <SyntaxHighlighter language="cpp" style={dark}>
                    {exemplo_do_while_02}
                </SyntaxHighlighter>
                
                <br/>
                <p>
                    <h3>For</h3>
                    O comando for permite que um certo trecho de programa seja executado um determinado número de vezes
                </p>
                <br/>
                <h2>Sintaxe</h2>
                <SyntaxHighlighter language="cpp" style={dark}>
                    {sintaxe_for}
                </SyntaxHighlighter>

                <h2>Exemplo</h2>
                <SyntaxHighlighter language="cpp" style={dark}>
                    {exemplo_for}
                </SyntaxHighlighter>
                <br/>
                
            </div>

            <div className='links-div'>
                <Link to='/desafios' className='links-left'>
                    <CaretLeft size={16} />Nivel Desafios
                </Link>

                <Link to='/game-screen' className='links-right'>
                    Fazer Desafios<CaretRight size={16} />
                </Link>
            </div>
       
      </div>
    );

}