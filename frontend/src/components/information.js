import Accordion from 'react-bootstrap/Accordion';
import React from 'react';

export default function Information() {
  return (
    <div className='col-10 offset-1 mt-3'>
      <h1 className='text-capitalize text-center'>information</h1>
    <Accordion defaultActiveKey="0" flush>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Privacy Policy</Accordion.Header>
        <Accordion.Body>
        <p>Our Website requests you to provide personal information, you will be informed for the particular purposes 
            for which the information is gathered and adequate security measures will be taken to protect your personal 
            information.</p>
            <p>We do not sell or share any personally identifiable information volunteered on the Website to any 
            third party (public/private). Any information provided to this website will be protected from loss, misuse, 
            unauthorized access or disclosure, alteration, or destruction.</p>
            <p><ion-icon name="at-outline"></ion-icon>Email : helpdesk@jpgroupscholarship.in</p>
          
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Copy Rights</Accordion.Header>
        <Accordion.Body>
        <p>Contents of this website may not be reproduced partially or fully, without due permission from 
              National Scholarships Committe. If referred to as a part of another website, the source must be
               appropriately acknowledged. The contents of this website can not be used in any misleading or 
               objectionable context.</p>
        </Accordion.Body>
      </Accordion.Item>
      
      <Accordion.Item eventKey="2">
        <Accordion.Header>Terms and Conditions</Accordion.Header>
        <Accordion.Body>
        <p> By accessing this website we assume you accept these terms and conditions.Our Terms and Conditions were created 
                    with the help of the Terms & Conditions Generator.The following terminology applies to these Terms and Conditions,
                  Privacy Statement and Disclaimer Notice and all Agreements: "Client", "You" and "Your" refers to
                   you, the person log on this website and compliant to the Company’s terms and conditions.
                    "The Company", "Ourselves", "We", "Our" and "Us", refers to our Company. "Party", "Parties", 
                    or "Us", refers to both the Client and ourselves. All terms refer to the offer, acceptance and 
                    consideration of payment necessary to undertake the process of our assistance to the Client in 
                    the most appropriate manner for the express purpose of meeting the Client’s needs in respect of
                     provision of the Company’s stated services, in accordance with and subject to, prevailing law 
                     of India. Any use of the above terminology or other words in the singular, plural, 
                     capitalization and/or he/she or they, are taken as interchangeable and therefore as referring 
                     to same.</p>
          
        </Accordion.Body>
      </Accordion.Item>
      
      <Accordion.Item eventKey="3">
        <Accordion.Header>Cookies</Accordion.Header>
        <Accordion.Body>
        <p>We employ the use of cookies. By accessing our website you agreed to use cookies in 
          agreement with the Privacy Policy. Most interactive websites use cookies to let us retrieve
           the user’s details for each visit. Cookies are used by our website to enable the functionality of certain
            areas to make it easier for people visiting our website. Some of our affiliate partners may 
            also use cookies.</p>   
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </div>
  );
}
