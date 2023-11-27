import React, { useState, useEffect } from "react";
import { Button, Loading } from "../../../components";
import { useForm } from "react-hook-form";
import { Header } from "./styles";
import { Table } from "antd";
import { useAlert } from "react-alert";
import { useNavigate } from "react-router-dom";
import { retrieveData } from "./functions/retrieveData";

const Devices = () => {
  const [loading, setLoading] = useState(false);
  const [sensorData, setSensorData] = useState([]);
  const navigate = useNavigate();
  const alert = useAlert();
  const { handleSubmit } = useForm();

  useEffect(() => {
    const isAuthenticated = localStorage.getItem('user');
    if (!isAuthenticated) {
      navigate('/register');
      return;
    }

    const fetchData = async () => {
      try {
        const receivedData = await retrieveData({}, setLoading, alert, navigate);
        setSensorData(receivedData);
      } catch (e) {
        console.error("Erro:", e.message);
        alert.show("Ocorreu um erro. Tente novamente.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [alert, navigate]);

  const receive = async (data) => {
    setLoading(true);

    try {
      const receivedData = await retrieveData(data, setLoading, alert, navigate);
      setSensorData(receivedData);
      setLoading(false);
    } catch (e) {
      console.error("Erro:", e.message);
      alert.show("Ocorreu um erro. Tente novamente.");
      setLoading(false);
    }
  };

  const renderSensorData = () => {
    const sortedData = [...sensorData].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    return (
      <div>
        <div style={{ marginTop: "20px" }} />
        <Table
          columns={[
            {
              title: "Estado",
              dataIndex: "sensorValue",
              key: "sensorValue",
              render: (text) => (text ? "Porta fechada" : "Porta aberta"),
            },
            {
              title: "Horário",
              dataIndex: "createdAt",
              key: "createdAt",
              render: (text) => new Date(text).toLocaleString(),
            },
          ]}
          dataSource={sortedData}
        />
      </div>
    );
  };

  return (
    <>
        {loading && <Loading />}

        {sensorData && sensorData.length > 0 && renderSensorData()}
    
        <Header>
            <Button
            label="Atualizar"
            type="primary"
            htmlType="submit"
            onClick={handleSubmit(receive)}
            />
        </Header>
    </>
  );
};

export default Devices;