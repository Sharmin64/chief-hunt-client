import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../Pages/Provider/AuthProvider';
import { FaUserCircle } from "react-icons/fa";




const Header = () => {
  const {user,logOut} = useContext(AuthContext)

  const handleLogOut = () => {
    logOut()
      .then()
    .catch(error=> console.log(error))
  }
  return (
    <nav className='my-nav'>
    <div className="navba flex justify-center  lg:justify-between flex-col md:flex-row ">
  <div className="flex-1">
    <a className="btn btn-ghost normal-case text-xl text-[#003044]">Food Valley</a>
  </div>
  <div className="flex justify-around gap-2 sm:grid-row-1 hidden md:flex items-center space-x-1">
    <div className="flex items-center list-none space-x-6 text-[#ff8440]">
     <NavLink className={({ isActive }) => (isActive ? 'text-[#848AFE]' : '')} to='/'><li>Home</li></NavLink>
    <NavLink className={({ isActive }) => (isActive ? 'text-[#848AFE]' : '')} to='/blog'> <li>Blog</li></NavLink>
    <span>
            {user ?
 <Link> <button onClick={handleLogOut}>Logout</button></Link> :
 <NavLink className={({ isActive }) => (isActive ? 'text-[#848AFE]' : '')} to='/login'> <li>Login</li></NavLink>
}
            </span>
            <NavLink className={({ isActive }) => (isActive ? 'text-[#848AFE]' : '')} to='/about'> <li>About</li></NavLink>
            {user &&
    <FaUserCircle title={user.displayName} style={{ color: '#00d5f2', fontSize:'2rem'}}></FaUserCircle>
            }
           
    </div>
 
  </div>
</div>
    
    </nav>
  );
};

export default Header;
