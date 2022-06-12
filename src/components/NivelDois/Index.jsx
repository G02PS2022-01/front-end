import { Link } from 'react-router-dom';
import { CaretLeft, CaretRight } from "phosphor-react";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import './style.css';


export default function Index(){
    const sintaxe_if = 'if( Condição ){ \n  bloco_if \n}else{\n  bloco_else \n}';
    const exemplo_if_01 = 'int idade = 60;\n\nif(idade < 18){ \n  printf("Menor de idade");\n }else if(idade >= 18 && idade < 60){\n  printf("Maior de idade");\n}else{\n  printf("Idoso");\n} ';
    const exemplo_if_02 = 'int idade = 60;\n\nif(idade < 18){\n  printf("Menor de idade");\n}else if(idade >= 18 && idade < 60){\n  printf("Maior de idade");\n}else{\n  printf("Idoso");\n}';

    const exemplo_switch_01 = 'switch( valor de um numero inteiro ){\n case 1:\n  Bloco_switch\n  break;\n case 2:\n   Bloco_switch\n   break;\n deault:\n   bloco_de_nenhuma_apcao_acima\n}';
    const exemplo_switch_02 = 'switch(codigo_lanche){\n case 1:\n  x_tudo = 15;\n  break;\n case 2:\n  pizza = 25\n  break;\n case 3:\n  sushi = 100;\n  break;\n deault:\n  printf("Opcao Invalida");\n}';

    const exemplo_ot_01 = 'Condição ? verdadeiro: falso';
    const exemplo_ot_02 = "int valor = (opcao == 'S' ) ? 25: 50; ";

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

                <br/>
                <h1>Switch Case</h1>
                <p>
                    O Switch Case é um seletor que fornece multiplas opções, ele permite avaliar uma variável ou expressão que resulte em um inteiro.
                    É muito utilizado, principalmente para uso em estruturas de menu, devido sua forma de reduzir a complexidade de varios if-else.
                </p>
                <br/>
                <h2>Sintaxe</h2>
                <SyntaxHighlighter language="cpp" style={dark}>
                    {exemplo_switch_01}
                </SyntaxHighlighter>
                <br/>
                <p>

                </p>
                <br/>
                <h2>Exemplos</h2>
                <SyntaxHighlighter language="cpp" style={dark}>
                    {exemplo_switch_02}
                </SyntaxHighlighter>
                <br/>
                <h1>Operador Ternário</h1>
                <p>
                    O operador ternario serve como uma alternativa para substituir if-else, 
                    devido sua forma reduzida tendo duas opções Verdadeiro(True) ou Falso(False).
                </p>
                <h2>Sintaxe</h2>
                <SyntaxHighlighter language="cpp" style={dark}>
                    {exemplo_ot_01}
                </SyntaxHighlighter>
                <br/>
                <h2>Exemplos</h2>
                <SyntaxHighlighter language="cpp" style={dark}>
                    {exemplo_ot_02}
                </SyntaxHighlighter>
                <br/>

            </div>
            <br/>
            

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