import Accordion from 'react-bootstrap/Accordion';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import{faIdCard} from '@fortawesome/free-solid-svg-icons';
import{faGraduationCap} from '@fortawesome/free-solid-svg-icons';
import{faSquarePollHorizontal} from '@fortawesome/free-solid-svg-icons';
import{faCalendarDays} from '@fortawesome/free-solid-svg-icons';

export default function AccordionCollapse() {
  return (
    <Accordion className='col-10 offset-1 mt-3'>
      <h1 className='text-capitalize text-center text-capitalization'>FAQ</h1>
      <Accordion.Item eventKey="0">
        <Accordion.Header>What is the scholarship criteria?</Accordion.Header>
        <Accordion.Body>
        <ul>
          <li>Applicant age should be 17+.</li>
          <li>Applicant should be a 12th/equalent pass with 75% and above score.<FontAwesomeIcon icon={faGraduationCap} size="lg"/></li>
          <li>Adhaar card & PAN Card mandatory <FontAwesomeIcon icon={faIdCard} size="lg"/></li>
          <li>Applicant should have a JEE Advance qualified score card <FontAwesomeIcon icon={faSquarePollHorizontal} /></li>
          </ul>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>What are the scholarship terms & conditions?</Accordion.Header>
        <Accordion.Body>
        <ul>
          <li>The scholarship is valid for participants enrolling in a UG and PG college in 2023.</li>
          <li>The scholarship offered is applicable for the first year only.</li>
          <li>The colleges Prioratized  for this scholarship are Masters’ Union, 
              IIM Indore, IIM Rohtak,IIM Ahmedabad, IITs, BITS & Delhi University</li>
        </ul> 
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>How long it takes for the approval of the scholarship?</Accordion.Header>
        <Accordion.Body>
        Applicant after submitting the form its take 20 working days to check the status of their application 
        <FontAwesomeIcon icon={faCalendarDays} />
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>Is this a governtment scholarship?</Accordion.Header>
        <Accordion.Body>
        This is a governtment approved private organization scholarship.This is the only official website to apply. 
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}


