import React from "react";
import { useNavigate } from "react-router-dom";
import { TextPrincipal, TextLugar, TransparentButton } from "./styles";

const Home = () => {
    const navigate = useNavigate();

    return (
        <>
            <TextPrincipal>
                Controle seus dispositivos 
                <br />
                inteligentes em <TextLugar>qualquer lugar</TextLugar>
            </TextPrincipal>

            <TransparentButton onClick={() => navigate("/devices")}>
                ACESSAR
            </TransparentButton>
        </>
  );
};

export default Home;