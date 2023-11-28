import { Body, TxtLoading } from "./styles";
import { Spin } from "antd";

const LoadingComponent = () => {
    return(
        <Body>
            <Spin size="large"/>
            <TxtLoading>
                Carregando...
            </TxtLoading>
        </Body>
    );
};

export default LoadingComponent;