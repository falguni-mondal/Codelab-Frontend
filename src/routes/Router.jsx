import { Route, Routes } from "react-router-dom";
import Homepage from "../components/Homepage/Homepage";
import Authpage from '../components/Authpage/Authpage';
import checkAuth from "../utils/functions/checkAuth";
import Profile from "../components/ProfilePage/Profile";
import Protected from "./Protected";
import ProfileShift from "./ProfileShift";

const Router = () => {

    return (
        <Routes>
            <Route path="/" element={<Homepage />} />
            {/* <Route path="/auth/:option" element={<Authpage />} /> */}
            <Route path="/auth/:option" element={ checkAuth ? <Profile /> : <Authpage />} />
            <Route path="/user/profile" element={
                <Protected>
                    <ProfileShift />
                </Protected>
            } />
        </Routes>
    )
}

export default Router