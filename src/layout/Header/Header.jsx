import React from 'react';
import { Link } from 'react-router-dom';



const Header = () => {
  return (
    <nav className='my-nav'>
    <div className="navbar">
  <div className="flex-1">
    <a className="btn btn-ghost normal-case text-xl text-[#003044]">Food Valley</a>
  </div>
  <div className="flex-none gap-2">
    <div className="flex items-center list-none space-x-6 text-[#ff8440]">
     <Link to='/'><li>Home</li></Link>
    <Link to='/blog'> <li>Blog</li></Link>
    <Link to='/login'> <li>Login</li></Link>
    <Link to='/about'> <li>About</li></Link>
    </div>
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </label>
      <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
</div>
    
    </nav>
  );
};

export default Header;