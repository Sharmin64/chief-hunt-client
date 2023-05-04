import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
//import AuthProvider from './Pages/Provider/AuthProvider.jsx'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/Router'
import AuthProvider from './Pages/Provider/AuthProvider'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   
   
    <AuthProvider>
    <RouterProvider router={router}></RouterProvider>
      </AuthProvider>
    
  
  </React.StrictMode>,
)
