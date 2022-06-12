import { Link } from 'react-router-dom';
import { CaretLeft, CaretRight } from "phosphor-react";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import './style.css';


export default function Index(){
    const sintaxe_laco01 = '#include <stdio.h>\nint main(void)\n{\nint contador = 1; //declarando e inicializando a variável de controle\nwhile (contador <= 10) // Testando a condição\n{\nprintf("%d ", contador); //Executando um comando dentro do laço\ncontador++; //atualizando a variável de controle\n}  \nreturn 0;\n}';
    const sintaxe_laco02 = '#include<stdio.h>\nint main(void)\n{\nfloat nota1=0,nota2=0,media=0;\nint resp;\ndo\n{\nprintf("Digite a primeira nota: ");\nscanf("%f",&nota1);\nprintf("Digite a segunda nota: ");\nscanf("%f",&nota2);\nmedia = (nota1 + nota2)/2;\nprintf("Media do aluno = %f\n",media);\nprintf("Digite 1 para continuar ou 2 para sair\n");\nscanf("%d", &resp);\n}while (resp==1);\nreturn 0;\n}';
    const sintaxe_laco03 = '//Exemplo1: Programa usando loop for em C\n#include <stdio.h>\n#include <conio.h>\nint main(void)\n{\nint contador; //variável de controle do loop\nfor(contador = 1; contador <= 10; contador++)\n{\nprintf("%d ", contador);\n}\ngetch();\nreturn(0);\n}';
    
    return (
        
      <div className='body-text'> 
            
            <div>
                <h1>Laços de repetição</h1>
                <br/><br/>
                <p>
                    para evitar a repetição de códigos, uma das
                    maneiras consiste no uso dos laços de repetição.
                    <br/>
                    Este Nivel trata dos laços
                    de repetição utilizados na linguagem C
                    <br/>
                        Denominamos “laço” (loop em inglês) a uma estrutura de repetição.
                        <br/>
                        As estruturas de repetição, executam a repetição de um conjunto de instruções enquanto uma determinada condição é verdadeira.
                        <br/>
                    
                    <br/><br/>
                    <h2>Comando while</h2>
                        <p/>
                        No comando while a condição é testada antes do bloco de instruções, e caso a condição seja falsa a repetição não será executada.
                        <p/>
                   

                </p>
                <br/><br/>
                <h2>Sintaxe</h2>
                
                <SyntaxHighlighter language="cpp" style={dark}>
                    {sintaxe_laco01}
                </SyntaxHighlighter>
                <br/>
                <br/>

                   
                <h2>Comando Do... While</h2>
                
                <p/>
                    A diferença entre o comando while e o do…while é justamente o local onde a condição que controla o laço é testada.
                    
                    No comando while a condição é testada antes do bloco de instruções, e caso a condição seja falsa a repetição não será executada.
                    
                    No do…while o bloco de comandos é executado pelo menos uma vez de forma obrigatória, independente do resultado da expressão lógica.
                <p/>
                <br/>
                <h2>Sintaxe</h2>
              
                <SyntaxHighlighter language="cpp" style={dark}>
                    {sintaxe_laco02}
                </SyntaxHighlighter>
                
                
                 <br/><br/>  
                <h2>Utilização do comando for</h2>
               
                    <p/>
                        
                        O laço for é uma estrutura de repetição muito utilizada nos programas em C.
                        <br/>
                        É muito útil quando se sabe de antemão quantas vezes a repetição deverá ser executada.
                        <br/>
                        Este laço utiliza uma variável para controlar a contagem do loop, bem como seu incremento.
                        <br/>
                        Trata-se de um comando bem enxuto, já que própria estrutura faz a inicialização, incremento e encerramento do laço.
                        <br/>
                    <p/>
                    <br/>
                    <h2>Sintaxe</h2>
                <SyntaxHighlighter language="cpp" style={dark}>
                    {sintaxe_laco03}
                </SyntaxHighlighter>
                <br></br>
                <br/><br/>
                
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