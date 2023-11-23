import api from "../../../../services/api";

export const checkUser = async (data, setLoading, alert, navigate) => {
    setLoading(true);

    const response = await api.post("/user/login", data);

    //console.log("API:", response);

    try {
        if (response.status === 200) {
            alert.show("Login realizado com sucesso");
            navigate("/");
            setLoading(false);
        }
        else if (response.status === 202) {
            alert.error("Credenciais inválidas.");
            setLoading(false);
        }
        else if (response.status === 204) {
            alert.error("Usuário não existe");
            setLoading(false);
        }
    } catch (e) {
        //console.error(e);
        alert.error("Não foi possível realizar o login")
        setLoading(false);
    }
}