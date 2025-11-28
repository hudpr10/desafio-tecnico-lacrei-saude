"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PageParagraph from "@/components/PageParagraph";
import PageTitle from "@/components/PageTitle";
import StyledHelp from "@/styles/styledHelp";

const Home = () => {
  return (
    <>
      <Header />
      <StyledHelp>
        <section>
          <PageTitle>Esclarecimento</PageTitle>
          <PageParagraph>
            Esse projeto <strong>não é oficial</strong> da Lacrei Saúde, foi
            desenvolvido com o objetivo de realizar o desafio técnico proposto.
            Abaixo será explicado o funcionamento da aplicação.
          </PageParagraph>
          <PageParagraph>
            O projeto foi feito com as seguintes tecnologias:{" "}
            <strong>Next.js + styled-components + Typescript.</strong> E
            utilizando o principio <strong>Mobile First.</strong>
          </PageParagraph>
        </section>
        <section>
          <PageTitle>Funcionalidades</PageTitle>

          <PageParagraph>
            <strong>1.</strong> A funcionalidade é simples, possuí um formulário
            com os campos de Nome e E-mail e um botão par enviar esses dados.
            Obs: nenhum dado é realmente coletado.
          </PageParagraph>
          <PageParagraph>
            <strong>2.</strong> Ao preencher os campos e clicar no botão a
            interface se altera, exibindo o usuário que foi &quot;inscrito&quot;
            no voluntáriado.
          </PageParagraph>
          <PageParagraph>
            <strong>3.</strong> Após a interação o usuário pode voltar ao estado
            inicial da aplicação clicando no botão <strong>voltar.</strong>
          </PageParagraph>
          <PageParagraph>
            <strong>4.</strong> Também possuí a funcionalidade de alterar a cor
            de fundo, entre tema escuro e claro. Basta clicar no botão no topo
            da tela <strong>Modo Escuro/Modo Claro</strong> (para telas maiores)
            ou no ícone personalizado da <strong>Lua/Sol</strong> (para telas
            menores).
          </PageParagraph>
          <PageParagraph>
            <strong>5.</strong> O tema fica armazenado no localmente no
            navegador, então ao acessar a página ele irá alterar automaticamente
            no seu último estado.
          </PageParagraph>
        </section>
        <section>
          <PageTitle>Agradecimentos</PageTitle>
          <PageParagraph>
            Agradeço imensamente pela oportunidade, espero que gostem do
            projeto, pois desenvolver ele foi muito desafiador e divertido.
            Desejo todo sucesso aos responsáveis e espero ver vocês em breve!
          </PageParagraph>
        </section>
      </StyledHelp>
      <Footer />
    </>
  );
};

export default Home;
