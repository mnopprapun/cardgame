import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

const NavBar = ({user, setUser}) => {
function handleLogoutClick() {
	fetch("/logout", { method: "DELETE" }).then((r) => {
	  if (r.ok) {setUser(null)
	  }
	});
  }

 const [collapsed, setCollapsed] = useState(true);
 
 const toggleNavbar = () => setCollapsed(!collapsed);
	return (
	  <div className="nav-content">
	  <div className="logo">
	  <h1 className="App-header">
        Ready To Go To War?
      </h1>
	 </div>
	  <Navbar className="nav-bar" color="faded" light>
       <NavbarBrand href="/" className="nav-brand">MENU</NavbarBrand>
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
