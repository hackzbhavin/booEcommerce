import React from 'react'
// import {Link} from 'gatsby'
// import {Gi3DGlasses} from 'react-icons/gi'
import {FaCartArrowDown} from 'react-icons/fa'
// import {GiBookStorm} from 'react-icons/gi'

import { Navbar, Nav } from 'react-bootstrap';


export default function NavbarNav() {

    return (

        <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className='fixed-top p-2'>
        <Navbar.Brand href="/" className='mx-5'>Boo-Ecommerce</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto mr-5">
            <Nav.Link href="/products">Products</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/"><FaCartArrowDown className="cart-icon snipcart-checkout" /></Nav.Link>
  
          
          </Nav>
  
        </Navbar.Collapse>
      </Navbar>
    )
}

