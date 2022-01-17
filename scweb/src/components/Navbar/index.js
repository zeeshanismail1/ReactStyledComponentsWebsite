import React from 'react'
import {FaBars} from 'react-icons/fa'
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll';
import { Nav,NavContainer,NavLogo,
MobileIcon,NavMenu,NavItem,NavLinks,
NavBtn,NavBtnLink } from './NavbarElements';

const Navbar = ({toggle}) => {

    const toggleHome = () => {
        scroll.scrollToTop();
    };

    return (
        <>
        <IconContext.Provider value={{color: '#fff'}}>
          <Nav>
            <NavContainer>
                <NavLogo to='/' onClick={toggleHome}>Webevis</NavLogo>
                <MobileIcon onClick={toggle} >
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to="about">About</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="discover">Discover</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="services">Services</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="signup">Sign Up</NavLinks>
                    </NavItem>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to='/signin'>Sign In</NavBtnLink>
                </NavBtn>
            </NavContainer>
          </Nav>
          </IconContext.Provider>
        </>
    );
}

export default Navbar
