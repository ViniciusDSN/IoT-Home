import api from "../../../../services/api";

export const retrieveData = async (data, setLoading, alert, navigate) => {
    setLoading(true);

    const response = await api.post("/user/retrievedata", data);

    //console.log("API:", response);

    try {
        if (response.status === 200) {
            //console.log(response.data);
            //navigate("/");
            setLoading(false);
            return response.data;
        }
        else if (response.status === 400) {
            console.log("Não foi possível verificar o banco de dados");
            setLoading(false);
        }
        else {
            console.log("Erro interno de servidor");
            setLoading(false);
        }
    } catch (e) {
        //console.error(e);
        alert.error("Erro interno de servidor...");
        setLoading(false);
    }
}