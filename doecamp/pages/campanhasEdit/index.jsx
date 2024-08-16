import React from "react";
import NavBar from "@/components/NavBar/NavBar";
import IntroducaoPag from "@/components/cards/IntroducaoPag";
import QuadroCamp from "@/components/quadroCamp/QuadroCamp";
import Footer from "@/components/footer/footer";
import "../../app/globals.css";
function index() {
  return (
    <>
      <NavBar />
      <IntroducaoPag
        title="Editar Campanha"
        description="Nesta seção, você pode atualizar as informações da campanha selecionada. Faça as alterações necessárias e salve para garantir que sua campanha reflita as mudanças que você deseja. Certifique-se de revisar todos os campos antes de confirmar a edição."
      />
      <QuadroCamp paginaAtual="editar" />
      <Footer />
    </>
  );
}

export default index;
