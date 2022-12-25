import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import "../App.css"
const AppNavBar = () => {
  const carts=useSelector(state=>state.cartSlice.Carts)
  return (
    <Navbar bg="light" sticky='top' expand="lg">
    <Container>
      <Link className={"navbar-brand"} to={"/"}>Cart App</Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <NavLink to={"/"} >Broducts</NavLink>
          <NavLink to={"/cart"}>Cart-{carts.length}</NavLink>
          
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default AppNavBar