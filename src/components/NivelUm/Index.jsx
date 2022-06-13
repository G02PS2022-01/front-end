import { Link } from 'react-router-dom';
import { CaretLeft, CaretRight } from "phosphor-react";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import './style.css';
import imgVar from '../../assets/img/TiposVar.png';
import imgOp from '../../assets/img/TiposOp.png';


export default function Index(){
    
    const exemplo_var_01 = 'int nota_1; float _media;';
    const exemplo_var_02 = '/∗ Exemplo de uso da scanf ∗/\n2 #include<stdio.h>\n3 int main(){\n4 int a1 = 10, a2, a3, a4; float x = 10.0/3;\n5 scanf("%d %d %d %d", &a1, &a2, &a3, &a4);\n6 printf("%d %d %d %d", a1∗a1, a2∗a2,a3∗a3,a4∗a4);\n7 return 0;\n8 }';


    return (
        
      <div className='body-text'> 
            
            <div>
                <h1>Nivel 01</h1>
                <br/><br/>
                <h1>Tipos de dados/Operadores</h1>
                <p>
                Em programas estruturados, as variáveis permitem a manipulação de dados
                para realização de alguma computação;
                <br/>
                Para cada tipo de dado existe um tipo de variável, mas em geral elas se
                separam em inteiras e decimais.
                <br/>
                Para realizar algum tipo de computação, geralmente utiliza-se as variáveis
                combinadas com uma série de operadores
                </p>
                <br/>
                <h1>Variáveis</h1>
                <p>
                <br/>Elas são criadas no início da execução do seu programa
                e armazenam dados e permitem operações sobre elas.
                <br/>
                 O nome da variável pode iniciar com uma letra
                ou underline e seguir com uma sequência de letras e números.
                <br/>A linguagem C é case sensitive o que indica que Nome é diferente de nome que por sua vez difere de
                NoMe, e assim por diante.
                <br/>
                </p>
                <br/>
                <h2>Exemplos</h2>
                <SyntaxHighlighter language="cpp" style={dark}>
                    {exemplo_var_01}
                </SyntaxHighlighter>
                <br />

                <div class="var">
                    <img src= {imgVar} />
                </div>

                <h1>Entrada e saída padrão</h1>
                <p>
                 Na linguagem C, as funções que permitem realizar entrada e saída de dados nas
                formas padrão são printf e scanf.
                <br/>
                A função printf funciona da seguinte maneira: ela toma como parâmetro (parâmetros são dados que enviamos às funções, separadas por vírgula). 
                <br/>
                 O primeiro parâmetro é uma string1 que pode ou não ter caracteres especiais de formatação.
                <br/>
                Por exemplo, se na string houver um %d, então a função printf esperará por uma
                variável ou expressão que resulte em um dado do tipo inteiro.
                <br/>
                 Ele substituirá o valor desta expressão ou variável no lugar do %d na string de formatação.
                </p>

                <br/>
                <h2>Exemplos</h2>
                <SyntaxHighlighter language="cpp" style={dark}>
                    {exemplo_var_02}
                </SyntaxHighlighter>
                <br />

                <h1>Tabela de operadores aritméticos</h1>
                <div class="op">
                    <img src= {imgOp} />
                </div>
                <br/>
                <p1/>
                Ao final deste estudo o usuário será capaz de compreender os tipos de variáveis, de operadores lógicos e comandos de entrada e saída de dados
                <br/>
                BOA SORTE !!!
                <br/>
                <p1/>
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