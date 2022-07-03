import React from "react"
import {Link} from "react-router-dom"
import {Navbar,Nav,NavDropdown} from 'react-bootstrap'
// function Producto({nombre,precio}){
function Menu(props){
    return(
            <>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">MENU</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                    <Nav.Link as={Link} to="/ingresar">Login</Nav.Link>
                    <Nav.Link as={Link} to="/alta">Registro</Nav.Link>
                    <NavDropdown title="Productos" id="basic-nav-dropdown">
                        <NavDropdown.Item as={Link} to="/productos/alta">Alta</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                </Navbar.Collapse>
            </Navbar>
            </>
            
    )
}
export default Menu