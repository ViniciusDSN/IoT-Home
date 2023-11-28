import React from "react";
import { useNavigate } from "react-router-dom";
import { TextPrincipal, TextLugar, TransparentButton, Box, BoxSaibaMais, TextSaibaMais, CardContainer, Card, CardText, CardKeyText, Footer, CreatorNames, SocialIcons, SocialText } from "./styles";
import { BiSolidChevronDown } from "react-icons/bi";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { FaLock, FaCheckCircle, FaInstagram, FaGithub } from "react-icons/fa";

const Home = () => {
    const navigate = useNavigate();

    const instaVini = () => {
        window.location.href = "https://www.instagram.com/viniciusdsnascimento/"; // Substitua com o seu nome de usuário do GitHub
    };
    const gitVini = () => {
        window.location.href = "https://github.com/ViniciusDSN"; // Substitua com o seu nome de usuário do GitHub
    };
    const instaIsa = () => {
        window.location.href = "https://www.instagram.com/martinello_isabela/"; // Substitua com o seu nome de usuário do GitHub
    };
    const gitIsa = () => {
        window.location.href = "https://github.com/IsabelaZanette"; // Substitua com o seu nome de usuário do GitHub
    };

    return (
        <>
            <Box>
                <TextPrincipal>
                    Controle seus dispositivos 
                    <br />
                    inteligentes em <TextLugar>qualquer lugar</TextLugar>
                </TextPrincipal>

                <TransparentButton onClick={() => navigate("/devices")}>
                    ACESSAR
                </TransparentButton>
            </Box>

            <BoxSaibaMais>
                <TextSaibaMais>
                    Saiba mais
                </TextSaibaMais>

                <BiSolidChevronDown size="4vw" color="#e0e0e2" />
            </BoxSaibaMais>

            <CardContainer>
                <Card>
                    <RiMoneyDollarCircleFill size="3.5vw" color="#e0e0e2" />
                    <CardKeyText>
                        Economia
                    </CardKeyText>
                    <CardText>
                        Os dispositivos apresentam baixo custo, facilitando o monitoramento e acesso a tecnologias inovadoras.
                    </CardText>
                </Card>
                <Card>
                    <FaLock size="3.5vw" color="#e0e0e2" />
                    <CardKeyText>
                        Segurança
                    </CardKeyText>
                    <CardText>
                        Nosso projeto tem como foco a sua segurança, implantando e gerenciando dispositivos inteligentes em sua casa.
                    </CardText>
                </Card>
                <Card>
                    <FaCheckCircle size="3.5vw" color="#e0e0e2" />
                    <CardKeyText>
                        Praticidade
                    </CardKeyText>
                    <CardText>
                        Gestão eficiente e facilitada, tornando a conectividade mais prática e acessível a um amplo espectro de usuários.
                    </CardText>
                </Card>
            </CardContainer>

            <Footer>
                <CreatorNames>
                    Criado por Vinícius e Isabela
                </CreatorNames>
                {/* <SocialIcons>
                    <FaInstagram size="2vw" color="#e0e0e2" onClick={instaVini} style={{ cursor: 'pointer' }} />
                    <SocialText>@viniciusdsnascimento</SocialText>
                    <FaGithub size="2vw" color="#e0e0e2" onClick={gitVini} style={{ cursor: 'pointer' }} />
                    <SocialText>/ViniciusDSN</SocialText>

                    <FaInstagram size="2vw" color="#e0e0e2" onClick={instaIsa} style={{ cursor: 'pointer' }} />
                    <SocialText>@martinello_isabela</SocialText>
                    <FaGithub size="2vw" color="#e0e0e2" onClick={gitIsa} style={{ cursor: 'pointer' }} />
                    <SocialText>/IsabelaZanette</SocialText>
                </SocialIcons> */}
            </Footer>
        </>
    );
};

export default Home;