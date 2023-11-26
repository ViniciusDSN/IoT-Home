import React from "react";
import { BiSolidChevronDown } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAlert } from "react-alert";
import { TextPrincipal } from "./styles";

const Home = () => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const alert = useAlert();

    return (
        <>
        <div style={{ marginTop: "20px" }} />
            <TextPrincipal>
                Controle seus dispositivos 
                <br />
                inteligentes em qualquer lugar 
            </TextPrincipal>

            {/* <HomeSaibaMaisText>
                Saiba Mais
            </HomeSaibaMaisText>

            <HomeSaibaMais>
                <BiSolidChevronDown size={55} color="#e0e0e2" />
            </HomeSaibaMais> */}
        </>
    );
};

export default Home;