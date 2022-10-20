import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageUseEffect from "../pages/page-use-effect/PageUseEffect";
import PageUseState from "../pages/page-use-state/PageUseState";

const AppRoutes: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PageUseState />}></Route>
                <Route path="/use-effect" element={<PageUseEffect />}></Route>
                <Route path="*" element={<h1>Não Encontrado</h1>}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;