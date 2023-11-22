import api from "../../../../services/api";

export const checkUser = async (data, setLoading, alert, navigate) => {
    setLoading(true);

    const response = await api.post("/user/login", data);

    try {
        if (response.data.success) {
            alert.show("Login realizado com sucesso");
            navigate("/");
            setLoading(false); 
        } else {
            alert.error("Credenciais inválidas.");
            setLoading(false);
        }
    } catch (e) {
        alert.error("Não foi possível realizar o login")
        setLoading(false);
    }
}