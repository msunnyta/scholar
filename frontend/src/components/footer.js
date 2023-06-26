import React from 'react'; 
import '../components/footerstyle.css';
import { FaGoogle } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';


export default function Footer() {
  return (
    <div className="footer mt-4">
            <div className="row d-lg-flex lh-5 ms-5">
                <div className="col text-capitalize mt-4">
                 <ul className='list'>
                    <li className='list-item'>home</li>
                    <li className='list-item'>notifications</li>
                    <li className='list-item'>about us</li>
                    <li className='list-item'>services</li>
                    <li className='list-item'>FAQ</li>
                 </ul>
                </div>
                
                <div className="col text-capitalize mt-4">
                    <ul className='list'>
                    
                        <li className='list-item'>our team</li>
                        <li className='list-item'>address</li>               
                        <li className='list-item'>reach us</li> 
                        <p className='mt-2'>
                          <FaGoogle className='icon me-1' size="22"/> 
                          <FaFacebook className='icon me-1' size="23"/>
                        <FaTwitter className='icon me-1' size="23"/>
                        <FaLinkedin className='icon me-1' size="25"/>
                        <FaYoutube className='icon me-1' size="25"/>
                        </p>
                        
                         
                        
                    </ul>  
                </div>
      </div>
      <p className='ms-5 ps-4'>Copyright@2023 JP Group Scholarship</p>
    </div>
    
  );
}
