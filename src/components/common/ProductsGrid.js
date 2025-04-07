import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ProductCard from './ProductCard';
import { getProducts } from '../../firebase/firebaseService';
import { FaSpinner } from 'react-icons/fa';

const GridContainer = styled.div`
  max-width: ${props => props.theme.container.maxWidth};
  margin: 0 auto;
  padding: ${props => props.theme.spacing.m};
`;

const Title = styled.h2`
  font-family: ${props => props.theme.typography.headingFont};
  font-size: ${props => props.theme.fontSizes.xxlarge};
  color: ${props => props.theme.colors.text};
  text-align: center;
  margin-bottom: ${props => props.theme.spacing.xl};
  position: relative;
  display: ${props => props.hideTitle ? 'none' : 'block'};
  
  &:after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 2px;
    background-color: ${props => props.theme.colors.primary};
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: ${props => props.theme.spacing.xl};
`;

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${props => props.theme.spacing.xxl} 0;
  min-height: 300px;
`;

const Spinner = styled(FaSpinner)`
  color: ${props => props.theme.colors.primary};
  font-size: 2rem;
  animation: spin 1s linear infinite;
  
  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

const EmptyState = styled.div`
  text-align: center;
  padding: ${props => props.theme.spacing.xxl} 0;
  color: ${props => props.theme.colors.lightText};
  min-height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const EmptyStateText = styled.p`
  font-family: ${props => props.theme.typography.bodyFont};
  font-size: ${props => props.theme.fontSizes.large};
  margin-bottom: ${props => props.theme.spacing.l};
`;

const EmptyStateSubtext = styled.p`
  font-family: ${props => props.theme.typography.bodyFont};
  font-size: ${props => props.theme.fontSizes.medium};
  color: ${props => props.theme.colors.lightText};
  max-width: 500px;
`;

const ErrorContainer = styled.div`
  text-align: center;
  padding: ${props => props.theme.spacing.xl};
  color: ${props => props.theme.colors.error};
  background-color: #fdecea;
  border-radius: ${props => props.theme.borderRadius.medium};
  margin-bottom: ${props => props.theme.spacing.l};
`;

const FiltersContainer = styled.div`
  display: flex;
  justify-content: ${props => props.alignment || 'flex-end'};
  margin-bottom: ${props => props.theme.spacing.l};
  flex-wrap: wrap;
  gap: ${props => props.theme.spacing.m};
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    justify-content: center;
  }
`;

const FilterButton = styled.button`
  background: ${props => props.active ? props.theme.colors.primary : 'transparent'};
  color: ${props => props.active ? 'white' : props.theme.colors.text};
  border: 1px solid ${props => props.active ? props.theme.colors.primary : props.theme.colors.border};
  padding: ${props => props.theme.spacing.xs} ${props => props.theme.spacing.m};
  font-family: ${props => props.theme.typography.bodyFont};
  font-size: ${props => props.theme.fontSizes.small};
  cursor: pointer;
  transition: ${props => props.theme.transitions.short};
  border-radius: ${props => props.theme.borderRadius.medium};
  
  &:hover {
    background-color: ${props => props.active ? props.theme.colors.accent : props.theme.colors.lightBackground};
  }
`;

const ViewMore = styled.div`
  text-align: center;
  margin-top: ${props => props.theme.spacing.xxl};
`;

const ViewMoreButton = styled.button`
  background-color: transparent;
  color: ${props => props.theme.colors.text};
  border: 2px solid ${props => props.theme.colors.primary};
  padding: ${props => props.theme.spacing.m} ${props => props.theme.spacing.xxl};
  font-family: ${props => props.theme.typography.bodyFont};
  font-size: ${props => props.theme.fontSizes.small};
  font-weight: ${props => props.theme.fontWeights.medium};
  text-transform: uppercase;
  letter-spacing: 2px;
  cursor: pointer;
  transition: ${props => props.theme.transitions.medium};
  
  &:hover {
    background-color: ${props => props.theme.colors.primary};
    color: white;
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    border-color: ${props => props.theme.colors.border};
    
    &:hover {
      background-color: transparent;
      color: ${props => props.theme.colors.text};
    }
  }
