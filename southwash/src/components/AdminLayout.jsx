import { Link, Outlet } from "react-router-dom"
import Header from "./Header"
import Image from 'react-bootstrap/Image';
import logout from '../assets/logout.png'
import { useContext, useEffect, useState } from "react"
import { Navigate } from "react-router-dom"
import { AppContext } from "../contexts/AppContext"
import pawtop from '../assets/pawtop.png'
import pawbelow from '../assets/pawbelow.png'

function GuestLayout() {
  const { token, setToken } = useContext(AppContext)
  const [toggle, setToggle] = useState(localStorage.getItem('currentPage') || 'Home')

  useEffect(() => {
    localStorage.setItem('currentPage', toggle)
  }, [toggle])

  const handleLogout = () => {
    localStorage.removeItem('ACCESS_TOKEN')
    localStorage.removeItem('currentPage')
    setToken(null)
  }

  const handleToggle = (link) => {
    setToggle(link)
  }

  if (!token) {
    return <Navigate to="/login" />
  }

  return (
    <div>
      <Header />
      <main className="relative grid place-content-center min-h-[93vh] ">
        <aside className="z-40 py-[70px] bg-[#77CBFF] absolute right-0 top-0 bottom-0 w-[278px]">
          <div className="flex flex-col justify-between h-full">
            <div>
              <Link to='/dashboard' onClick={() => handleToggle('Home')} className={`${toggle == 'Home' ? 'bg-[#0A58A2] text-white shadow-md' : '' }   h-[56px] flex items-center place-content-center no-underline`}>Manage Post</Link>
              <Link to='/create-post' onClick={() => handleToggle('Create Post')} className={`${toggle == 'Create Post' ? 'bg-[#0A58A2] text-white shadow-md' : '' } h-[56px] flex items-center place-content-center no-underline`}>Create Post</Link>
              <Link to='/customer-booking' onClick={() => handleToggle('Customer Bookings')} className={`${toggle == 'Customer Bookings' ? 'bg-[#0A58A2] text-white shadow-md' : '' }   h-[56px] flex items-center place-content-center no-underline`}>Customer Bookings</Link>
            </div>
            <form onSubmit={(e) => e.preventDefault()} className='grid place-content-center'>
              <button className="flex space-x-3 items-center" onClick={handleLogout}>
                <Image
                  className="h-[40px] w-[40px]"
                  src={logout}
                  alt="Logout Icon"
                />
                <span>
                  Logout
                </span>
              </button>
            </form>
          </div>
        </aside>
        <img className='absolute top-[150px] left-0 z-10' src={pawtop} alt="" />
        <img className='absolute bottom-[150px] right-[300px] z-10' src={pawbelow} alt="" />
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
        <Outlet />
      </main>
    </div>
  )
}

export default GuestLayout