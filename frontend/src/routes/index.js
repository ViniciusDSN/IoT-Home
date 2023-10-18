import { Route, Routes } from 'react-router-dom';
import List from '../pages/user/list';
import Create from '../pages/user/create';
import { Menu } from '../components';

const RoutesComponent = () => {
    return (
        <Routes>
            <Route
                path="/"
                element={
                    <Menu title="Usuários" subTitle="Aqui estão os usuários:">
                        <List />
                    </Menu>
                }
            />
            <Route
                path="/create"
                element={
                    <Menu>
                        <Create />
                    </Menu>
                }
            />
        </Routes>
    )
}

export default RoutesComponent