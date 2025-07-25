import React, { useEffect, useState } from 'react'
import axios from 'axios';

import { useNavigate, useParams } from 'react-router-dom';
import { baseUrl } from '../../utils/functions/keys';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../../redux/features/authSlice';

import Loading from '../../utils/components/Loading';
import UserDetails from './UserDets/UserDetails';
import UserDetsForm from './UserDets/UserDetsFrom';

const Profile = () => {
  const [user, setUser] = useState(null);
  const [formReveal, setFormReveal] = useState(false);
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userFetcher = async () => {
    try {
      const res = await axios.post(`${baseUrl}/api/user/profile`, { id }, { withCredentials: true });
      return res.data;

    } catch (err) {
      const res = err.response?.data;
      if (res?.msg) {
        console.log(res.msg);
        return;
      }
      if (!res?.user) {
        dispatch(logoutUser());
        return;
      }
      if (!res?.verified) {
        navigate("/user/verify");
        return;
      }
    }

  }

  useEffect(() => {
    const fetchUser = async () => {
      const user = await userFetcher();
      if (user) {
        setUser(user);
      };
    }

    fetchUser();
  }, [])

  return (
    user ?
      <div className='w-full h-full flex gap-3 p-10 overflow-hidden' id='profile-page'>
        <section className='w-[25%]' id="user-dets-sectn">
          {
            formReveal ?
              <UserDetsForm user={user} setFormReveal={setFormReveal} />
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