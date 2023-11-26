import api from "../../../../services/api";

export const getUserById = async (id, setLoading, alert) => {
    setLoading(true);

    try {
        const response = await api.get(`/user/${id}`);
        setLoading(false);
        return response.data;
    } catch (e) {
        setLoading(false);
        alert.error("Não foi possível carregar os dados do usuário");
    }
};