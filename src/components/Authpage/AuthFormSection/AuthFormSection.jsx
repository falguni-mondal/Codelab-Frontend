import React from 'react'
import Signup from './SignupSection/Signup'
import Signin from './SigninSection/Signin'

const AuthFormSection = ({page}) => {



    return (
        <div className={`auth-form-container w-full shrink-0 flex sec-bg ${page === "signin" ? "translate-x-[-50%]" : "translate-x-[0%]"} transition-all duration-300 ease-in-out`}>
            <Signup/>
            <Signin/>
        </div>
    )
}

export default AuthFormSection