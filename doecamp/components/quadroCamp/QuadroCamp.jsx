import React, { useEffect, useState } from "react";
import { GetApi } from "@/services/GetApi";
import { DeleteApi } from "@/services/DeleteApi";

function QuadroCamp({ paginaAtual }) {
  const [campanhas, setCampanhas] = useState([]);

  useEffect(() => {
    const getCampanhas = async () => {
      try {
        const data = await GetApi();
        setCampanhas(data);
      } catch (error) {
        console.error("Erro ao buscar as campanhas:", error);
      }
    };
    getCampanhas();
  }, []);

  const handleEdit = () => {
    alert("A funcionalidade de edição ainda não está disponível. Por favor, tente novamente mais tarde.");
  };
  
  const handleDoar = () => {
    alert("A funcionalidade de doação ainda não está disponível. Por favor, tente novamente mais tarde.");
  };
  
  const handleDetalhes = () => {
    alert("A funcionalidade de detalhes ainda não está disponível. Por favor, tente novamente mais tarde.");
  };
  const handleDelete = async (id) => {
    if (window.confirm("Tem certeza de que deseja excluir esta campanha?")) {
      try {
        await DeleteApi(id);
        setCampanhas(campanhas.filter(campanha => campanha._id !== id));
        alert("Campanha excluída com sucesso!");
      } catch (error) {
        alert("Erro ao excluir a campanha. Tente novamente.");
      }
    }
  };


  return (
    <section 
    style={{ backgroundImage: `url('/logo/banner_fundo.png')` }}
    className="max-w-6xl mx-auto p-4 md:max-w-[1200px]">

      {campanhas.map((campanha) => {
        const metaCompleta = campanha.arrecadado >= campanha.valorAlvo;
        const faltaValor = campanha.valorAlvo - campanha.arrecadado;
        const indicatorClass = metaCompleta ? "meta-atendida" : "meta-nao-atendida";

        return (
          <div key={campanha._id} className={`bg-white shadow-lg rounded-lg p-6 mb-6 flex relative campaign-indicator ${indicatorClass}`}>
            {paginaAtual === 'editar' && (
              <button 
              onClick={() => handleEdit()}
              className="absolute top-4 right-4 bg-blue-500 text-white py-1 px-3 rounded-lg shadow-md hover:bg-blue-600 transition duration-300">
                Editar
              </button>
            )}
            {paginaAtual === 'excluir' && (
              <button 
              onClick={() => handleDelete(campanha._id)}
              className="absolute top-4 right-4 bg-red-500 text-white py-1 px-3 rounded-lg shadow-md hover:bg-red-600 transition duration-300">
                Excluir
              </button>
            )}
            <img
              src={campanha.imagem}
              alt={campanha.nome}
              className="sm:block hidden w-1/3 h-auto rounded-lg mr-6 object-cover"
            />
            <div className="flex flex-col items-center sm:items-start">
              <h2 className="text-2xl font-bold text-[#263741]">{campanha.nome}</h2>
              <p className="text-gray-600 mt-2">{campanha.descricao}</p>
              <p className="text-[#f8941c] font-semibold mt-2">Meta: R$ {campanha.valorAlvo}</p>
              <p className="text-green-600 font-semibold mt-1">Arrecadado: R$ {campanha.arrecadado}</p>
              <p className={`font-semibold mt-1 ${metaCompleta ? 'text-green-500' : 'text-red-500'}`}>
                {metaCompleta ? 'Meta Atingida!' : `Falta: R$ ${faltaValor.toFixed(2).replace('.', ',')}`}
              </p>
              <div className="mt-4 flex space-x-4">
                <button 
                onClick={() => handleDoar()}
                className="py-2 px-4 bg-[#f8941c] text-white rounded-lg shadow-md hover:bg-[#e87a1d] transition duration-300">
                  Apoiar Campanha
                </button>
                <button 
                onClick={() => handleDetalhes()}
                className="bg-[#263741] text-white py-2 px-4 rounded-lg shadow-md hover:bg-[#1d2a32] transition duration-300">
                  Detalhes
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}

export default QuadroCamp;
