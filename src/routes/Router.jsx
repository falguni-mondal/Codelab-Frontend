import { Route, Routes } from "react-router-dom";
import Homepage from "../components/Homepage/Homepage";
import Authpage from '../components/Authpage/Authpage';
import Profile from "../components/ProfilePage/Profile";
import AuthGuard from "../components/guards/AuthGuard";
import GuestGuard from "../components/guards/GuestGuard";
import BasicGuard from "../components/guards/BasicGuard";
import EmailVerify from "../components/verification/EmailVerify";
import EmailVerifier from "../components/verification/EmailVerifier";

const Router = () => {

    return (
        <Routes>
            <Route path="/" element={<Homepage />} />

            {/* GUEST ONLY */}
            <Route element={<GuestGuard />}>
                <Route path="/auth/:option" element={<Authpage />} />
            </Route>


            {/* PRIVATE */}
            <Route element={<BasicGuard />}>
            </Route>

            {/* PROTECTED */}
            <Route element={<AuthGuard />}>
                <Route path="/user/profile" element={<Profile />} />
            </Route>

            {/* VERIFICATION */}
            <Route path="/user/verify" element={<EmailVerify />} />
            <Route path="/user/verify/:token" element={<EmailVerifier />} />
        </Routes>
    )
}

export default Router