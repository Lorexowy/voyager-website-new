import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { FaBars, FaSearch, FaTimes, FaShoppingBag } from 'react-icons/fa';

const HeaderWrapper = styled.header`
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 1000;
  background-color: ${props => props.theme.colors.headerBackground};
  box-shadow: ${props => props.scrolled ? props.theme.shadows.medium : 'none'};
  transition: ${props => props.theme.transitions.medium};
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: ${props => props.theme.container.maxWidth};
  margin: 0 auto;
  padding: ${props => props.scrolled 
    ? `${props.theme.spacing.s} ${props.theme.spacing.m}`
    : `${props.theme.spacing.m} ${props.theme.spacing.m}`};
  transition: padding 0.3s ease;
`;

const LogoContainer = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
`;

const LogoText = styled.h1`
  font-family: ${props => props.theme.typography.headingFont};
  font-size: ${props => props.scrolled ? props.theme.fontSizes.large : props.theme.fontSizes.xlarge};
  font-weight: ${props => props.theme.fontWeights.bold};
  color: ${props => props.theme.colors.primary};
  margin: 0;
  transition: ${props => props.theme.transitions.medium};
  letter-spacing: 2px;
`;

const NavContainer = styled.nav`
  display: flex;
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    display: none;
  }
`;

const NavList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: ${props => props.theme.spacing.l};
`;

const NavItem = styled.li`
  position: relative;
`;

const NavLink = styled(Link)`
  font-family: ${props => props.theme.typography.bodyFont};
  font-size: ${props => props.theme.fontSizes.small};
  font-weight: ${props => props.theme.fontWeights.medium};
  color: ${props => props.isActive ? props.theme.colors.primary : props.theme.colors.text};
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 1px;
  padding: ${props => props.theme.spacing.xs} ${props => props.theme.spacing.s};
  transition: ${props => props.theme.transitions.short};
  
  &:after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: ${props => props.isActive ? '100%' : '0'};
    height: 2px;
    background-color: ${props => props.theme.colors.primary};
    transition: width 0.3s ease;
  }
  
  &:hover {
    color: ${props => props.theme.colors.primary};
    
    &:after {
      width: 100%;
    }
  }
`;

const IconsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.m};
`;

const IconButton = styled.button`
  background: none;
  border: none;
  color: ${props => props.theme.colors.text};
  font-size: ${props => props.theme.fontSizes.medium};
  cursor: pointer;
  padding: ${props => props.theme.spacing.xs};
  transition: ${props => props.theme.transitions.short};
  
  &:hover {
    color: ${props => props.theme.colors.primary};
  }
`;

const MobileMenuButton = styled(IconButton)`
  display: none;
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    display: block;
  }
`;

const MobileMenu = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 80%;
  max-width: 350px;
  background-color: ${props => props.theme.colors.background};
  box-shadow: ${props => props.theme.shadows.large};
  transform: translateX(${props => props.isOpen ? '0' : '100%'});
  transition: transform 0.3s ease-in-out;
  z-index: 1100;
  padding: ${props => props.theme.spacing.xl};
  display: flex;
  flex-direction: column;
`;

const MobileMenuHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${props => props.theme.spacing.xl};
`;

const MobileMenuTitle = styled.h2`
  font-family: ${props => props.theme.typography.headingFont};
  font-size: ${props => props.theme.fontSizes.large};
  color: ${props => props.theme.colors.primary};
  margin: 0;
`;

const CloseButton = styled(IconButton)`
  font-size: ${props => props.theme.fontSizes.large};
`;

const MobileNavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const MobileNavItem = styled.li`
  margin-bottom: ${props => props.theme.spacing.l};
`;

const MobileNavLink = styled(Link)`
  font-family: ${props => props.theme.typography.bodyFont};
  font-size: ${props => props.theme.fontSizes.large};
  color: ${props => props.isActive ? props.theme.colors.primary : props.theme.colors.text};
  text-decoration: none;
  font-weight: ${props => props.isActive ? props.theme.fontWeights.medium : props.theme.fontWeights.regular};
  transition: ${props => props.theme.transitions.short};
  
  &:hover {
    color: ${props => props.theme.colors.primary};
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1050;
  opacity: ${props => props.isOpen ? 1 : 0};
  visibility: ${props => props.isOpen ? 'visible' : 'hidden'};
  transition: opacity 0.3s ease, visibility 0.3s ease;
`;

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  // Efekt do śledzenia przewijania strony
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);
  
  // Zamykanie menu mobilnego po zmianie strony
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);
  
  // Blokowanie przewijania gdy menu mobilne jest otwarte
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
    <HeaderWrapper scrolled={scrolled}>
      <HeaderContainer scrolled={scrolled}>
        <LogoContainer to="/">
          <LogoText scrolled={scrolled}>VOYAGER</LogoText>
        </LogoContainer>
        
        <NavContainer>
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
        </NavContainer>
        
        <IconsContainer>
          <IconButton aria-label="Wyszukaj">
            <FaSearch />
          </IconButton>
          <IconButton aria-label="Koszyk">
            <FaShoppingBag />
          </IconButton>
          <MobileMenuButton onClick={toggleMenu} aria-label="Menu">
            <FaBars />
          </MobileMenuButton>
        </IconsContainer>
      </HeaderContainer>
      
      {/* Menu mobilne */}
      <MobileMenu isOpen={isMenuOpen}>
        <MobileMenuHeader>
          <MobileMenuTitle>Menu</MobileMenuTitle>
          <CloseButton onClick={toggleMenu}>
            <FaTimes />
          </CloseButton>
        </MobileMenuHeader>
        
        <MobileNavList>
          <MobileNavItem>
            <MobileNavLink to="/" isActive={isActive('/')} onClick={toggleMenu}>
              Strona główna
            </MobileNavLink>
          </MobileNavItem>
          <MobileNavItem>
            <MobileNavLink to="/torebki" isActive={isActive('/torebki')} onClick={toggleMenu}>
              Torebki
            </MobileNavLink>
          </MobileNavItem>
          <MobileNavItem>
            <MobileNavLink to="/paski" isActive={isActive('/paski')} onClick={toggleMenu}>
              Paski
            </MobileNavLink>
          </MobileNavItem>
          <MobileNavItem>
            <MobileNavLink to="/plecaki" isActive={isActive('/plecaki')} onClick={toggleMenu}>
              Plecaki
            </MobileNavLink>
          </MobileNavItem>
          <MobileNavItem>
            <MobileNavLink to="/personalizacja" isActive={isActive('/personalizacja')} onClick={toggleMenu}>
              Personalizacja
            </MobileNavLink>
          </MobileNavItem>
          <MobileNavItem>
            <MobileNavLink to="/aleksandra-sopel" isActive={isActive('/aleksandra-sopel')} onClick={toggleMenu}>
              AS | Aleksandra Sopel
            </MobileNavLink>
          </MobileNavItem>
        </MobileNavList>
      </MobileMenu>
      
      <Overlay isOpen={isMenuOpen} onClick={toggleMenu} />
    </HeaderWrapper>
  );
};

export default Header;