import { Route, Routes } from "react-router-dom";
import Homepage from "../components/Homepage/Homepage";
import Authpage from '../components/Authpage/Authpage';
import checkAuth from "../utils/checkAuth";

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Homepage />} />
            {/* <Route path="/auth/:option" element={<Authpage />} /> */}
            <Route path="/auth/:option" element={ checkAuth ? <Homepage /> : <Authpage />} />
        </Routes>
    )
}

export default Router