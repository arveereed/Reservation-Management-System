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
import EditPost from "./pages/admin/EditPost.jsx";
import Booked from "./pages/book/Booked.jsx";
import Faqs from './pages/Faqs.jsx'
import AboutUs from './pages/AboutUs.jsx'
import ContactUs from "./pages/ContactUs.jsx";
import Transaction from "./pages/Transaction.jsx";
import ShowTransaction from "./pages/ShowTransaction.jsx";

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
      {
        path: "/transaction",
        element: <Transaction />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
      },
      {
        path: "/faqs",
        element: <Faqs />,
      },
      {
        path: "/customer-booking/:id",
        element: <ShowTransaction />,
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
        path: "/edit-post/:id",
        element: <EditPost />,
      },
      {
        path: "/customer-booking",
        element: <CustomerBooking />,
      },
      {
        path: "/customer-booking/:id",
        element: <Booked />,
      },
    ]
  },
  {
    path: "*",
    element: <NotFound />
  }
]);

export default router;