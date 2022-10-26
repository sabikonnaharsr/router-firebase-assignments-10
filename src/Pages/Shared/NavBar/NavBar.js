import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { IconName,FaUserCircle } from "react-icons/fa";
import userEvent from '@testing-library/user-event';

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
      <div className="navbar bg-base-100">
  <div className="navbar-start">
 
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
      </label>
        <NavLink className='p-4 text-2xl font-bold'>Explore Knowledge</NavLink>
        <NavLink className='p-4' to= '/'>Homepage</NavLink>
        <NavLink className='p-4' to='/courses'>Courses</NavLink>
        <NavLink className='p-4'to ='/blogs'>Blogs</NavLink>
      
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Homepage</a></li>
        <li><a>Courses</a></li>
        <li><a>Blogs</a></li>
      </ul>
    </div>
  </div>
  <div>
  </div>
  <div/>
  <div className="navbar-center">
    <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
  </div>
  <div className="navbar-end">
  <button className="btn btn-ghost btn-circle">
      <div className="indicator">
      <input type="checkbox" className="toggle toggle-md" checked />
      </div>
    </button>
    <button className="btn btn-ghost btn-circle">
   <Link className='text-4xl rounded'><FaUserCircle></FaUserCircle></Link>
    </button>
  </div>
</div>

    );
};

export default NavBar;