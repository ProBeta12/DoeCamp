import React from "react";
import NavBar from "@/components/NavBar/NavBar";
import IntroducaoPag from "@/components/cards/IntroducaoPag";
import Footer from "@/components/footer/footer";
import FormCamp from "@/components/FormCamp/FormCamp";
import "../../app/globals.css";
function index() {
  return (
    <>
      <NavBar />
      <IntroducaoPag
        title="Criar Nova Campanha"
        description="Bem-vindo à seção de criação de campanhas! Aqui, você pode iniciar uma nova campanha para arrecadar fundos para uma causa importante. Preencha todos os detalhes necessários, como o nome da campanha, descrição, meta financeira e imagem. Garanta que todas as informações estejam corretas para impactar positivamente sua causa."
      />
    <FormCamp />
      <Footer />
    </>
  );
}

export default index;
