import React from 'react';
import { NavLink } from 'react-router-dom';
import '../components/contentstyle.css';


export default function Navbar() {
  return (
    <div>
        <ul className="navbar menu fs-5 list-unstyled mt-1">
                <li className="nav-item ms-5">
                <NavLink to="/" className="text text-decoration-none">Home</NavLink>
                </li>
                <li className="nav-item">
                <NavLink to="/about" className="text text-decoration-none">About Us</NavLink>
                </li>
                <li className="nav-item">
                <NavLink to="/notification" className="text text-decoration-none">News & Notifications<span className="badge bg-success">New</span></NavLink>
                </li>
                <li className="nav-item">
                <NavLink to="/information" className="text text-decoration-none">Information</NavLink>
                </li>
                <li className="nav-item"> 
                <NavLink to="/contactus" className="text text-decoration-none">Contact Us</NavLink>
                </li>
                <li className="nav-item me-5">
                <NavLink to="/faq" className="text text-decoration-none">FAQ</NavLink>
                </li> 
            </ul>
      
    </div>
  );
}
