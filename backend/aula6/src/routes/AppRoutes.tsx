import { BrowserRouter, Route, Routes } from "react-router-dom";
import Listagem from "../pages/listagem/Listagem";
import DetalhePost from "../pages/posts/Post";
import ListagemPosts from "../pages/posts/Posts";

const AppRoutes: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Listagem />}></Route>
                <Route path="/pets/:id" element={<Listagem />}></Route>
                <Route path="/posts" element={<ListagemPosts />}></Route>
                <Route path="/posts/:id" element={<DetalhePost />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;