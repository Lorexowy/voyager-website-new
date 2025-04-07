import React, { useEffect } from 'react';
import { Routes, Route, Navigate, useNavigate, Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { useAuth } from '../../contexts/AuthContext';
import { logoutAdmin } from '../../firebase/firebaseService';
import ProductForm from './ProductForm';
import ProductList from './ProductList';
import { FaHome, FaBriefcase, FaList, FaSignOutAlt } from 'react-icons/fa';

const AdminContainer = styled.div`
  display: flex;
  min-height: calc(100vh - 160px); /* Uwzględniając wysokość header i footer */
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    flex-direction: column;
  }
`;

const Sidebar = styled.aside`
  width: 250px;
  background-color: ${props => props.theme.colors.lightBackground};
  padding: ${props => props.theme.spacing.l};
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    width: 100%;
    padding: ${props => props.theme.spacing.s};
  }
`;

const SidebarTitle = styled.h2`
  font-size: ${props => props.theme.fontSizes.large};
  color: ${props => props.theme.colors.text};
  margin-bottom: ${props => props.theme.spacing.m};
  padding-bottom: ${props => props.theme.spacing.s};
  border-bottom: 1px solid ${props => props.theme.colors.border};
`;

const Navigation = styled.nav`
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    display: flex;
    overflow-x: auto;
    padding-bottom: ${props => props.theme.spacing.s};
  }
`;

const NavList = styled.ul`
  list-style: none;
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    display: flex;
  }
`;

const NavItem = styled.li`
  margin-bottom: ${props => props.theme.spacing.m};
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    margin-bottom: 0;
    margin-right: ${props => props.theme.spacing.m};
  }
`;

const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  padding: ${props => props.theme.spacing.s} ${props => props.theme.spacing.m};
  color: ${props => (props.active ? props.theme.colors.primary : props.theme.colors.text)};
  font-weight: ${props => (props.active ? 'bold' : 'normal')};
  border-radius: ${props => props.theme.borderRadius.medium};
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: ${props => props.theme.colors.background};
  }
`;

const NavIcon = styled.span`
  margin-right: ${props => props.theme.spacing.s};
`;

const Content = styled.main`
  flex: 1;
  padding: ${props => props.theme.spacing.l};
  background-color: ${props => props.theme.colors.background};
`;

const PageTitle = styled.h1`
  font-size: ${props => props.theme.fontSizes.xlarge};
  color: ${props => props.theme.colors.text};
  margin-bottom: ${props => props.theme.spacing.l};
`;

const AdminPanel = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  
  // Efekt sprawdzający autentykację
  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/admin/login');
    }
  }, [isAuthenticated, navigate]);
  
  const handleLogout = async () => {
    try {
      await logoutAdmin();
      navigate('/admin/login');
    } catch (error) {
      console.error('Błąd podczas wylogowywania:', error);
    }
  };
  
  // Jeśli użytkownik nie jest zalogowany, przekieruj do strony logowania
  if (!isAuthenticated) {
    return <Navigate to="/admin/login" />;
  }
  
  // Helper do sprawdzania aktywnej ścieżki
  const isActive = (path) => {
    return location.pathname === path;
  };
  
  return (
    <AdminContainer>
      <Sidebar>
        <SidebarTitle>Panel administracyjny</SidebarTitle>
        <Navigation>
          <NavList>
            <NavItem>
              <NavLink to="/admin" active={isActive('/admin') ? 1 : 0}>
                <NavIcon><FaHome /></NavIcon>
                Dashboard
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/admin/products" active={isActive('/admin/products') ? 1 : 0}>
                <NavIcon><FaList /></NavIcon>
                Lista produktów
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/admin/products/new" active={isActive('/admin/products/new') ? 1 : 0}>
                <NavIcon><FaBriefcase /></NavIcon>
                Dodaj produkt
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink as="button" onClick={handleLogout} style={{ width: '100%', border: 'none', textAlign: 'left', cursor: 'pointer', background: 'none' }}>
                <NavIcon><FaSignOutAlt /></NavIcon>
                Wyloguj się
              </NavLink>
            </NavItem>
          </NavList>
        </Navigation>
      </Sidebar>
      
      <Content>
        <Routes>
          <Route path="/" element={
            <>
              <PageTitle>Dashboard</PageTitle>
              <p>Witaj w panelu administracyjnym!</p>
              <p>Wybierz opcję z menu, aby zarządzać produktami.</p>
            </>
          } />
          <Route path="/products" element={
            <>
              <PageTitle>Lista produktów</PageTitle>
              <ProductList />
            </>
          } />
          <Route path="/products/new" element={
            <>
              <PageTitle>Dodaj nowy produkt</PageTitle>
              <ProductForm />
            </>
          } />
          <Route path="/products/edit/:id" element={
            <>
              <PageTitle>Edytuj produkt</PageTitle>
              <ProductForm isEditing />
            </>
          } />
          <Route path="*" element={<Navigate to="/admin" />} />
        </Routes>
      </Content>
    </AdminContainer>
  );
};

export default AdminPanel;