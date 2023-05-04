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
    <div className="navbar bg-base-100">
    <div className="navbar-start">
      <div className="dropdown">
        <label tabIndex={0} className="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </label>
     
      </div>
      <a className="btn btn-ghost normal-case text-3xl">Food Valley</a>
    </div>
    <div className="navbar-center hidden  items-center lg:flex">
      <ul className="menu menu-horizontal px-1">
      <NavLink className={({ isActive }) => (isActive ? 'text-[#848AFE]' : '')} to='/about'> <li>About</li></NavLink>
        <li tabIndex={0}>
        <NavLink className={({ isActive }) => (isActive ? 'text-[#848AFE]' : '')} to='/'><li>Home</li></NavLink>
<NavLink className={({ isActive }) => (isActive ? 'text-[#848AFE]' : '')} to='/blog'> <li>Blog</li></NavLink>
        </li>
       
      </ul>
    </div>
    <div className="navbar-end">
    <span>
        {user ?
<Link> <button onClick={handleLogOut}>Logout</button></Link> :
<NavLink className={({ isActive }) => (isActive ? 'text-[#848AFE]' : '')} to='/login'> <li>Login</li></NavLink>
}
        </span>
       
        {user &&
<FaUserCircle title={user.displayName} style={{ color: '#00d5f2', fontSize:'2rem'}}></FaUserCircle>
        }
    </div>
  </div>
  );
};

export default Header;






