import React from 'react';
import companylogo from '../components/images/companylogo.jpg';
import '../components/headerstyle.css';
import { NavLink} from 'react-router-dom';
 

export default function header() {
  return (
    <div className="navbar p-0 header">
            <img src={companylogo} className="logo ms-4 p-1" alt="company logo"/>
            <p className="navbar-brand me-auto text-uppercase fs-1 mt-3">scholarship</p>
            <NavLink to="/signup" className="btn me-3 ms-3">Sign up</NavLink>
            <NavLink to="/signin" className="btn me-4 ">Sign in</NavLink>
                      
    </div>
  )
}
