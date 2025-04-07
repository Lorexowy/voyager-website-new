import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { FaBars, FaTimes } from 'react-icons/fa';

const HeaderContainer = styled.header`
  background-color: ${props => props.theme.colors.background};
  box-shadow: ${props => props.theme.shadows.small};
  position: sticky;
  top: 0;
  z-index: 100;
`;

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${props => props.theme.spacing.m};
  max-width: ${props => props.theme.container.maxWidth};
  margin: 0 auto;
`;

const Logo = styled(Link)`
  font-size: ${props => props.theme.fontSizes.xlarge};
  font-weight: bold;
  color: ${props => props.theme.colors.primary};
  transition: color 0.3s ease;
  
  &:hover {
    color: ${props => props.theme.colors.accent};
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: ${props => props.theme.colors.primary};
  font-size: ${props => props.theme.fontSizes.large};
  cursor: pointer;
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    display: block;
  }
`;

const Nav = styled.nav`
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    position: fixed;
    top: 0;
    right: ${props => (props.isOpen ? '0' : '-100%')};
    width: 60%;
    height: 100vh;
    background-color: ${props => props.theme.colors.background};
    box-shadow: ${props => props.theme.shadows.large};
    transition: right 0.3s ease-in-out;
    padding: ${props => props.theme.spacing.xl} ${props => props.theme.spacing.l};
    z-index: 200;
  }
`;

const CloseButton = styled.button`
  display: none;
  position: absolute;
  top: ${props => props.theme.spacing.m};
  right: ${props => props.theme.spacing.m};
  background: none;
  border: none;
  color: ${props => props.theme.colors.primary};
  font-size: ${props => props.theme.fontSizes.large};
  cursor: pointer;
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    display: block;
  }
`;

const NavList = styled.ul`
  display: flex;
  list-style: none;
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    flex-direction: column;
    margin-top: ${props => props.theme.spacing.xxl};
  }
`;

const NavItem = styled.li`
  margin-left: ${props => props.theme.spacing.l};
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    margin-left: 0;
    margin-bottom: ${props => props.theme.spacing.l};
  }
`;

const NavLink = styled(Link)`
  color: ${props => props.isActive ? props.theme.colors.primary : props.theme.colors.text};
  font-weight: ${props => props.isActive ? 'bold' : 'normal'};
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: ${props => props.isActive ? '100%' : '0'};
    height: 2px;
    background-color: ${props => props.theme.colors.primary};
    transition: width 0.3s ease;
  }
  
  &:hover:after {
    width: 100%;
  }
`;

const Overlay = styled.div`
  display: ${props => (props.isOpen ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 150;
`;

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  // Zamknij menu po zmianie strony
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);
  
  // Zapobiegaj przewijaniu strony gdy menu jest otwarte
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const isActive = (path) => {
    return location.pathname === path;
  };
  
  return (
    <HeaderContainer>
      <HeaderContent>
        <Logo to="/">VOYAGER</Logo>
        
        <MobileMenuButton onClick={toggleMenu}>
          <FaBars />
        </MobileMenuButton>
        
        <Nav isOpen={isMenuOpen}>
          <CloseButton onClick={toggleMenu}>
            <FaTimes />
          </CloseButton>
          
          <NavList>
            <NavItem>
              <NavLink to="/" isActive={isActive('/')}>
                Strona główna
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/torebki" isActive={isActive('/torebki')}>
                Torebki
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/paski" isActive={isActive('/paski')}>
                Paski
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/plecaki" isActive={isActive('/plecaki')}>
                Plecaki
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/personalizacja" isActive={isActive('/personalizacja')}>
                Personalizacja
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/aleksandra-sopel" isActive={isActive('/aleksandra-sopel')}>
                AS | Aleksandra Sopel
              </NavLink>
            </NavItem>
          </NavList>
        </Nav>
        
        <Overlay isOpen={isMenuOpen} onClick={toggleMenu} />
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;