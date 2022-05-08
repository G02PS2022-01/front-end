import React from "react";
import "./wc.css";
import wc1 from "../../assets/img/img-wahtcoding/wc1.svg";
import wc2 from "../../assets/img/img-wahtcoding/wc-2.svg";
import wc3 from "../../assets/img/img-wahtcoding/wc-3.svg";
import wc4 from "../../assets/img/img-wahtcoding/wc-4.svg";
import wc5 from "../../assets/img/img-wahtcoding/wc-5.svg";

const WhatCoding = () => {
  return (
    <section className="section  " id="what-coding">
      <div className="container">
        <div className="pr-bloco">
          <div>
            <h2 className="title">O que é Programação (Coding)</h2>
            <p>
              A codificação, às vezes chamada de programação de computadores, é
              como nos comunicamos com os computadores. O código informa ao
              computador quais ações devem ser tomadas, e escrever código é como
              criar um conjunto de instruções. Aprendendo a escrever código,
              você pode dizer aos computadores o que fazer ou como se comportar
              de uma maneira muito mais rápida. Você pode usar essa habilidade
              para criar sites e aplicativos, processar dados e fazer muitas
              outras coisas legais.
            </p>
          </div>

          <div>
            <h2 className="title">Por que aprender a Programar?</h2>
            <p>
              Todos nós temos esperanças, sonhos e planos para o futuro. Se você
              está procurando uma nova oportunidade, deseja otimizar seu
              trabalho atual ou está simplesmente procurando por um novo hobby,
              a codificação pode ajudá-lo a se aproximar de seus objetivos. E
              lembre-se, qualquer um pode aprender a Programar!
            </p>
          </div>
        </div>

        <div className="sd-bloco">
          <div>
            <h2 className="title">Aprenda habilidades que abrirão portas</h2>
            <p>
              Os empregos em informática e tecnologia da informação estão
              crescendo incrivelmente rápido nos Estados Unidos e em todo o
              mundo. Você não precisa de um diploma de Ciência da Computação; há
              mais e mais empregos bem remunerados surgindo todos os dias para
              alunos mais novos como você.
            </p>
          </div>
          <div className="ult-img">
            <img className="img-right" src={wc4} />
          </div>
        </div>

        <div className="tr-bloco">
          <div className="ult-img">
            <img className="img-left" src={wc3} />
          </div>
          <div>
            <h2 className="title"> Faça coisas legais</h2>
            <p>
              Sempre quis fazer um aplicativo ou um site? Código faz isso.
              Também pode ajudá-lo a automatizar uma planilha ou criar novas
              ferramentas para sua comunidade. Aprender a codificar torna
              possível imaginar as coisas que você quer fazer e realmente
              construí-las.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatCoding;
