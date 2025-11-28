"use client";

import Button from "@/components/Button";
import Footer from "@/components/Footer";
import Form from "@/components/Form";
import Header from "@/components/Header";
import PageParagraph from "@/components/PageParagraph";
import PageTitle from "@/components/PageTitle";
import { RootState } from "@/store";
import { setUser } from "@/store/slices/userSlice";
import StyledHome from "@/styles/styledHome";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  // Coletando os dados via Redux
  const userData = useSelector((state: RootState) => state.user.data);
  const dispatch = useDispatch();

  return (
    <>
      <Header />
      <StyledHome>
        <section className="hero-section">
          <PageTitle>
            Bem vindo(a)
            <br />
            ao programa de voluntáriado Lacrei Saúde
          </PageTitle>
          <PageParagraph>
            Nossas vagas de <strong>voluntáriado em Front-end</strong> estão
            abertas e contamos com a sua ajuda nesse momento, caso tenha
            interesse em participar, por favor preencha o formulário abaixo e
            logo entraremos em contato!
          </PageParagraph>
        </section>

        {userData.name !== "" && ( // Exibir apenas quando o form for preenchido
          <section className="user-section">
            <h3>Inscrição realizada com sucesso!</h3>
            <p>
              Agradecemos muito pelo seu interesse em participar do programa,{" "}
              <strong>{userData.name.split(" ")[0]}</strong>. Logo enviaremos no
              e-mail <strong>({userData.email})</strong> informado mais detalhes
              das próximas etapas.
            </p>
            <Button
              type="button"
              handleClick={() => {
                dispatch(setUser({ name: "", email: "" })); // Limpando o Redux, fingindo comportamento de voltar
              }}
            >
              Voltar
            </Button>
          </section>
        )}

        {userData.name === "" && ( // Exibir quando o Redux de User for vazio
          <section className="form-section">
            <Form />
            <Image
              className="image"
              src="/assets/img/welcome-image.svg"
              width={500}
              height={400}
              alt="Imagem de 4 pessoas segurando uma bandeira de boas vindas"
              loading="eager"
            />
          </section>
        )}
      </StyledHome>
      <Footer />
    </>
  );
};

export default Home;
