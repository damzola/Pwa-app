import React from "react";
import {Nav, Navbar } from 'react-bootstrap';
function Heading(){
    return(
        <div className=" ps-2 shadow">
        <Navbar bg="light" data-bs-theme="light">
        
          <Navbar.Brand href="/">Pwa-app</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/book">Books</Nav.Link>
            <Nav.Link href="/latest">New Books</Nav.Link>
            <Nav.Link href="/old">Old Books</Nav.Link>
          </Nav>
        
      </Navbar>
        </div>
    )
}
export default Heading