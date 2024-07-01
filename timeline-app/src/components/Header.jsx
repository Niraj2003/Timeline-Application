import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported

function Header() {
  const handleLogout = () => {
    // Logout
    
    

  };

  return (
    <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">My Timeline App</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/login">Login</Nav.Link>
              <Nav.Link as={Link} to="/register">Register</Nav.Link>
              <Nav.Link as={Link} to="/add-timeline">Add Timeline</Nav.Link>
              <Nav.Link as={Link} to="/timelines">Timelines</Nav.Link>
              <Button variant="outline-secondary" onClick={handleLogout} className="ms-auto">Logout</Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}

export default Header;