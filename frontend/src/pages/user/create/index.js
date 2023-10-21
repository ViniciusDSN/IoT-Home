import { Input } from "../../../components";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Row, Col } from "antd";

const Create = () => {

    const schema = yup.object({
        name: yup.string().required("Campo obrigatório"),
        email: yup.string().required("Campo obrigatório").email("Digite um email válido"),
        senha: yup.string().required("Campo obrigatório").min(6, "A senha deve possuir pelo menos 6 caracteres"),
    });

    const { handleSubmit, control, setValue, formState:{errors} } = useForm({
        resolver: yupResolver(schema)
    });

    const save = (data) => {
    };

    return (
        <>
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
                    </Col>
                </Row>
            </form>   
        </>
    )
}

export default Create;