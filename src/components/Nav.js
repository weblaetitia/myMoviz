import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import {Button} from 'reactstrap'


function Navigation(props) {
  return (
        <div className="navbar">
        <Nav>
            <NavItem>
            <NavLink href="#"><img src="../img/logo.png" width="42" height="36" alt="" loading="lazy" /></NavLink>
            </NavItem>
            <NavItem>
            <NavLink style={{color: 'white'}} href="#">Last release</NavLink>
            </NavItem>
        </Nav>
        <Button href="#" className="ml-auto">X films</Button>
        </div>
  )
}

export {Navigation};