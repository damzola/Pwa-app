import React from "react";
// import {Nav, Navbar } from 'react-bootstrap';
import { Link } from "react-router-dom";
function Heading(){
    return(
        
      <div className="shadow sticky-top">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">Pwa-app</Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/book">Books</Link>
                </li>
              </ul>
           
            <form className="ms-auto">
          <div className="input-group">
            <input
              type="search"
              placeholder="Search For Something"
              className="form-control input-group-text shadow-0 border-2"
            />
            <input
              type="submit"
              value="Search now"
              className="border-2 btn btn-success shadow"
            />
          </div>
        </form>
        </div>
          </div>
        </nav>
    </div>
    
        
    )
}
export default Heading