import React from 'react';
import { NavLink } from 'react-bootstrap-v5';

function Navigate() {
  return (<>
    <nav className="navbar navbar-expand-lg bg-body-tertiary pe-5">
      <div className="container-fluid">
        <div className="ms-5 ps-5">
          <NavLink className="navbar-brand fs-1 fw-bold ms-5" to="/">VILLA</NavLink>
        </div>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div>
        <div className="collapse navbar-collapse menu-content" id="navbarNav">
          <ul className="navbar-nav pe-5">
            <li className="nav-item pe-5">
              <NavLink className="nav-link active fs-5" aria-current="page" to="/*">Home</NavLink>
            </li>
            <li className="nav-item pe-5">
              <NavLink className="nav-link fs-5" to="/properties">Properties</NavLink>
            </li>
            <li className="nav-item pe-5">
              <NavLink className="nav-link fs-5" to="/propertydetails">Property Details</NavLink>
            </li>
            <li className="nav-item pe-5">
              <NavLink className="nav-link fs-5" to="/contactus">Contact Us</NavLink>
            </li>
            <li className="nav-item pe-5">
            <div className='nav-schdule-link d-flex'>
            <div className='w-25 bg-warning rounded-5'>
            <i class="fa-regular fa-calendar fs-3 p-2 ms-1" style={{color: "#ffffff"}}></i>
            </div>
            <div className='w-75 bg-dark'>
            <NavLink className="nav-link text-white" to="/schedulevisit">Schedule a Visit</NavLink>
            </div>
            </div>
            </li>
          </ul>
        </div>
        </div>
      </div>
    </nav>
  </>
  );
}

export default Navigate;