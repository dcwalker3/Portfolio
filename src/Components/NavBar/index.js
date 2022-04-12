import React from 'react'
import { Navbar, Nav, NavDropdown  } from 'react-bootstrap'

export default function NavBar() {
  return (
    <Navbar bg="dark" variant="dark">
        <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <NavDropdown title="Projects" id="basic-nav-dropdown" menuVariant="dark">
                <NavDropdown.Item href="/projects/portfolio">Portfolio</NavDropdown.Item>
                <NavDropdown.Item href="/projects/1">Project 1</NavDropdown.Item>
            </NavDropdown>
        </Nav>
    </Navbar>
  )
}
