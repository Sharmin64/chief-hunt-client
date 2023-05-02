import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Main from "../layout/Main/Main";
import Blog from "../layout/Blog/Blog";
import ErrorPage from "../layout/ErrorPage/ErrorPage";


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
      {
        path: '/blog',
        element: <Blog></Blog>
      }
    ]
  },
  
])




export default router;