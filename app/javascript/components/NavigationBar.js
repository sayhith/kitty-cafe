import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink, useResolvedPath } from 'react-router-dom';

const NavigationBar = () => (
    <Navbar bg="light" variant="light">
    <Container>
      <Navbar.Brand as= {NavLink} to='/'>Kitty's Café</Navbar.Brand>
      <Nav className="me-auto">
        <CustomLink as={NavLink} to='/cats'>Cats</CustomLink>
        <CustomLink as={NavLink} to='/recipes'>Recipes</CustomLink>
        <CustomLink as={NavLink} to='/market'>The Market</CustomLink>
      </Nav>
    </Container>
  </Navbar>
);

function CustomLink({ as, to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  // const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    // <li className={isActive ? "active" : ""}>
      <Nav.Link as={as} to={resolvedPath.pathname} {...props}>
        {children}
      </Nav.Link>
    // </li>
  )
}

export default NavigationBar;