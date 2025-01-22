import { Navigate, Outlet, useParams, Link } from "react-router-dom"
import Header from "./Header"
import pawtop from '../assets/pawtop.png'
import pawbelow from '../assets/pawbelow.png'
import Image from 'react-bootstrap/Image';
import left from '../assets/arrowleft.svg'
import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";

function DefaultLayout() {
  const { booknow } = useParams()

  const { token } = useContext(AppContext)
  
  if (token) {
    return <Navigate to="/dashboard" />
  }

  return (
    <div>
      <Header />
      <main className='grid place-content-center min-h-[93vh] relative'>
        <img className='absolute top-[150px] left-0 z-10' src={pawtop} alt="" />
        <img className='absolute bottom-[150px] right-8 z-10' src={pawbelow} alt="" />
        <div className="custom-shape-divider-top-1736321645">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
          </svg>
        </div>
        <div className="custom-shape-divider-bottom-1736322319">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
          </svg>
        </div>
        {booknow && (
          <Link to='/home'>
            <button className="z-10 bg-[#0A58A2] absolute top-7 left-7 w-[70.88px] h-[71.01px] rounded-full flex justify-center items-center shadow-[7px_5px_8px_0px_rgba(0,0,0,0.4)]">
              <Image 
                className="h-[36px] mr-1"
                src={left}
              />
            </button>
          </Link>
        )}
      <Outlet />{/* main content */}
    </main>
    </div>
  )
}

export default DefaultLayout