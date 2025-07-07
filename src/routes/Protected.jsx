import { useDispatch, useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom';
import Loading from '../utils/components/Loading';
import { useEffect } from 'react';
import { fetchUser } from '../redux/features/authSlice';

const Protected = ({ children }) => {
    const dispatch = useDispatch();
    const {user, status} = useSelector((state) => state.auth);

    useEffect(() => {
        if(status === "idle"){
            dispatch(fetchUser());
        }
    }, [dispatch, status])

    if(status === "loading" || status === "idle"){
        return <Loading />
    }
    if(!user || status === "failed"){
        return <Navigate to={"/auth/signin"} />
    }

    return children;

}

export default Protected