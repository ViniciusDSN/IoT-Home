import axios from "axios";

const api = axios.create({
    baseURL: "https://iot-home.onrender.com",
});

export default api;