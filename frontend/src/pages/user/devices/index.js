import { Input, ErrorMessage, Button, Loading } from "../../../components";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Row, Col } from "antd";
import { SessionButtons, Link } from "./styles";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAlert } from "react-alert";
import { retrieveData } from "./functions/retrieveData";

const Devices = () => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const alert = useAlert();

    const {handleSubmit} = useForm({});

    const receive = async (data) => {
        setLoading(true);

        try {
            console.log("1");
            retrieveData(data, setLoading, alert, navigate);
        } catch (e) {
            console.log("2");
            console.error("Erro no login:", e.message);
            alert.show("Erro no login. Tente novamente.");
            setLoading(false);
        }
    };

    return(
        <>
        <div style={{ marginTop: "20px" }} />
            <form onSubmit={handleSubmit(receive)}>
                <SessionButtons>
                    <Button
                        label="Cancelar"
                        onClick={(() => navigate("/"))}
                    />
                    <div style={{ marginLeft: "10px" }} />
                    <Button
                        label="Testar"
                        type="primary"
                        htmlType="submit"
                    />
                </SessionButtons>
            </form>
        </>
    );
};

export default Devices;