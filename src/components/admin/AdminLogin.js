import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { loginAdmin } from '../../firebase/firebaseService';

const LoginContainer = styled.div`
  max-width: 500px;
  margin: 3rem auto;
  padding: ${props => props.theme.spacing.xl};
  background-color: ${props => props.theme.colors.background};
  border-radius: ${props => props.theme.borderRadius.medium};
  box-shadow: ${props => props.theme.shadows.medium};
`;

const Title = styled.h1`
  font-size: ${props => props.theme.fontSizes.xlarge};
  color: ${props => props.theme.colors.text};
  margin-bottom: ${props => props.theme.spacing.l};
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const FormGroup = styled.div`
  margin-bottom: ${props => props.theme.spacing.m};
`;

const Label = styled.label`
  display: block;
  margin-bottom: ${props => props.theme.spacing.xs};
  color: ${props => props.theme.colors.text};
  font-weight: bold;
`;

const Input = styled.input`
  width: 100%;
  padding: ${props => props.theme.spacing.m};
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: ${props => props.theme.borderRadius.medium};
  font-size: ${props => props.theme.fontSizes.medium};
  
  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary};
    box-shadow: 0 0 0 2px ${props => props.theme.colors.primary}33;
  }
`;

const Button = styled.button`
  padding: ${props => props.theme.spacing.m};
  background-color: ${props => props.theme.colors.primary};
  color: white;
  border: none;
  border-radius: ${props => props.theme.borderRadius.medium};
  font-size: ${props => props.theme.fontSizes.medium};
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: ${props => props.theme.colors.accent};
  }
  
  &:disabled {
    background-color: ${props => props.theme.colors.lightText};
    cursor: not-allowed;
  }
`;

const ErrorMessage = styled.div`
  color: ${props => props.theme.colors.error};
  background-color: #fdecea;
  padding: ${props => props.theme.spacing.m};
  border-radius: ${props => props.theme.borderRadius.medium};
  margin-bottom: ${props => props.theme.spacing.m};
`;

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!email || !password) {
      setError('Wprowadź email i hasło');
      return;
    }
    
    try {
      setError('');
      setLoading(true);
      await loginAdmin(email, password);
      navigate('/admin');
    } catch (err) {
      console.error('Błąd logowania:', err);
      setError('Nieprawidłowy email lub hasło');
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <LoginContainer>
      <Title>Panel administracyjny</Title>
      
      {error && <ErrorMessage>{error}</ErrorMessage>}
      
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </FormGroup>
        
        <FormGroup>
          <Label htmlFor="password">Hasło</Label>
          <Input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </FormGroup>
        
        <Button type="submit" disabled={loading}>
          {loading ? 'Logowanie...' : 'Zaloguj się'}
        </Button>
      </Form>
    </LoginContainer>
  );
};

export default AdminLogin;