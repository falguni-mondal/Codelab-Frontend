import { Route, Routes } from "react-router-dom";
import Homepage from "../components/Homepage/Homepage";
import Authpage from '../components/Authpage/Authpage';
import checkAuth from "../utils/functions/checkAuth";
import PageErr from "../utils/components/PageErr";

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Homepage />} />
            {/* <Route path="/auth/:option" element={<Authpage />} /> */}
            <Route path="/auth/:option" element={ checkAuth ? <PageErr /> : <Authpage />} />
        </Routes>
    )
}

export default Router