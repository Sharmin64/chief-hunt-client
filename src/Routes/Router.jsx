import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Main from "../layout/Main/Main";
import Blog from "../layout/Blog/Blog";
import ErrorPage from "../layout/ErrorPage/ErrorPage";
import LoginLayout from "../layout/LoginLayout/LoginLayout";
import Login from "../Pages/AuthLogin/Login/Login";
import Register from "../Pages/AuthLogin/Register/Register";
import ExtraLayout from "../layout/ExtraLayout/ExtraLayout";
import About from "../Pages/About/About";


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Main></Main>
      },
     
    ]
  },
  {
    path: '/',
    element: <LoginLayout></LoginLayout>,
    children: [
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      }
    ]
  },
  {
    path: '/',
    element: <ExtraLayout></ExtraLayout>,
    children: [
      {
        path: '/blog',
        element: <Blog></Blog>
      },
      {
        path: '/about',
        element: <About></About>
      }
    ]
  }
  
])




export default router;