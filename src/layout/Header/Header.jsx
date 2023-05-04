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
    <div className="navbar ">
  <div className="flex-1">
    <a className="btn btn-ghost normal-case text-xl text-[#003044]">Food Valley</a>
  </div>
  <div className="flex-none justify-around gap-2">
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



{/*<NavLink className={({ isActive }) => (isActive ? 'text-[#848AFE]' : '')} to='/'>Home</NavLink>*/ }

{/*<div className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
     




<div>

</div>
</div>*/}