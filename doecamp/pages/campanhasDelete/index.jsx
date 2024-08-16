import React from "react";
import NavBar from "@/components/NavBar/NavBar";
import QuadroCamp from "@/components/quadroCamp/QuadroCamp";
import IntroducaoPag from "@/components/cards/IntroducaoPag";
import Footer from "@/components/footer/footer";
import "../../app/globals.css";
function index() {
  return (
    <>
      <NavBar />
      <IntroducaoPag
        title="Excluir Campanha"
        description="Você está prestes a remover uma campanha do sistema. Esta ação é irreversível e excluirá todas as informações associadas à campanha selecionada. Certifique-se de que deseja prosseguir com a exclusão. Caso tenha dúvidas ou queira manter a campanha, por favor, cancele a operação."
      />
      <QuadroCamp paginaAtual="excluir" />
      <Footer />
    </>
  );
}

export default index;
