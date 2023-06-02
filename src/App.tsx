import { Route, Routes } from 'react-router-dom';
import { MainLayout } from './components/Layout/main';
import { Rental } from './pages/rental';
import { Login } from './pages/login';

function App() {
    return (
        <MainLayout>
            <Routes>
                <Route path="/" element={<Rental />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </MainLayout>
    );
}

export default App;
