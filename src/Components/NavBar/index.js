import React from 'react'
import { Navbar, Nav, NavDropdown  } from 'react-bootstrap'

import './index.css';

export default function NavBar() {
  return (
    <Navbar bg="dark" variant="dark">
      {/* NavBar Branding */}
      <div className='navBrand'>
        <Navbar.Brand href="/" className='navBrand'>Dakota Walker</Navbar.Brand>
      </div>

      {/* NavBar Links */}
      <Nav className="mr-auto navLinks">
          <Nav.Link href="/">Home</Nav.Link>

          {/* Dropdown Menu */}
          <NavDropdown title="Projects" id="basic-nav-dropdown" menuVariant="dark">
              <NavDropdown.Item href="/projects/portfolio">Portfolio</NavDropdown.Item>
          </NavDropdown>

          {/* About Me */}
          <Nav.Link href="/about">About</Nav.Link>
      </Nav>
    </Navbar>
  )
}
