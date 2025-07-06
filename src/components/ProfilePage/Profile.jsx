import { useDispatch, useSelector } from 'react-redux'
import { logoutUser } from '../../redux/features/authSlice';

const Profile = () => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  console.log(user && user);

  const logoutHandler = () => {
    dispatch(logoutUser());
  }

  return (
    user &&
    <div className='w-full p-10'>
      <div className="user-dets flex flex-col gap-2">
        <p>{`Username : ${user.username}`}</p>
        <p>{`Email : ${user.email}`}</p>
        <button onClick={logoutHandler} className='w-[5rem] py-1.5 text-[0.85rem] font-semibold bg-red-500 rounded shadow-red-600 shadow-2xl cursor-pointer'>Logout</button>
      </div>
    </div>
  )
}

export default Profile