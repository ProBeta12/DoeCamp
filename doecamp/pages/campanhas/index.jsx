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
        title="Visualizar Campanha"
        description="Bem-vindo à nossa página de campanhas! Aqui você pode explorar uma variedade de iniciativas criadas para apoiar diferentes causas. Cada campanha tem um objetivo único e impacto significativo na comunidade. Navegue pelas campanhas, descubra quais são as mais urgentes e veja como você pode contribuir para fazer a diferença."
      />

      <QuadroCamp />
      <Footer />
    </>
  );
}

export default index;
