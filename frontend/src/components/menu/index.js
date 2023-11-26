import { Body, SessionLinks, Link, LogoImage, UserIconContainer, UserIcon, Icon, Children } from "./styles";
import { PageHeader } from '@ant-design/pro-layout';
import { useNavigate } from "react-router-dom";
import { AiOutlineWifi, AiFillHome } from 'react-icons/ai';
import { IoPersonCircle } from "react-icons/io5";
import icon from "../../img/iothomeicon.png";

const MenuComponent = ({ children, onBack, title, subTitle }) => {
    const navigate = useNavigate();

    return (
        <>
            <Body>
                <LogoImage src={icon} alt="IoT Home" />
                <SessionLinks>
                    <Link onClick={() => navigate("/")}>
                        <Icon>
                            <AiFillHome color="#e0e0e2" />
                        </Icon>
                        Home
                    </Link>
                    <Link onClick={() => navigate("/devices")}>
                        <Icon>
                            <AiOutlineWifi color="#e0e0e2" />
                        </Icon>
                        Dispositivos
                    </Link>
                </SessionLinks>
                <UserIconContainer>
                    <UserIcon>
                        <IoPersonCircle color="#e0e0e2" />
                    </UserIcon>
                </UserIconContainer>
            </Body>
            <Children>
                <PageHeader
                    className="site-page-header"
                    onBack={onBack}
                    title={title}
                    subTitle={subTitle}
                />
                {children}
            </Children>
        </>
    );
};

export default MenuComponent;