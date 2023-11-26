import React from "react";
import { BiSolidChevronDown } from "react-icons/bi";
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

            <TransparentButton onClick={navigate("/devices")}>
                ACESSAR
            </TransparentButton>

            Saiba Mais <BiSolidChevronDown size={55} color="#e0e0e2" />
        </>
    );
};

export default Home;