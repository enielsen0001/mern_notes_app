import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import LoginPage from "@/pages/LoginPage";
import NotesPage from "@/pages/NotesPage";
import SignupPage from "@/pages/SignupPage";

const AllRoutes = () => {
    return (
        <Routes>
            <Route path={'/'} element={<HomePage/>}></Route>
            <Route path={'/notes'} element={<NotesPage/>}></Route>
            <Route path={'/login'} element={<LoginPage/>}></Route>
            <Route path={'/signup'} element={<SignupPage/>}></Route>
        </Routes>
    );
}
export default AllRoutes;