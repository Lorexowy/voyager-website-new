import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ProductCard from './ProductCard';
import { getProducts } from '../../firebase/firebaseService';

const GridContainer = styled.div`
  max-width: ${props => props.theme.container.maxWidth};
  margin: 0 auto;
  padding: ${props => props.theme.spacing.m};
`;

const Title = styled.h2`
  color: ${props => props.theme.colors.text};
  font-size: ${props => props.theme.fontSizes.xxlarge};
  margin-bottom: ${props => props.theme.spacing.l};
  text-align: center;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: ${props => props.theme.spacing.l};
`;

const LoadingSpinner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${props => props.theme.spacing.xxl};
  
  &:after {
    content: '';
    width: 40px;
    height: 40px;
    border: 5px solid ${props => props.theme.colors.lightBackground};
    border-top-color: ${props => props.theme.colors.primary};
    border-radius: 50%;
    animation: spin 1s linear infinite;
  }
  
  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

const EmptyState = styled.div`
  text-align: center;
  padding: ${props => props.theme.spacing.xxl};
  color: ${props => props.theme.colors.lightText};
`;

const Error = styled.div`
  text-align: center;
  padding: ${props => props.theme.spacing.xl};
  color: ${props => props.theme.colors.error};
  background-color: #fdecea;
  border-radius: ${props => props.theme.borderRadius.medium};
  margin-bottom: ${props => props.theme.spacing.l};
`;

const ProductsGrid = ({ category, title }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError(null);
        const fetchedProducts = await getProducts(category);
        setProducts(fetchedProducts);
      } catch (err) {
        console.error('Błąd podczas pobierania produktów:', err);
        setError('Wystąpił błąd podczas ładowania produktów. Spróbuj ponownie później.');
      } finally {
        setLoading(false);
      }
    };
    
    fetchProducts();
  }, [category]);
  
  return (
    <GridContainer>
      <Title>{title}</Title>
      
      {error && <Error>{error}</Error>}
      
      {loading ? (
        <LoadingSpinner />
      ) : products.length > 0 ? (
        <Grid>
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </Grid>
      ) : (
        <EmptyState>
          Brak dostępnych produktów w tej kategorii.
        </EmptyState>
      )}
    </GridContainer>
  );
};

export default ProductsGrid;