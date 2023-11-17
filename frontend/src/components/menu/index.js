import { Body, SessionLinks, Link, Children } from "./styles";
import { PageHeader } from '@ant-design/pro-layout';
import { useNavigate } from "react-router-dom";

const MenuComponent = ({ children, onBack, title, subTitle }) => {

    const navigate = useNavigate();

    return (
        <>
            <Body>
                <h3>IoT Home</h3>
                <SessionLinks>
                    <Link onClick={() => navigate("/")}>Usuários</Link>
                    <Link onClick={() => navigate("/a")}>Dispositivos</Link>
                </SessionLinks>
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