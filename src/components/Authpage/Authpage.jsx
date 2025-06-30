import React, { useEffect, useState } from 'react'
import ServiceSection from './ServiceSection/ServiceSection'
import AuthFormSection from './AuthFormSection/AuthFormSection'
import { useParams } from 'react-router-dom'

const Authpage = () => {

    const {option} = useParams();

    const [page, setPage] = useState("signup");

    useEffect(() => {
        setPage(option);
        
    }, [option])

    return (
        <div className='auth-page w-full h-[90vh] flex prime-bg overflow-hidden'>
            <ServiceSection/>
            <AuthFormSection page={page} />
        </div>
    )
}

export default Authpage