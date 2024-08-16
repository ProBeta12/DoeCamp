import React from "react";

function ApresentacaoCard() {
  return (
    <section
      className="bg-cover bg-center min-h-screen max-w-full md:max-w-[1200px] mx-auto flex flex-col justify-between items-center text-center p-4"
      style={{ backgroundImage: `url('/logo/banner_fundo.png')` }}
    >
      <div className="flex flex-col justify-center flex-grow mt-6">
        <h1 className="text-3xl sm:text-4xl md:text-5xl text-[#263741] font-bold mb-4">
          Bem-vindo ao DoeCamp!
        </h1>
        <p className="text-md sm:text-lg md:text-xl lg:text-2xl text-[#263741] ">
          Aqui no DoeCamp, acreditamos no poder das doações para transformar
          vidas. Junte-se a nós para apoiar campanhas que fazem a diferença!
        </p>
      </div>

      <div className="">
        <img
          src="/logo/banner_1.png"
          alt="Imagem de Apresentação"
          className="w-auto"
        />
      </div>
    </section>
  );
}

export default ApresentacaoCard;
