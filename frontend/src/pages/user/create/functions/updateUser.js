import api from "../../../../services/api";

export const updateUser = async (id, data, setLoading, alert, navigate) => {
    setLoading(true);

    try {
        await api.put(`/user/${id}`, data);
        setLoading(false);
        alert.show("Usuário editado com sucesso");
        navigate("/");
    } catch (e) {
        setLoading(false);
        alert.error("Não foi possível editar o usuário");
    }
}