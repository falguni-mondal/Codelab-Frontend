import Signup from './SignupSection/Signup'
import Signin from './SigninSection/Signin'

const AuthFormSection = ({page, setLoading}) => {


    return (
        <div className={`auth-form-container w-full shrink-0 flex sec-bg ${page === "signin" ? "translate-x-[-50%]" : "translate-x-[0%]"} transition-all duration-300 ease-in-out`}>
            <Signup setLoading={setLoading}/>
            <Signin setLoading={setLoading}/>
        </div>
    )
}

export default AuthFormSection