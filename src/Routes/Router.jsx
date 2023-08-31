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

import CategoriesLayout from "../layout/CategoriesLayout/CategoriesLayout";
import FoodDetails from "../Pages/FoodDetails/FoodDetails";
import PrivateRoute from "./PrivateRoute";

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
    path: '/categories',
    element: <CategoriesLayout />,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: ':id',
        element: <PrivateRoute><FoodDetails/></PrivateRoute>,
        loader: ({params})=> fetch(`https://assignment-10-server-side-chef-hunter-sharmin64.vercel.app/categories/${params.id}`)
      }
    ]
  },
  {
    path: '/',
    element: <LoginLayout></LoginLayout>,
    errorElement: <ErrorPage></ErrorPage>,
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
    errorElement: <ErrorPage></ErrorPage>,
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