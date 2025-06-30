import React from 'react'
import { Route, Routes } from "react-router-dom";
import Homepage from "../components/Homepage/Homepage";
import Authpage from '../components/Authpage/Authpage';

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/auth/:option" element={<Authpage />} />
        </Routes>
    )
}

export default Router