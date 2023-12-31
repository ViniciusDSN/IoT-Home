import { Input, ErrorMessage, Button, Loading } from "../../../components";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Row, Col } from "antd";
import { SessionButtons, TableStyle } from "./styles";
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { useAlert } from "react-alert";
import { getUserById } from "./functions/getUserById";
import { updateUser } from "./functions/updateUser";

const Profile = () => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const alert = useAlert();
    const location = useLocation();

    const schema = yup.object({
        name: yup.string().required("Campo obrigatório"),
        email: yup.string().required("Campo obrigatório").email("Digite um email válido"),
        password: yup.string().required("Campo obrigatório").min(6, "A senha deve possuir pelo menos 6 caracteres"),
    });

    const schemaUpdate = yup.object({
        name: yup.string(),
        email: yup.string().email("Digite um email válido"),
        password: yup.string().min(6, "A senha deve possuir pelo menos 6 caracteres"),
    });

    const {
        handleSubmit,
        control,
        setValue,
        formState: {errors},
    } = useForm({
        resolver: yupResolver(!location.state.id ? schema : schemaUpdate),
    });

    const getUser = async () => {
        const user = await getUserById(location.state.id, setLoading, alert);
        setValue("name", user?.name)
        setValue("email", user?.email)
    }
    
    useEffect(() => {
        if (location?.state?.id) {
            getUser();
        }
    // eslint-disable-next-line
    }, [location]);

    const save = (data) => {
        if (!data.password) {
            delete data.password;
        }
        updateUser(location.state.id, data, setLoading, alert, navigate);
    };

    const logout = () => {
        localStorage.clear();
        navigate("/");
    };

    return(
        <>
        <div style={{ marginTop: "20px" }} />
            {loading && <Loading />}
            {!loading &&
                <form onSubmit={handleSubmit(save)}>
                    <TableStyle>
                        <Row gutter={[20, 20]}>
                            <Col className="gutter-row" span={12}>
                                <Controller
                                    name="name"
                                    control={control}
                                    render={({ field: { onChange, value, ref }}) => (
                                        <Input
                                            value={value}
                                            onChange={onChange}
                                            ref={ref}
                                            label="Nome"
                                            placeholder="Digite o nome atualizado"
                                        />
                                    )}
                                />
                                {errors.name && (<ErrorMessage>{errors?.name?.message}</ErrorMessage>)}
                            </Col>
                            <Col className="gutter-row" span={12}>
                                <Controller
                                    name="email"
                                    control={control}
                                    render={({ field: { onChange, value, ref }}) => (
                                        <Input
                                            value={value}
                                            onChange={onChange}
                                            ref={ref}
                                            label="Email"
                                            placeholder="Digite o novo email"
                                        />
                                    )}
                                />
                                {errors.email && (<ErrorMessage>{errors?.email?.message}</ErrorMessage>)}
                            </Col>
                            <Col className="gutter-row" span={12}>
                                <Controller
                                    name="password"
                                    control={control}
                                    render={({ field: { onChange, value, ref }}) => (
                                        <Input
                                            value={value}
                                            onChange={onChange}
                                            ref={ref}
                                            label="Senha"
                                            placeholder="Digite a nova senha"
                                            type="password"
                                        />
                                    )}
                                />
                                {errors.password && (<ErrorMessage>{errors?.password?.message}</ErrorMessage>)}
                            </Col>
                            <Col span={24}>
                                <SessionButtons>
                                    <Button
                                        label="Desconectar"
                                        onClick={logout}
                                        danger={true}
                                    />
                                    <div style={{ marginLeft: "10px" }} />
                                    <Button
                                        label="Cancelar"
                                        onClick={(() => navigate("/"))}
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
                    </TableStyle>
                </form>
            }
        </>
    );
};

export default Profile;