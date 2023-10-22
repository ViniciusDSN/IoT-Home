import { Input, ErrorMessage, Button } from "../../../components";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Row, Col } from "antd";
import { SessionButtons } from "./styles";
import { useNavigate, useLocation } from "react-router-dom";
import api from "../../../services/api";
import { useState, useEffect } from "react";
import { useAlert } from "react-alert";

const Create = () => {

    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();
    const location = useLocation();
    const alert = useAlert();

    async function saveUser(data){
        setLoading(true);
    
        try {
            await api.post('/user', data);
            alert.show("Usuário criado com sucesso");
            setLoading(false);  
            navigate("/");
        } catch (e) {
            setLoading(false);
            alert.error("Não foi possível criar o usuário")
        }
    };

    async function getUserById(id){
        setLoading(true);
    
        try {
            const response = await api.get(`/user/${id}`);
            setLoading(false);
            return response.data;
        } catch (e) {
            setLoading(false);
            alert.error("Não foi possível carregar os dados do usuário")
        }
    };

    async function updateUser(id, data){
        setLoading(true);
    
        try {
            await api.put(`/user/${id}`, data);
            setLoading(false);
            alert.show("Usuário editado com sucesso");
        } catch (e) {
            setLoading(false);
            alert.error("Não foi possível editar o usuário");
        }
    };

    const getUser = async () => {
        const user = await getUserById(location.state.id, setLoading, alert)

        setValue("name", user?.name)
        setValue("email", user?.email)
    };

    const schema = yup.object({
        name: yup.string().required("Campo obrigatório"),
        email: yup.string().required("Campo obrigatório").email("Digite um email válido"),
        password: yup.string().required("Campo obrigatório").min(6, "A senha deve possuir pelo menos 6 caracteres"),
    });

    const schemaUpdate = yup.object({
        name: yup.string().required("Campo obrigatório"),
        email: yup.string().required("Campo obrigatório").email("Digite um email válido"),
        password: yup.string(),
    });

    const {
        handleSubmit,
        control,
        setValue,
        formState:{errors}
    } = useForm({
            resolver: yupResolver(!location.state.id ? schema : schemaUpdate),
        });

    const save = (data) => {
        if (!location?.state?.id) {
            saveUser(data);
        }
        else {
            if (!data.password) delete data.password;
            updateUser(location.state.id, data, setLoading, alert);
        }
    };

    useEffect(() => {
        if (location?.state?.id) {
            getUser();
        };
    },);

    return (
        <>
            <div style={{ marginTop:"20px" }} />
            <form onSubmit={handleSubmit(save)}>
                <Row gutter={[20, 20]}>
                    <Col className="gutter-row" span={12}>
                        <Controller
                            name="name"
                            control={control}
                            render={({ field:{ onChange, value, ref } }) => (
                                <Input
                                    value={value}
                                    onChange={onChange}
                                    ref={ref}
                                    label="Nome"
                                    placeholder="Digite o nome"
                                />
                            )}
                        />
                        {errors.name && <ErrorMessage>{errors?.name?.message}</ErrorMessage>}
                    </Col>
                    <Col className="gutter-row" span={12}>
                        <Controller
                            name="email"
                            control={control}
                            render={({ field:{ onChange, value, ref } }) => (
                                <Input
                                    value={value}
                                    onChange={onChange}
                                    ref={ref}
                                    label="Email"
                                    placeholder="Digite o email"
                                />
                            )}
                        />
                        {errors.email && <ErrorMessage>{errors?.email?.message}</ErrorMessage>}
                    </Col>
                    <Col className="gutter-row" span={12}>
                        <Controller
                            name="password"
                            control={control}
                            render={({ field:{ onChange, value, ref } }) => (
                                <Input
                                    value={value}
                                    onChange={onChange}
                                    ref={ref}
                                    label="Senha"
                                    placeholder="Digite a senha"
                                    type="password"
                                />
                            )}
                        />
                        {errors.password && <ErrorMessage>{errors?.password?.message}</ErrorMessage>}
                    </Col>
                    <Col span={24}>
                        <SessionButtons>
                            <Button
                                label="Cancelar"
                                onClick={() => navigate("/")}
                            />
                            <div style={{ marginLeft: "10px" }} />
                            <Button
                                label="Salvar"
                                type="primary"
                                htmlType="submit"
                            />
                        </SessionButtons>
                    </Col>
                </Row>
            </form>   
        </>
    )
}

export default Create;