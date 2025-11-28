"use client";

import Button from "@/components/Button";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import StyledNotFound from "@/styles/notFoundStyle";
import Link from "next/link";

const NotFound = () => {
  return (
    <>
      <Header />
      <StyledNotFound>
        <h1>
          Error 404 <br />
          Página não encontrada...
        </h1>
        <Link href={"/"}>
          <Button>Voltar</Button>
        </Link>
      </StyledNotFound>
      <Footer />
    </>
  );
};

export default NotFound;
