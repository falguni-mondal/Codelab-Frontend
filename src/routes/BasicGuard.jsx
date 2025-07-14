import { useEffect } from "react";
import { useSelector } from "react-redux"
import { Outlet, useNavigate } from "react-router-dom";
import Loading from "../utils/components/Loading";

const BasicGuard = () => {
    const { status, user } = useSelector((state) => state.auth);
    const navigate = useNavigate();

    useEffect(() => {
        if (status === "failed") {
            navigate("/auth/signin");
        }
    }, [status])

    if(status === "ideal" || status === "loading"){
        return <Loading/>
    }
    
    return <Outlet user={user} />

}

export default BasicGuard