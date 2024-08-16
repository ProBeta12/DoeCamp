export const DeleteApi = async (id) => {
    try {
        const response = await fetch(`http://localhost:5000/campanhasDelete/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        });
        if (!response.ok) {
            throw new Error(`Erro HTTP! Status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error("Erro ao excluir a campanha:", error);
        throw error;
    }
};
