import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import Recado from "../pages/recado/Recado";

const AppRoutes: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/recados" element={<Recado />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;