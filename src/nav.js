import React from 'react';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import Score from './score'

function Navbar() {
    return (
        <Nav fill className="justify-content-center" varient="dark" bg="dark">
            <Nav.Item>Clicky Game</Nav.Item>
            <Nav.Item>Correct/Not</Nav.Item>
            <Nav.Item>Score: </Nav.Item>

        </Nav>
    );
}
export default Navbar;