import { Route, Routes } from "react-router-dom";
import Homepage from "../components/Homepage/Homepage";
import Authpage from '../components/Authpage/Authpage';
import Profile from "../components/ProfilePage/Profile";
import Protected from "./Protected";
import ProfileShift from "./ProfileShift";

const Router = () => {

    return (
        <Routes>
            <Route path="/" element={<Homepage />} />
            {/* <Route path="/auth/:option" element={<Authpage />} /> */}
            <Route path="/auth/:option" element={ 
                <ProfileShift>
                    <Authpage />
                </ProfileShift>
            } />
            <Route path="/user/profile" element={
                <Protected>
                    <Profile />
                </Protected>
            } />
        </Routes>
    )
}

export default Router