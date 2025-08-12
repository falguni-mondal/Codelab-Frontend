import { Route, Routes } from "react-router-dom";
import Homepage from "../components/Homepage/Homepage";
import Authpage from '../components/Authpage/Authpage';
import Profile from "../components/ProfilePage/Profile";
import AuthGuard from "../components/guards/AuthGuard";
import GuestGuard from "../components/guards/GuestGuard";
import BasicGuard from "../components/guards/BasicGuard";
import EmailVerify from "../components/verification/EmailVerify";
import EmailVerifier from "../components/verification/EmailVerifier";
import PageErr from "../utils/components/PageErr";
import ProjectForm from "../components/DevForms/ProjectForm";
import SnippetForm from "../components/DevForms/SnippetForm";
import CodeEditor from "../components/Dev/CodeEditor";

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
                <Route path="/user/:id/profile" element={<Profile />} />
                <Route path="/user/project/create" element={<ProjectForm />} />
                <Route path="/user/snippet/create" element={<SnippetForm />} />
                <Route path="/editor/:id" element={<CodeEditor />} />
            </Route>

            {/* VERIFICATION */}
            <Route path="/user/verify" element={<EmailVerify />} />
            <Route path="/user/verify/:token" element={<EmailVerifier />} />

            <Route path="/*" element={<PageErr />} />
            
        </Routes>
    )
}

export default Router