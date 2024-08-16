export const GetApi = async () => {
    try {
      const response = await fetch("http://localhost:5000/campanhas");
      if (!response.ok) {
        throw new Error(`Erro HTTP! Status: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Erro ao buscar as campanhas:", error);
      throw error;
    }
  };