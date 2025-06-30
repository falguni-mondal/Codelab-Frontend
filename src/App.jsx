import { ToastContainer } from 'react-toastify'
import Navbar from './components/Navbar/Navbar'
import Router from './routes/Router'

const App = () => {
  return (
    <div className='flex flex-col items-center w-full text-[#dedede]'>
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