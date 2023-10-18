import { Body, SessionLinks, Link, Children } from "./styles";
import { PageHeader } from '@ant-design/pro-layout';

const MenuComponent = ({ children, onBack, title, subTitle }) => {
    return (
        <>
            <Body>
                <h3>IoT Home</h3>
                <SessionLinks>
                    <Link>Usuários</Link>
                    <Link>Dispositivos</Link>
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