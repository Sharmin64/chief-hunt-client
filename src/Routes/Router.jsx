import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Main from "../layout/Main/Main";


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    children: [
     
    ]
  },
  {
    path: '/',
    element: <Main></Main>
  }
])




export default router;