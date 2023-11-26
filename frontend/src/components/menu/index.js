import { Body, SessionLinks, Link, LogoImage, UserIconContainer, UserIcon, Icon, Children } from "./styles";
import { PageHeader } from '@ant-design/pro-layout';
import { useNavigate } from "react-router-dom";
import { AiOutlineWifi, AiFillHome } from 'react-icons/ai';
import { IoPersonCircle } from "react-icons/io5";
import icon from "../../img/iothomeicon.png";

const MenuComponent = ({ children, onBack, title, subTitle }) => {
    const navigate = useNavigate();

    const goToProfile = () => {
        const userId = localStorage.getItem('user');

        if (userId) {
            navigate("/profile", { state: { id: userId } });
        } else {
            navigate("/register");
        }
    };

    return (
        <>
            <Body>
                <Link onClick={() => navigate("/")}>
                    <LogoImage src={icon} alt="IoT Home" />
                </Link>
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
                <Link onClick={goToProfile}>
                    <UserIconContainer>
                        <UserIcon>
                            <IoPersonCircle color="#e0e0e2" />
                        </UserIcon>
                    </UserIconContainer>
                </Link>
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