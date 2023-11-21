import { Route, Routes, useNavigate } from 'react-router-dom';
import List from '../pages/user/list';
import Create from '../pages/user/create';
import Register from '../pages/user/register';
import Login from '../pages/user/login';
import { Menu } from '../components';

const RoutesComponent = () => {
    
    const navigate = useNavigate();

    return (
        <Routes>
            <Route
                path="/"
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
                path="/create"
                element={
                    <Menu
                        title="Usuários"
                        subTitle=""
                        onBack={() => navigate("/")}
                    >
                        <Create />
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
        </Routes>
    )
}

export default RoutesComponent