import { BrowserRouter, Route, Routes } from "react-router-dom";
import Listagem from "../pages/listagem/Listagem";

const AppRoutes: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Listagem />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;