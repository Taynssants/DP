import React from "react"
import { Navbar, Container, Nav } from 'react-bootstrap'
import {NavLink} from 'react-router-dom';

function Menu(){
    return (
        <Container>
            <Nav.Link href = "#Home">
                <NavLink to = {'criaProduto'}> Cria Produto</NavLink>
            </Nav.Link>

            <Nav.Link href = "#produto">
    <NavLink to = {'produtos'}> Produtos</NavLink>
</Nav.Link>

<Nav.Link href = "#princing">
    <NavLink to= {'app'}> App</NavLink>
</Nav.Link>
        </Container>




    )
}


export default Menu;