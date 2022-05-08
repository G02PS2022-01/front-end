import React from 'react'

export default function Conteudo(props) {
  switch (props.itemSelected) {
    case 'data':
    default:
      return (
        <div id="data">
          <h2 className="title">Tipos de Dados</h2>
          <div className="meaning">
            <p>
              Em C, as variáveis têm seu tipo pré-definido no código, ou,
              dizemos que seu tipo é estático. Em princípio, o tipo de uma
              variável não pode ser mudado, embora possa ser contornado através
              de operações especiais como o type casting.
              <br />
              Os principais tipos de dados em C são:
            </p>
          </div>
          <div className="meaning">
            <h2>O tipo de dado inteiro: int</h2>
            <br />
            <p>
              Este tipo de dado serve para armazenar, especificamente, dados
              numéricos do tipo inteiro.
              <details>
                <p>EXEMPLO:</p>
                <br />
                <p id="example">
                  int idade;
                  <br />
                  idade = 18;
                </p>
              </details>
            </p>
          </div>
          <div className="meaning">
            <h2>Tipo de dado caractere: char</h2>
            <br />
            <p>
              Além de números inteiros, podemos também armazenar caracteres, ou
              seja, letras. <br />
              Para isso, usamos a palavra-chave char (de character, do inglês).
              <details>
                <p>EXEMPLO:</p>
                <br />
                <p id="example">
                  char letra; <br />
                  letra = 'C';
                </p>
              </details>
            </p>
          </div>
          <div className="meaning">
            <h2>Tipo de dado flutuante: float e double</h2>
            <br />
            <p>
              Já aprendemos a lidar com números inteiros. Porém, nem tudo na
              vida é um número inteiro, como sua idade. <br />
              Muitas vezes, precisamos trabalhar com valores fracionados, ou
              seja, 'quebrados'.
              <details>
                <p>EXEMPLO:</p>
                <br />
                <p id="example">
                  float preco;
                  <br />
                  preco = 14.99;
                </p>
                <p>
                  Note que usamos ponto (.) ao invés de vírgula (,). É assim que
                  usamos em programação
                </p>
              </details>
            </p>
          </div>
          <div className="meaning">
            <h2>O tipo de dado Booleano: bool</h2>
            <br />
            <p>
              Você já deve ter ouvido falar que na computação (ou na tecnologia,
              de um modo geral), é tudo 1 ou 0, não é? <br />
              De fato, os valores 1 e 0, são muito importantes, pois representam
              verdadeiro e falso, consecutivamente.
              <br />
              Existe um tipo de dado para armazenar somente informações do tipo
              true/false (chamados de booleanos), o bool.
              <details>
                <p>EXEMPLO:</p>
                <br />
                <p id="example">
                  bool verdade;
                  <br />
                  verdade = true;
                </p>
              </details>
            </p>
          </div>
        </div>
      )
    case 'functions':
      return (
        <div id="functions">
          <h2 className="title">Funções</h2>
          <div className="meaning">
            <p>
              Uma função é um bloco de código reutilizável que diz a um
              computador para fazer uma coisa específica. As funções geralmente
              pegam informações, processam e retornam um resultado.
            </p>
          </div>
          <div className="meaning">
            <h2>Como declarar funções em C</h2>
            <br />
            <p>
              A sintaxe de uma função é a seguinte .
              <details>
                <p>EXEMPLO:</p>
                <br />
                <p id="example">
                  tipo_de_retorno nome_da_função(lista de parâmetros)
                  <br />
                  código da função
                </p>
                <p>
                  E para invocar a função basta usar o comando:
                  nome_da_função(lista de argumentos).
                </p>
              </details>
            </p>
          </div>
        </div>
      )
    case 'variables':
      return (
        <div id="variables">
          <h2 className="title">Variáveis</h2>
          <div className="meaning">
            <p>
              Variável é um local reservado na memória para armazenar um tipo de
              dado. Toda variável deve ter um identificador, ou seja um nome.
              Além de ter um nome, a variável também precisa ter um tipo. O tipo
              de dado de uma variável determina o que ela é capaz de armazenar.
              <br />
              Os principais tipos são <b>char, int, double, float e bool</b>.
            </p>
          </div>
          <div className="meaning">
            <p>
              <b>Bool</b>: em geral, utiliza 1 byte da memória e os valores True
              ou False.
            </p>
          </div>
          <div className="meaning">
            <p>
              <b>Char</b>: em geral, utiliza 1 byte da memória, permite
              armazenar um caractere ou uma cadeia de caracteres.
            </p>
          </div>
          <div className="meaning">
            <p>
              <b>Int</b>: em geral, utiliza 4 bytes de memória e armazena
              números inteiros (sem casas decimais) com valores que vão de
              -2.147.483.648 a 2.147.483.647.
            </p>
          </div>
          <div className="meaning">
            <p>
              <b>Double</b>: em geral, utiliza 8 bytes de memória e armazena
              números com menos de 15 casas decimais com valores que vão de
              2.2e-308 a 1.79e308.
            </p>
          </div>
          <div className="meaning">
            <p>
              <b>Float</b>: em geral, utiliza 4 bytes de memória e armazena
              números com menos de seis casas decimais com valores de vão de
              1.2e-308 a 3.4e-38.
            </p>
          </div>
        </div>
      )
    case 'math':
      return (
        <div id="math">
          <h2 className="title">Operadores Aritméticos</h2>
          <div className="meaning">
            <p>
              Os operadores matemáticos são usados ​​para realizar operações
              aritméticas em números.
            </p>
          </div>
          <div className="meaning">
            <h2>Operador adição</h2>
            <br />
            <p>
              O operador + adiciona dois valores juntos. Este operador também
              pode ser usado para combinar strings.
              <details>
                <p>EXEMPLO:</p>
                <br />
                <p id="example">
                  var resultado = 10 + 5 ; <br />
                  var meuNome = 'Wanderson' + ' Bueno' ;
                </p>
                <p>
                  A variável <span>resultado</span> armazena o número 15.
                  <br />A variável <span>meuNome</span> armazena a string
                  'Wanderson Bueno'.
                </p>
              </details>
            </p>
          </div>
          <div className="meaning">
            <h2>Operador subtração</h2>
            <br />
            <p>
              O operador - subtrai o número do lado direito do operador do
              número do lado esquerdo.
              <details>
                <p>EXEMPLO:</p>
                <br />
                <p id="example">var resultado = 10 - 2 ;</p>
                <p>
                  A variável <span>resultado</span> armazena o número 8.
                </p>
              </details>
            </p>
          </div>
          <div className="meaning">
            <h2>Operador de multiplicação</h2>
            <br />
            <p>
              O operador * multiplica o número do lado esquerdo do operador pelo
              número do lado direito.
              <details>
                <p>EXEMPLO:</p>
                <br />
                <p id="example">var resultado = 10 * 5 ;</p>
                <p>
                  A variável <span>resultado</span> armazena o número 50.
                </p>
              </details>
            </p>
          </div>
          <div className="meaning">
            <h2>Operador de divisão</h2>
            <br />
            <p>
              O operador /, divide o número do lado esquerdo do operador pelo
              número do lado direito.
              <details>
                <p>EXEMPLO:</p>
                <br />
                <p id="example">var resultado = 10 / 5 ;</p>
                <p>
                  A variável <span>resultado</span> armazena o número 2.
                </p>
              </details>
            </p>
          </div>
          <div className="meaning">
            <h2>Operador de divisão</h2>
            <br />
            <p>
              O operador %, retorna o resto da divisão do número à esquerda do
              operador pelo número à direita.
              <details>
                <p>EXEMPLO:</p>
                <br />
                <p id="example">
                  var resultado = 10 % 5 ;<br /> var resultadoComResto = 12 % 5;
                </p>
                <p>
                  A variável <span>resultado</span> armazena 0, porque 10/5 tem
                  um resto de 0. <br />A variável <span>resultadoComResto</span>{' '}
                  armazena 2, porque 12/5 tem um resto 2.
                </p>
              </details>
            </p>
          </div>
        </div>
      )
    case 'assignment':
      return (
        <div id="assignment">
          <h2 className="title">Operadores de Atribuição</h2>
          <div className="meaning">
            <p>
              Os operadores de atribuição são usados ​​para fornecer valores a
              variáveis. Eles definem o valor à direita do operador de
              atribuição para a variável à esquerda.
            </p>
          </div>
          <div className="meaning">
            <h2>Operador de Atribuição</h2>
            <br />
            <p>
              O operador <span>=</span> atribui um valor a uma variável.
              <details>
                <p>EXEMPLO:</p>
                <br />
                <p id="example">var meuNumero = 10 ;</p>
                <p>
                  A variável <span>meuNumero</span> armazenará o número 10.
                </p>
              </details>
            </p>
          </div>
          <div className="meaning">
            <h2>Operador de Atribuição de Adição</h2>
            <br />
            <p>
              O operador <span>+=</span> adiciona o valor à direita do operador
              à variável e atribui o resultado à variável.
              <details>
                <p>EXEMPLO:</p>
                <br />
                <p id="example">
                  var meuNumero = 10 ;<br /> meuNumero += 5 ;
                </p>
                <p>
                  A variável <span>meuNumero</span> armazenará o número 15.
                </p>
              </details>
            </p>
          </div>
          <div className="meaning">
            <h2>Operador de Atribuição de subtração</h2>
            <br />
            <p>
              O operador <span>-=</span> subtrai o valor à direita do operador
              da variável e atribui o resultado à variável.
              <details>
                <p>EXEMPLO:</p>
                <br />
                <p id="example">
                  var meuNumero = 10 ;<br /> meuNumero -= 5 ;
                </p>
                <p>
                  A variável <span>meuNumero</span> armazenará o número 5.
                </p>
              </details>
            </p>
          </div>
        </div>
      )
    case 'comparison':
      return (
        <div id="comparison">
          <h2 className="title">Operadores de comparação</h2>
          <div className="meaning">
            <p>
              Os operadores de comparação são usados ​​para comparar valores.
              Eles retornam <span>true</span> ou <span>false</span> com base no
              fato de uma comparação ser verdadeira ou falsa.
            </p>
          </div>
          <div className="meaning">
            <h2>Operador de igualdade</h2>
            <br />
            <p>
              O operador === retorna true quando 2 valores (números, strings,
              variáveis, etc.) são estritamente iguais entre si. Para serem
              estritamente iguais, os valores devem ser iguais e ter o mesmo
              tipo de dados.
              <details>
                <p>EXEMPLO:</p>
                <br />
                <p id="example">
                  console.log( 5 === 5 ); <br />
                  console.log( '5' === 5 );
                </p>
                <p>
                  A primeira linha de código compara se o número 5é estritamente
                  igual ao número 5. Como eles são iguais em valor e tipo de
                  dados, o código imprime true. <br />A segunda linha de código
                  compara se a string ‘5’é estritamente igual ao número 5.
                  Embora sejam iguais em valor, não são iguais em tipo de dados,
                  portanto, o código imprime false.
                </p>
              </details>
            </p>
          </div>
        </div>
      )
    case 'logical':
      return (
        <div id="logical">
          <h2 className="title">Operadores lógicos</h2>
          <div className="meaning">
            <p>
              Os operadores lógicos são usados ​​para combinar várias expressões
              em um valor true ou false.
            </p>
          </div>
          <div className="meaning">
            <h2>Operador E (And)</h2>
            <br />
            <p>
              O operador && retorna true se os lados esquerdo e direito do
              operador forem ambos true. Caso contrário, ele retorna false.
              <details>
                <p>EXEMPLO:</p>
                <br />
                <p id="example">
                  if (1 menor 2 && 5 maior 0)
                  <br /> printf('Sim')
                  <br />
                  else <br /> printf('Não')
                </p>
                <p>
                  Como o número 1 é menor que o número 2 E o número 5 é maior
                  que o número 0, o teste da instrução if é verdadeiro
                </p>
              </details>
            </p>
          </div>
          <div className="meaning">
            <h2>Operador OU (or)</h2>
            <br />
            <p>
              O operador || retorna true se o lado esquerdo ou direito do
              operador for true. Ele retorna false apenas se ambos os lados
              forem false.
              <details>
                <p>EXEMPLO:</p>
                <br />
                <p id="example">
                  if (2 === 4 || 1+1 === 2)
                  <br /> printf('Pelo menos um é verdadeiro')
                  <br />
                  else <br /> printf('Ambos são falsos')
                </p>
                <p>
                  Embora o número 2 não seja igual ao número 4, 1+1 é igual a 2.
                  Como o lado direito é verdadeiro, o teste da instrução if é
                  verdadeiro e o código imprime, 'Pelo menos um é verdade'.
                </p>
              </details>
            </p>
          </div>
        </div>
      )
  }
}
