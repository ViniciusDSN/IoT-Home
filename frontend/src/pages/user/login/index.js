import { Input, ErrorMessage, Button, Loading } from "../../../components";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Row, Col } from "antd";
import { SessionButtons, Link } from "./styles";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAlert } from "react-alert";
import { checkUser } from "./functions/checkUser";

const Login = () => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const alert = useAlert();

    const schema = yup.object({
        email: yup.string().required("Campo obrigatório").email("Digite um email válido"),
        password: yup.string().required("Campo obrigatório").min(6, "A senha deve possuir pelo menos 6 caracteres"),
    });

    const {
        handleSubmit,
        control,
        formState: {errors},
    } = useForm({
        resolver: yupResolver(schema),
    });

    const login = async (data) => {
        console.log(data);
        setLoading(true);

        checkUser(data, setLoading, alert, navigate);

        try {
            console.log("console.log");
        //   if (user && user.password === data.password) {
        //     console.log("Usuário logado");
        //     alert.show("Usuário logado com sucesso");
        //     navigate("/");
        //     setLoading(false);
        //   }
        //   else {
        //     console.log("Usuário inexistente");
        //     alert.show("Usuário inexistente", { type: "error" });
        //     setLoading(false);
        //   }
        } catch (e) {
          console.error("Erro no login:", e.message);
          alert.show("Erro no login. Tente novamente.");
          setLoading(false);
        }
      };

    return(
        <>
        <div style={{ marginTop: "20px" }} />
            {loading && <Loading />}
            {!loading &&
                <form onSubmit={handleSubmit(login)}>
                    <Row gutter={[20, 20]}>
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
                                        placeholder="Digite o email"
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
                                        placeholder="Digite a senha"
                                        type="password"
                                    />
                                )}
                            />
                            {errors.password && (<ErrorMessage>{errors?.password?.message}</ErrorMessage>)}
                        </Col>
                        <Col span={12}>
                            <p>
                                Não possui cadastro?
                            </p>
                            <Link onClick={() => navigate("/register")}>Cadastrar</Link>
                        </Col>
                        <Col span={12}>
                            <SessionButtons>
                                <Button
                                    label="Cancelar"
                                    onClick={(() => navigate("/"))}
                                />
                                <div style={{ marginLeft: "10px" }} />
                                <Button
                                    label="Entrar"
                                    type="primary"
                                    htmlType="submit"
                                />
                            </SessionButtons>
                        </Col>
                    </Row>
                </form>
            }
        </>
    );
};

export default Login;