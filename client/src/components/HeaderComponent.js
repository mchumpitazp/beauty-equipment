import React from 'react';
import { Container, Navbar, NavbarBrand, Nav, NavItem } from 'reactstrap';
import { baseUrl } from '../baseUrl';

function Header () {
    return (
        <Container>
            <Navbar>
                <NavbarBrand href='/'>
                    <img className='d-none d-sm-block' src={baseUrl+'/frames/logo.jpg'} height='30px' alt="logo" />
                    <img className='d-block d-sm-none' src={baseUrl+'/frames/logo.jpg'} height='20px' alt="logo" />
                </NavbarBrand>

                <Nav navbar className='flex-row'>
                    <NavItem className='d-none d-lg-block me-4'>
                            <i className='bi-envelope'></i>
                            <span className='ms-2'>sales@beequipmentpharma.com</span>
                    </NavItem>
                    <NavItem className='d-none d-sm-block'>
                            <i className='bi-telephone-outbound'></i>
                            <span className='ms-2'>+372 (698) 99 65</span>
                    </NavItem>
                    <NavItem className='d-block d-sm-none nav-item-sm'>
                            <i className='bi-telephone-outbound'></i>
                            <span className='ms-2'>+372 (698) 99 65</span>
                    </NavItem>
                </Nav>
            </Navbar>
        </Container>
    );
}

export default Header;