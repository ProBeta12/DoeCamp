import React from "react";
import NavBar from "../components/NavBar/NavBar";
import ApresentacaoCard from "../components/cards/ApresentacaoCard";
import PagesCard from "../components/cards/PagesCard";
import Footer from "../components/footer/footer";
import '../app/globals.css'
function index() {
  return (
    <>
      <NavBar />
      <ApresentacaoCard />
      <PagesCard
        title="Explore Nossas Campanhas!"
        description="Na nossa página de campanhas, você encontrará uma coleção diversificada de iniciativas que estão transformando vidas e comunidades ao redor do mundo. Cada campanha é cuidadosamente selecionada para garantir que você tenha a oportunidade de apoiar causas significativas e impactantes."
        buttonText="Ver Todas as Campanhas"
        buttonLink="/campanhas"
        backgroundImage=""
      />
      <PagesCard
        title="Edite Suas Campanhas!"
        description="Ajuste os detalhes das campanhas que você criou para garantir que elas continuem a fazer a diferença. Atualize informações, metas e mais para maximizar o impacto da sua iniciativa."
        buttonText="Editar Campanhas"
        buttonLink="/campanhasEdit"
        backgroundImage=""
      />
      <PagesCard
        title="Crie Sua Própria Campanha!"
        description="Temos o prazer de apoiar a criação de novas campanhas. Use nossa plataforma para começar sua própria iniciativa e fazer a diferença. Preencha os detalhes e nos ajude a transformar ideias em ações."
        buttonText="Criar Nova Campanha"
        buttonLink="/campanhasCriar"
        backgroundImage="/logo/banner_fundo.png"
      />
      
      <PagesCard
        title="Deletar Campanhas"
        description="Se você precisa remover uma campanha que não está mais em andamento, este é o lugar certo. Confirme sua decisão e mantenha nossa plataforma atualizada."
        buttonText="Deletar Campanha"
        buttonLink="/campanhasDelete"
        backgroundImage="/logo/banner_fundo.png"
      />

      <Footer />
    </>
  );
}

export default index;
