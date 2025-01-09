import React from "react";
import {Nav, Navbar } from 'react-bootstrap';
// import { Link } from "react-router-dom";
function Heading(){
    return(
        
        <div className=" shadow sticky-top">
        <Navbar className="p-2" bg="light" data-bs-theme="light">
        
          <Navbar.Brand href="/"> Pwa-app</Navbar.Brand>
          <Nav className="ps-3 ">
           
            <Nav.Link href="/book">Books</Nav.Link>
            <Nav.Link href="/latest">New Books</Nav.Link>
            <Nav.Link href="/old">Old Books</Nav.Link>
          </Nav>
        
      </Navbar>
        </div>
        
    )
}
export default Heading