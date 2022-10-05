import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import Recados from "../pages/recados/Recados";

const AppRoutes: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
               <Route path="/" element={<Home />}></Route>
               <Route path="/recados" element={<Recados />} />
               <Route path="*" element={<h1>Página nao encontrada.</h1>} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;