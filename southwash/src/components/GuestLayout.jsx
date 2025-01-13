import { Outlet } from "react-router-dom"
import { useAppContext } from "../contexts/AppContext"
import Header from "./Header"

function GuestLayout() {
  // const { user, token } = useAppContext()

  // if (token) {
  //   return <Navigate to="/" />
  // }

  return (
    <div>
      <Header />
      <Outlet />
    </div>
  )
}

export default GuestLayout