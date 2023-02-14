import React from 'react';
import { Container, Navbar, NavbarBrand, Nav, NavItem } from 'reactstrap';
import { baseUrl } from '../baseUrl';

function Header () {
    return (
        <Container>
            <Navbar>
                <NavbarBrand href='/'>
                    {/* <img src="/logo.png" height='30px' alt="logo" /> */}
                    <img src={baseUrl+'/frames/logo.png'} height='30px' alt="logo" />
                </NavbarBrand>

                <Nav navbar className='flex-row'>
                    <NavItem className='d-none d-md-block'>
                            <i className='bi-envelope'></i>
                            <span className='ms-2'>info@be.com</span>
                    </NavItem>
                    <NavItem className='ms-4'>
                            <i className='bi-telephone-outbound'></i>
                            <span className='ms-2'>8 800 000 00 01</span>
                    </NavItem>
                </Nav>
            </Navbar>
        </Container>
    );
}

export default Header;