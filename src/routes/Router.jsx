import { Route, Routes } from "react-router-dom";
import Homepage from "../components/Homepage/Homepage";
import Authpage from '../components/Authpage/Authpage';
import Profile from "../components/ProfilePage/Profile";
import AuthGuard from "./AuthGuard";
import GuestGuard from "./GuestGuard";
import EmailVerify from "../components/Authpage/AuthFormSection/SignupSection/EmailVerify";

const Router = () => {

    return (
        <Routes>
            <Route path="/" element={<Homepage />} />

            {/* GUEST ONLY */}
            <Route element={<GuestGuard />}>
                <Route path="/auth/:option" element={<Authpage />} />
            </Route>

            {/* PROTECTED */}
            <Route element={<AuthGuard />}>
                <Route path="/user/profile" element={<Profile />} />
            </Route>

            {/* VERIFICATION */}
            <Route path="/user/verify" element={<EmailVerify />} />
        </Routes>
    )
}

export default Router