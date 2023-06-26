import React from 'react';
import aboutus from './images/about us.jpg';


export default function AboutUs() {
  return (
    <div className='mt-3'>
        <h1 className='text-capitalize text-center'>about us</h1>
      <img src={aboutus} className='col-6 offset-3'/>
        
        <div className='ms-5 me-5 mt-4'>
        <p>Founded in 1998,JP Group has helped students find money for college and learn about the entire 
          financial aid process. We are among the most widely-used and trusted free college scholarship search and 
          financial aid information resources on the Internet and have been recognized by high schools, colleges 
          and universities nationwide, among others. We’ve built solid relationships with colleges and universities
           across the country and want to provide students with the opportunity to not only find free money for 
           college and interact with prospective colleges but to be recruited as well.</p>

        <p>JP Group Scholarship is a technology-enabled initiative by JP Group of Technologies Limited. 
            This enables underprivileged students to receive financial assistance via corporate-funded scholarships. 
            It aims to bridge the gap in Education finance in the country through an online platform.</p> 
            <p>Students can search and apply to various education finance schemes they are qualified for.
              Fund providers, industries, and corporates can promote skill development by designing education finance schemes provided
               on merit by fund providers,industries, and corporates.</p>
             <p>Ever since its inception,we has received tremendous response from the student community. More than 10 lakh students have 
              registered on the Vidyasaarathi portal and many leading names from the Indian corporate sector have disbursed scholarships 
              through the platform (as on January 2022).</p>
           </div>  
      
    </div>
  );
}
