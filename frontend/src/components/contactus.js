import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import{faMapLocationDot} from '@fortawesome/free-solid-svg-icons';
import{faEarthAsia} from '@fortawesome/free-solid-svg-icons';
import{faPhone} from '@fortawesome/free-solid-svg-icons';
import{faAt} from '@fortawesome/free-solid-svg-icons';
import{faBusinessTime} from '@fortawesome/free-solid-svg-icons';

export default function ContactUs() {
  return (
    <div className='mt-3 col-6 offset-3'>
      <h1 className='text-capitalize text-center'>contact us</h1>
      <h3>Head Office</h3>
      <p><FontAwesomeIcon icon={faEarthAsia} style={{color: "#1A237E",}} size="lg" />Mumbai</p>
      <p><FontAwesomeIcon icon={faMapLocationDot} style={{color: "#1A237E",}} size="lg" />Address - Times Tower, 1st Floor, Kamala Mills Compound, Lower Parel, Mumbai - 400 013.</p>
      <p><FontAwesomeIcon icon={faPhone} style={{color: "#1A237E",}} size="lg"/>Tel - (022) 4090 4484</p>

     <p><FontAwesomeIcon icon={faAt} style={{color: "#1A237E",}} size="lg" />Email : helpdesk@jpgroupscholarship.in</p>
     <p><FontAwesomeIcon icon={faBusinessTime} style={{color: "#1A237E",}} size="lg"/>Working Hours- Monday to Friday - 9:30 am to 6 pm</p>
    </div>
  );
}
