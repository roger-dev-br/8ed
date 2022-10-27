import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageRedux from "../pages/page-redux/PageRedux";
import PageUseEffect from "../pages/page-use-effect/PageUseEffect";
import PageUseMemo from "../pages/page-use-memo/PageUseMemo";
import PageUseState from "../pages/page-use-state/PageUseState";

const AppRoutes: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PageUseState />}></Route>
                <Route path="/use-effect" element={<PageUseEffect />}></Route>
                <Route path="/use-memo" element={<PageUseMemo />}></Route>
                <Route path="/redux" element={<PageRedux />}></Route>
                <Route path="*" element={<h1>Não Encontrado</h1>}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;