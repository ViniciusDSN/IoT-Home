import api from "../../../../services/api";

export const getUsers = async ( setLoading, setData, setError ) => {
    setLoading(true);

    try {
        const response = await api.get('/user');
        setData(response.data);
        setLoading(false);
        setError(false);
    } catch (e) {
        setLoading(false);
        setError(true);
    }
};