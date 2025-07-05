import { ToastContainer } from 'react-toastify';
import Navbar from './components/Navbar/Navbar';
import Router from './routes/Router';
import { useDispatch } from 'react-redux';
import { fetchUser } from './redux/features/authSlice';
import { useEffect } from 'react';

const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch])


  return (
    <div className='min-h-screen min-w-screen flex flex-col items-center w-full text-[#dedede] prime-bg'>
      <Navbar />
      <Router />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  )
}

export default App