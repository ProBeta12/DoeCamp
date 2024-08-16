export const PostApi = async (data) => {
    try {
      const response = await fetch("http://localhost:5000/campanhasCriar", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error(`Erro HTTP! Status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error("Erro ao criar a campanha:", error);
      throw error;
    }
  };

