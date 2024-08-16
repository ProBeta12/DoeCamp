import React, { useState } from 'react';
import { PostApi } from '@/services/PostApi';

function FormCamp() {
    const [formData, setFormData] = useState({
        nome: "",
        descricao: "",
        valorAlvo: 0,
        arrecadado: 0,
        imagem: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: name === 'valorAlvo' || name === 'arrecadado' ? parseFloat(value) : value,
            
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Dados enviados:', formData);
        try {
            await PostApi(formData);
            alert('Campanha criada com sucesso!');
            setFormData({
                nome: "",
                descricao: "",
                valorAlvo: 0,
                arrecadado: 0,
                imagem: ""
            });
        } catch (error) {
            alert('Erro ao criar a campanha. Tente novamente.');
        }
    };

    return (
        <section className="max-w-4xl mx-auto md:max-w-[1200px] p-6 bg-white text-[#263741] shadow-lg">
            <h1 className="text-3xl font-bold text-[#263741] mb-4">Criar</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="nome" className="block text-lg font-semibold text-[#263741] mb-2">Nome da Campanha</label>
                    <input
                        type="text"
                        id="nome"
                        name="nome"
                        value={formData.nome}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded-lg"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="descricao" className="block text-lg font-semibold text-[#263741] mb-2">Descrição</label>
                    <textarea
                        id="descricao"
                        name="descricao"
                        value={formData.descricao}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded-lg"
                        rows="4"
                        required
                    ></textarea>
                </div>
                <div className="mb-4">
                    <label htmlFor="valorAlvo" className="block text-lg font-semibold text-[#263741] mb-2">Valor a Ser Atingido</label>
                    <input
                        type="number"
                        id="valorAlvo"
                        name="valorAlvo"
                        value={formData.valorAlvo}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded-lg"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="arrecadado" className="block text-lg font-semibold text-[#263741] mb-2">Arrecadado</label>
                    <input
                        type="number"
                        id="arrecadado"
                        name="arrecadado"
                        value={formData.arrecadado}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded-lg"
                        
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="imagem" className="block text-lg font-semibold text-[#263741] mb-2">Imagem URL</label>
                    <input
                        type="url"
                        id="imagem"
                        name="imagem"
                        value={formData.imagem}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded-lg"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="w-full py-2 px-4 bg-[#f8941c] text-white rounded-lg shadow-md hover:bg-[#e87a1d] transition duration-300"
                >
                    Enviar
                </button>
            </form>
        </section>
    );
}

export default FormCamp;
