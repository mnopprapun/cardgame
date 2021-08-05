import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

const NavBar = ({ user, setUser }) => {


  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);
  return (
    <div className="nav-content">
      {/* <div className="logo">
        <h1 className="App-header">
          Ready To Go To War?
        </h1>
      </div> */}
      <Navbar className="nav-bar" dark>
        <NavbarBrand href="/" className="nav-brand">MENU</NavbarBrand>
        <h1 className="App-header">
          Ready To Go To War?
        </h1>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem >
              <NavLink className="nav-item" href="/gameboard">Play The Game</NavLink>
            </NavItem>
            <NavItem >
              <NavLink className="nav-item" href="/about">Learn About Us</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  )
}
export default NavBar;
