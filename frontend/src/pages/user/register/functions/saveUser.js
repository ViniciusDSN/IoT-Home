import api from "../../../../services/api";

export const saveUser = async (data, setLoading, alert, navigate) => {
    setLoading(true);

    try {
        const response = await api.post("/user", data);
        alert.show("Usuário criado com sucesso");
        localStorage.setItem('user', response.data.id);
        navigate("/devices");
        setLoading(false);
    } catch (e) {
        alert.error("Não foi possível criar o usuário, tente utilizar outro email");
        setLoading(false);
    }
};