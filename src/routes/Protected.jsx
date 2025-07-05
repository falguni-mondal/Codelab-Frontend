import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom';

const Protected = ({ children }) => {

    const user = useSelector((state) => state.auth.user);

    return user ? children : <Navigate to={"/auth/signin"} />
}

export default Protected