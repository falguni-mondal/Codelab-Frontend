import { useEffect, useState } from 'react'
import ServiceSection from './ServiceSection/ServiceSection'
import AuthFormSection from './AuthFormSection/AuthFormSection'
import { useParams } from 'react-router-dom'
import Loading from '../../utils/components/Loading'

const Authpage = () => {

    const { option } = useParams();

    const [page, setPage] = useState("signup");
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        setPage(option);

    }, [option])

    return (
        <div className='auth-page w-full h-[90vh] flex prime-bg overflow-hidden'>
            <div className={`loader ${loading ? "" : "hidden"} relative z-[1000]`}>
                <Loading />
            </div>
            <ServiceSection />
            <AuthFormSection page={page} setLoading={setLoading} />
        </div>
    )
}

export default Authpage