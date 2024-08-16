import React from "react";

function QuadroCamp({ paginaAtual }) {
  const campanhas = [
    {
      nome: "Campanha 1",
      descricao: "Esta campanha visa fornecer recursos para a educação de crianças carentes.",
      valorAlvo: "R$ 10.000",
      arrecadado: "R$ 7.000",
      imagem: "/fake_img/f1.jpg",
    },
    {
      nome: "Campanha 2",
      descricao: "Apoie a construção de abrigos para famílias desabrigadas.",
      valorAlvo: "R$ 20.000",
      arrecadado: "R$ 22.000",
      imagem: "/fake_img/f2.jpg",
    },
    {
      nome: "Campanha 3",
      descricao: "Ajude na compra de suprimentos médicos para hospitais em áreas remotas.",
      valorAlvo: "R$ 15.000",
      arrecadado: "R$ 10.000",
      imagem: "/fake_img/f3.jpg",
    },
    {
      nome: "Campanha 4",
      descricao: "Contribua com alimentos para comunidades afetadas por desastres naturais.",
      valorAlvo: "R$ 8.000",
      arrecadado: "R$ 8.500",
      imagem: "/fake_img/f4.jpg",
    },
  ];

  return (
    <section 
    style={{ backgroundImage: `url('/logo/banner_fundo.png')` }}
    className="max-w-6xl mx-auto p-4 md:max-w-[1200px]">

      {campanhas.map((campanha, index) => {
        const arrecadadoValor = parseFloat(campanha.arrecadado.replace('R$ ', '').replace('.', '').replace(',', '.'));
        const valorAlvoValor = parseFloat(campanha.valorAlvo.replace('R$ ', '').replace('.', '').replace(',', '.'));
        const metaCompleta = arrecadadoValor >= valorAlvoValor;
        const faltaValor = valorAlvoValor - arrecadadoValor;
        const indicatorClass = metaCompleta ? 'meta-atendida' : 'meta-nao-atendida';

        return (
          <div key={index} className={`bg-white shadow-lg rounded-lg p-6 mb-6 flex relative campaign-indicator ${indicatorClass}`}>
            {paginaAtual === 'editar' && (
              <button className="absolute top-4 right-4 bg-blue-500 text-white py-1 px-3 rounded-lg shadow-md hover:bg-blue-600 transition duration-300">
                Editar
              </button>
            )}
            {paginaAtual === 'excluir' && (
              <button className="absolute top-4 right-4 bg-red-500 text-white py-1 px-3 rounded-lg shadow-md hover:bg-red-600 transition duration-300">
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
              <p className="text-[#f8941c] font-semibold mt-2">Meta: {campanha.valorAlvo}</p>
              <p className="text-green-600 font-semibold mt-1">Arrecadado: {campanha.arrecadado}</p>
              <p className={`font-semibold mt-1 ${metaCompleta ? 'text-green-500' : 'text-red-500'}`}>
                {metaCompleta ? 'Meta Atingida!' : `Falta: R$ ${faltaValor.toFixed(2).replace('.', ',')}`}
              </p>
              <div className="mt-4 flex space-x-4">
                <button className="py-2 px-4 bg-[#f8941c] text-white rounded-lg shadow-md hover:bg-[#e87a1d] transition duration-300">
                  Apoiar Campanha
                </button>
                <button className="bg-[#263741] text-white py-2 px-4 rounded-lg shadow-md hover:bg-[#1d2a32] transition duration-300">
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
