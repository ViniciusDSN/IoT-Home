import { Header } from "./styles";
import { Button } from "../../../components";
import { Table, Popconfirm } from "antd";
import { useEffect, useState } from "react";
import api from "../../../services/api";

const List = () => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);

    async function getUsers(){
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

    async function removeUser(){
        setLoading(true);
    
        try {
            await api.delete(`/user/${id}`);
            setLoading(false);
            setSuccess(true);
        } catch (e) {
            setLoading(false);
            setError(true);
        }
    };

    useEffect(() => {
        getUsers()
    }, [])

    const columns = [
        {
            title: "#",
            dataIndex: "id",
            key: "id"
        },
        {
            title: "Nome",
            dataIndex: "name",
            key: "name"
        },
        {
            title: "E-mail",
            dataIndex: "email",
            key: "email"
        },
        {
            title: "Ações",
            align: "center",
            render: (text, record) => (
                <div style={{ display:"flex", justifyContent:"center" }}>
                    <Button label='Editar' />
                    <div style={{ marginLeft:"10px" }} />
                    <Popconfirm
                        title="Tem certeza que deseja excluir?"
                        onConfirm={(() => removeUser(record.id))}
                        okText="Sim"
                        cancelText="Não"
                    >
                        <Button label='Excluir' type="primary" danger={true} />
                    </Popconfirm>
                </div>
            )
        },
    ]

    return (
        <>
            <Header>
                <Button label="Adicionar Usuário" type="primary" />
            </Header>
            
            <Table columns={columns} dataSource={data}/>
        </>
    );
};

export default List;