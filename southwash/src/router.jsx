import { createBrowserRouter } from "react-router-dom";
import NotFound from './pages/NotFound.jsx'
import Home from "./pages/Home.jsx";
import Login from './pages/Login.jsx'
import AdminLayout from "./components/AdminLayout.jsx";
import GuestLayout from "./components/GuestLayout.jsx";
import Booknow from "./pages/book/Booknow.jsx";
import CreatePost from "./pages/admin/CreatePost.jsx";
import Dashboard from "./pages/admin/Dashboard.jsx";
import { CustomerBooking } from "./pages/admin/CustomerBooking.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <GuestLayout />,
    children: [
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/:home",
        element: <Home />,
      },
      {
        path: "/:home/:booknow",
        element: <Booknow />,
      },
    ]
  },
  {
    path: "/",
    element: <AdminLayout />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/create-post",
        element: <CreatePost />,
      },
      {
        path: "/customer-booking",
        element: <CustomerBooking />,
      },
    ]
  },
  {
    path: "*",
    element: <NotFound />
  }
]);

export default router;