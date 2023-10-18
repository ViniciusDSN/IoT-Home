import { Header } from "./styles";
import { Button } from "../../../components";
import { Table } from "antd";
import { getUsers } from "./functions/getUser";
import { useEffect, useState } from "react";

const List = () => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getUsers(setData, setError, setLoading)
    }, [])

    useEffect (() => {
        console.log(data);
    }, [data])

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
            align: "center"
        },
    ]

    return (
        <>
            <Header>
                <Button label="Adicionar Usuário" type="primary" />
            </Header>
            <Table columns={columns} dataSource={null} />
        </>
    );
};

export default List;