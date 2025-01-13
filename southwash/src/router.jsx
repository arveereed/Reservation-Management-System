import { createBrowserRouter } from "react-router-dom";
import NotFound from './pages/NotFound.jsx'
import Home from "./pages/Home.jsx";
import Login from './pages/Login.jsx'
import Signup from './pages/Signup.jsx'
import GuestLayout from "./components/GuestLayout.jsx";
import DefaultLayout from "./components/DefaultLayout.jsx";
import Booknow from "./pages/book/Booknow.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
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
    element: <GuestLayout />,
    children: [
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/signup",
        element: <Signup />
      }
    ]
  },
  {
    path: "*",
    element: <NotFound />
  }
]);

export default router;