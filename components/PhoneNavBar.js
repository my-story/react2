import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import Logo from '../public/images/reboundLogo01.png';
import ProfileGlyph from '../public/images/icons8-name-90.png';
import Logout from './auth/Logout';

const PhoneNavBar = (props) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);
 
    return (
        <div className="nav-bar-outer">
          <Navbar color="faded" light>
            <NavbarBrand href="/" className="mr-auto">
                <img id="logo-rebound-mobile" src={Logo} />										
            </NavbarBrand>
            <NavbarToggler onClick={toggleNavbar} className="mr-2" />
            <Collapse isOpen={!collapsed} navbar>
              <Nav navbar>
                <NavItem>
                  <NavLink id="nav-word" href="/rebound-talks">Podcast</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink id="nav-word"  href="/contact-us">Contact</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink id="nav-word" href="/about">About us</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
      );
}

export default PhoneNavBar;