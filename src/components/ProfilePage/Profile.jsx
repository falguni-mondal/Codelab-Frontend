import { useEffect, useState } from 'react'
import axios from 'axios';

import { useNavigate, useParams } from 'react-router-dom';
import { baseUrl } from '../../utils/functions/keys';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../../redux/features/authSlice';

import Loading from '../../utils/components/Loading';
import UserDetails from './UserDets/UserDetails';
import UserDetsForm from './UserDets/UserDetsFrom';
import { Bounce, toast } from 'react-toastify';

const Profile = () => {
  const [user, setUser] = useState(null);
  const [formReveal, setFormReveal] = useState(false);
  const[loading, setLoading] = useState(false);
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userFetcher = async () => {
    try {
      const res = await axios.post(`${baseUrl}/api/user/profile`, { id }, { withCredentials: true });
      const userData = res.data;
      if (userData) {
        setUser(userData);        
      }

    } catch (err) {
      const res = err.response?.data;
      if (res?.msg) {
        toast.error(`${res.msg}`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          progress: undefined,
          theme: "dark",
          transition: Bounce,
        });
      }
      if (!res?.user) {
        dispatch(logoutUser());
      }
      if (!res?.verified) {
        navigate("/user/verify");
      }
    }

  }

  useEffect(() => {
    userFetcher();
  }, [])
  

  return (
    (user || !loading) ?
      <div className='w-full h-full flex gap-3 p-10 overflow-hidden' id='profile-page'>
        <section className='w-[25%]' id="user-dets-sectn">
          {
            formReveal ?
              <UserDetsForm user={user} setFormReveal={setFormReveal} userFetcher={userFetcher} setLoading={setLoading}/>
              :
              <UserDetails user={user} setFormReveal={setFormReveal} />
          }
        </section>
        <section className='w-[75%]' id="user-records-sectn">

        </section>
      </div>
      :
      <Loading />
  )
}

export default Profile