import { Body } from "./styles";
import { Spin } from "antd";

const LoadingComponent = () => {
    return(
        <Body>
            <Spin size="large"/>
            <p>Carregando...</p>
        </Body>
    );
};

export default LoadingComponent;