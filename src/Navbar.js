
// import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './App.css'
import lmsLogo from './assets/lmsLgog.png'
// import Agenda from "./Agenda";
// import { Navbar, Container } from 'react-bootstrap'; 


function NavScrollExample() {
  return (
    <>
    
    <Navbar expand="lg" className="bg-body-tertiary">
    <img className = "log" src={lmsLogo} alt="LMS Logo" />
      <Container fluid>
        <Navbar.Brand><Nav.Link href="/">LMS.AI</Nav.Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="./Agenda">Agenda</Nav.Link>
            {/* <Nav.Link href="/student-form">Student </Nav.Link> */}
            <Nav.Link href="Documentation">Documentations</Nav.Link>
            {/* <Nav.Link href="/teacher-form">Teacher</Nav.Link> */}
            
            {/* <Nav.Link href="/hiring-manager"> */}
            
              {/* Hiring Manager */}
            {/* </Nav.Link> */}
            <NavDropdown title="Profile" id="navbarScrollingDropdown">
              <NavDropdown.Item><Nav.Link as={Link}to="/student-form">Student</Nav.Link></NavDropdown.Item>
              <NavDropdown.Item><Nav.Link as={Link} to="/teacher-form">Teacher</Nav.Link>
                
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/hiring-manager">
                Hiring manager
              </NavDropdown.Item>

            </NavDropdown>
            
          {/* </Nav> */}
          

          {/* <div className={darkMode? 'dark-mode': 'light-mode'}>
          <Button onClick={toggleTheme}>
            {darkMode? 'Light Mode' : 'Dark Mode'}
          </Button>
          </div> */}
          <Nav.Link href="#action5">Start Learning with AI</Nav.Link></Nav>
          <Nav.Link as = {Link} to="/"className="toggle-link" > <strong>Sign-Up || -In</strong> </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}

export default NavScrollExample;

// {/* <Form className="d-flex">
//             <Form.Control
//               type="search"
//               placeholder="Search"
//               className="me-2"
//               aria-label="Search"
//             />
//             <Button variant="outline-success">Search</Button>
//           </Form> */}