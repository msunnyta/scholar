import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import{faBuildingColumns} from '@fortawesome/free-solid-svg-icons';
import {faEarthAmericas} from '@fortawesome/free-solid-svg-icons';
import {faFlask} from '@fortawesome/free-solid-svg-icons';
import './contentstyle.css';

export default function Cards() {
  return (
    <div className='mt-4 ms-5 me-5'>
    <h1 className='text-capitalize'>scholarship categories</h1>
    <div className="row mt-4">
        <div className="col-sm-4">
          <div className="card text-center">
          <FontAwesomeIcon icon={faEarthAmericas} className="mt-4" style={{color: "#1A237E",}} size="9x" />            
            <div className="card-body">
              <h5 className="card-title text-capitalize">international</h5>
              <p className="card-text text-capitalize">international scholarships</p>
              <NavLink className="btn text-capitalize" to="/international">Know more</NavLink>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="card text-center">
          <FontAwesomeIcon icon={faBuildingColumns}className="mt-4" style={{color: "#1A237E",}} size="9x"/>
            <div className="card-body">
              <h5 className="card-title text-capitalize">national</h5>
              <p className="card-text text-capitalize">national scholarships</p>
              <NavLink className="btn text-capitalize" to="/national">Know more</NavLink>
            </div>
          </div>
        </div>
       
        <div className="col-sm-4">
            <div className="card text-center">
            <FontAwesomeIcon icon={faFlask} className="mt-4" style={{color: "#1A237E",}} size="9x"/>
              <div className="card-body">
                <h5 className="card-title text-capitalize">research</h5>
                <p className="card-text text-capitalize">research scholarships</p>
                <NavLink className="btn text-capitalize" to="/research">Know more</NavLink>
              </div>
            </div>
          </div>
      </div>
      </div>
      
  );
}
