import { Route, Routes, useNavigate } from 'react-router-dom';
import Home from '../pages/home';
import List from '../pages/user/list';
import Profile from '../pages/user/profile';
import Register from '../pages/user/register';
import Login from '../pages/user/login';
import Devices from '../pages/user/devices';
import { Menu, Layout } from '../components';

const RoutesComponent = () => {
    
    const navigate = useNavigate();

    return (
        <Routes>
            <Route
                path="/"
                element={
                    <Layout>
                        <Menu>
                            <Home />
                        </Menu>
                    </Layout>
                }
            />
            <Route
                path="/list"
                element={
                    <Menu
                        title="Usuários"
                        subTitle=""
                    >
                        <List />
                    </Menu>
                }
            />
            <Route
                path="/profile"
                element={
                    <Menu
                        title="Perfil"
                        subTitle=""
                        onBack={() => navigate("/")}
                    >
                        <Profile />
                    </Menu>
                }
            />
            <Route
                path="/register"
                element={
                    <Menu
                        title="Cadastrar"
                        subTitle=""
                        onBack={() => navigate("/")}
                    >
                        <Register />
                    </Menu>
                }
            />
            <Route
                path="/login"
                element={
                    <Menu
                        title="Login"
                        subTitle=""
                        onBack={() => navigate("/")}
                    >
                        <Login />
                    </Menu>
                }
            />
            <Route
                path="/devices"
                element={
                    <Menu
                        title="Devices"
                        subTitle=""
                        onBack={() => navigate("/")}
                    >
                        <Devices />
                    </Menu>
                }
            />
        </Routes>
    )
}

export default RoutesComponent