`;

const ProductsGrid = ({ 
  category = '', 
  title = 'Produkty', 
  hideTitle = false,
  limit = 8,
  showFilters = false,
  filtersAlignment = 'flex-end'
}) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [visibleProducts, setVisibleProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');
  const [canLoadMore, setCanLoadMore] = useState(false);
  
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError(null);
        const fetchedProducts = await getProducts(category);
        setProducts(fetchedProducts);
        setFilteredProducts(fetchedProducts);
        
        // Ustaw początkową ilość widocznych produktów
        setVisibleProducts(fetchedProducts.slice(0, limit));
        setCanLoadMore(fetchedProducts.length > limit);
      } catch (err) {
        console.error('Błąd podczas pobierania produktów:', err);
        setError('Wystąpił błąd podczas ładowania produktów. Spróbuj ponownie później.');
      } finally {
        setLoading(false);
      }
    };
    
    fetchProducts();
  }, [category, limit]);
  
  // Obsługa filtrowania
  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
    
    let result;
    if (filter === 'all') {
      result = products;
    } else {
      result = products.filter(product => product.category === filter);
    }
    
    setFilteredProducts(result);
    setVisibleProducts(result.slice(0, limit));
    setCanLoadMore(result.length > limit);
  };
  
  // Obsługa przycisku "Pokaż więcej"
  const handleLoadMore = () => {
    const currentlyVisible = visibleProducts.length;
    const nextBatch = filteredProducts.slice(currentlyVisible, currentlyVisible + limit);
    setVisibleProducts([...visibleProducts, ...nextBatch]);
    setCanLoadMore(currentlyVisible + nextBatch.length < filteredProducts.length);
  };
  
  return (
    <GridContainer>
      {!hideTitle && <Title>{title}</Title>}
      
      {error && (
        <ErrorContainer>{error}</ErrorContainer>
      )}
      
      {showFilters && !loading && products.length > 0 && (
        <FiltersContainer alignment={filtersAlignment}>
          <FilterButton 
            active={activeFilter === 'all'} 
            onClick={() => handleFilterChange('all')}
          >
            Wszystkie
          </FilterButton>
          <FilterButton 
            active={activeFilter === 'torebki'} 
            onClick={() => handleFilterChange('torebki')}
          >
            Torebki
          </FilterButton>
          <FilterButton 
            active={activeFilter === 'paski'} 
            onClick={() => handleFilterChange('paski')}
          >
            Paski
          </FilterButton>
          <FilterButton 
            active={activeFilter === 'plecaki'} 
            onClick={() => handleFilterChange('plecaki')}
          >
            Plecaki
          </FilterButton>
          <FilterButton 
            active={activeFilter === 'aleksandra-sopel'} 
            onClick={() => handleFilterChange('aleksandra-sopel')}
          >
            AS
          </FilterButton>
        </FiltersContainer>
      )}
      
      {loading ? (
        <LoadingContainer>
          <Spinner />
        </LoadingContainer>
      ) : visibleProducts.length > 0 ? (
        <>
          <Grid>
            {visibleProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </Grid>
          
          {canLoadMore && (
            <ViewMore>
              <ViewMoreButton onClick={handleLoadMore}>
                Pokaż więcej
              </ViewMoreButton>
            </ViewMore>
          )}
        </>
      ) : (
        <EmptyState>
          <EmptyStateText>Brak produktów</EmptyStateText>
          <EmptyStateSubtext>
            Aktualnie nie ma dostępnych produktów w tej kategorii.
            Zajrzyj tutaj później lub sprawdź inne kategorie.
          </EmptyStateSubtext>
        </EmptyState>
      )}
    </GridContainer>
  );
};

export default ProductsGrid;