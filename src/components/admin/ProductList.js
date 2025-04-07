import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { getProducts, deleteProduct } from '../../firebase/firebaseService';
import { FaEdit, FaTrash, FaPlus, FaFilter, FaSearch } from 'react-icons/fa';

const ListContainer = styled.div`
  background-color: ${props => props.theme.colors.background};
  border-radius: ${props => props.theme.borderRadius.medium};
  box-shadow: ${props => props.theme.shadows.small};
  padding: ${props => props.theme.spacing.l};
`;

const Toolbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${props => props.theme.spacing.l};
  flex-wrap: wrap;
  gap: ${props => props.theme.spacing.m};
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  background-color: ${props => props.theme.colors.lightBackground};
  border-radius: ${props => props.theme.borderRadius.medium};
  padding: ${props => props.theme.spacing.s} ${props => props.theme.spacing.m};
  width: 300px;
  max-width: 100%;
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    width: 100%;
  }
`;

const SearchIcon = styled.span`
  color: ${props => props.theme.colors.lightText};
  margin-right: ${props => props.theme.spacing.s};
`;

const SearchInput = styled.input`
  border: none;
  background: none;
  flex: 1;
  font-size: ${props => props.theme.fontSizes.medium};
  
  &:focus {
    outline: none;
  }
`;

const FilterGroup = styled.div`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.s};
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    width: 100%;
  }
`;

const FilterLabel = styled.label`
  display: flex;
  align-items: center;
  color: ${props => props.theme.colors.text};
`;

const FilterIcon = styled.span`
  margin-right: ${props => props.theme.spacing.xs};
`;

const FilterSelect = styled.select`
  padding: ${props => props.theme.spacing.s} ${props => props.theme.spacing.m};
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: ${props => props.theme.borderRadius.medium};
  font-size: ${props => props.theme.fontSizes.medium};
  
  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary};
  }
`;

const AddButton = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${props => props.theme.spacing.s};
  padding: ${props => props.theme.spacing.s} ${props => props.theme.spacing.m};
  background-color: ${props => props.theme.colors.primary};
  color: white;
  border-radius: ${props => props.theme.borderRadius.medium};
  font-weight: bold;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: ${props => props.theme.colors.accent};
  }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHead = styled.thead`
  background-color: ${props => props.theme.colors.lightBackground};
  
  th {
    padding: ${props => props.theme.spacing.m};
    text-align: left;
    font-weight: bold;
    color: ${props => props.theme.colors.text};
    border-bottom: 2px solid ${props => props.theme.colors.border};
  }
`;

const TableBody = styled.tbody`
  tr {
    border-bottom: 1px solid ${props => props.theme.colors.border};
    
    &:hover {
      background-color: ${props => props.theme.colors.lightBackground};
    }
  }
  
  td {
    padding: ${props => props.theme.spacing.m};
    color: ${props => props.theme.colors.text};
  }
`;

const ImageCell = styled.td`
  width: 80px;
  
  img {
    width: 60px;
    height: 60px;
    object-fit: cover;
    border-radius: ${props => props.theme.borderRadius.small};
  }
`;

const TitleCell = styled.td`
  font-weight: bold;
`;

const CategoryCell = styled.td`
  text-transform: capitalize;
`;

const ActionsCell = styled.td`
  display: flex;
  gap: ${props => props.theme.spacing.s};
`;

const ActionButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: none;
  background-color: ${props => props.theme.colors.lightBackground};
  color: ${props => props.color || props.theme.colors.text};
  cursor: pointer;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: ${props => props.theme.colors.border};
  }
`;

const EmptyState = styled.div`
  text-align: center;
  padding: ${props => props.theme.spacing.xl};
  color: ${props => props.theme.colors.lightText};
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

const Error = styled.div`
  text-align: center;
  padding: ${props => props.theme.spacing.xl};
  color: ${props => props.theme.colors.error};
  background-color: #fdecea;
  border-radius: ${props => props.theme.borderRadius.medium};
  margin-bottom: ${props => props.theme.spacing.l};
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background-color: ${props => props.theme.colors.background};
  padding: ${props => props.theme.spacing.l};
  border-radius: ${props => props.theme.borderRadius.medium};
  box-shadow: ${props => props.theme.shadows.large};
  width: 400px;
  max-width: calc(100% - 32px);
`;

const ModalTitle = styled.h2`
  font-size: ${props => props.theme.fontSizes.large};
  margin-bottom: ${props => props.theme.spacing.m};
  color: ${props => props.theme.colors.text};
`;

const ModalText = styled.p`
  margin-bottom: ${props => props.theme.spacing.l};
  color: ${props => props.theme.colors.text};
`;

const ModalButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: ${props => props.theme.spacing.m};
`;

const ModalButton = styled.button`
  padding: ${props => props.theme.spacing.s} ${props => props.theme.spacing.m};
  border-radius: ${props => props.theme.borderRadius.medium};
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;
  
  &.cancel {
    background-color: ${props => props.theme.colors.lightBackground};
    color: ${props => props.theme.colors.text};
    border: 1px solid ${props => props.theme.colors.border};
    
    &:hover {
      background-color: ${props => props.theme.colors.border};
    }
  }
  
  &.delete {
    background-color: ${props => props.theme.colors.error};
    color: white;
    border: none;
    
    &:hover {
      background-color: #b71c1c;
    }
  }
`;

const getCategoryLabel = (category) => {
  const categories = {
    'torebki': 'Torebki',
    'paski': 'Paski',
    'plecaki': 'Plecaki',
    'aleksandra-sopel': 'AS | Aleksandra Sopel'
  };
  
  return categories[category] || category;
};

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [deleteModal, setDeleteModal] = useState({
    isOpen: false,
    productId: null,
    productTitle: '',
    imageUrl: ''
  });
  
  // Pobierz produkty
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError(null);
        const fetchedProducts = await getProducts();
        setProducts(fetchedProducts);
        setFilteredProducts(fetchedProducts);
      } catch (err) {
        console.error('Błąd podczas pobierania produktów:', err);
        setError('Wystąpił błąd podczas ładowania produktów. Spróbuj ponownie później.');
      } finally {
        setLoading(false);
      }
    };
    
    fetchProducts();
  }, []);
  
  // Filtrowanie produktów
  useEffect(() => {
    let result = [...products];
    
    // Filtrowanie po kategorii
    if (categoryFilter !== 'all') {
      result = result.filter(product => product.category === categoryFilter);
    }
    
    // Filtrowanie po wyszukiwanym tekście
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      result = result.filter(product => 
        product.title.toLowerCase().includes(term) ||
        (product.description && product.description.toLowerCase().includes(term))
      );
    }
    
    setFilteredProducts(result);
  }, [products, categoryFilter, searchTerm]);
  
  // Obsługa wyszukiwania
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };
  
  // Obsługa filtrowania kategorii
  const handleCategoryChange = (e) => {
    setCategoryFilter(e.target.value);
  };
  
  // Otwórz modal potwierdzenia usunięcia
  const handleDeleteClick = (product) => {
    setDeleteModal({
      isOpen: true,
      productId: product.id,
      productTitle: product.title,
      imageUrl: product.imageUrl
    });
  };
  
  // Zamknij modal
  const closeModal = () => {
    setDeleteModal({
      isOpen: false,
      productId: null,
      productTitle: '',
      imageUrl: ''
    });
  };
  
  // Obsługa usuwania produktu
  const handleDelete = async () => {
    try {
      await deleteProduct(deleteModal.productId, deleteModal.imageUrl);
      
      // Usuń produkt z lokalnego stanu
      setProducts(products.filter(product => product.id !== deleteModal.productId));
      
      // Zamknij modal
      closeModal();
    } catch (err) {
      console.error('Błąd podczas usuwania produktu:', err);
      setError('Wystąpił błąd podczas usuwania produktu');
    }
  };
  
  return (
    <ListContainer>
      <Toolbar>
        <SearchBar>
          <SearchIcon>
            <FaSearch />
          </SearchIcon>
          <SearchInput 
            type="text" 
            placeholder="Szukaj produktów..." 
            value={searchTerm}
            onChange={handleSearch}
          />
        </SearchBar>
        
        <FilterGroup>
          <FilterLabel>
            <FilterIcon>
              <FaFilter />
            </FilterIcon>
            Kategoria:
          </FilterLabel>
          <FilterSelect value={categoryFilter} onChange={handleCategoryChange}>
            <option value="all">Wszystkie</option>
            <option value="torebki">Torebki</option>
            <option value="paski">Paski</option>
            <option value="plecaki">Plecaki</option>
            <option value="aleksandra-sopel">AS | Aleksandra Sopel</option>
          </FilterSelect>
        </FilterGroup>
        
        <AddButton to="/admin/products/new">
          <FaPlus />
          Dodaj produkt
        </AddButton>
      </Toolbar>
      
      {error && <Error>{error}</Error>}
      
      {loading ? (
        <LoadingSpinner />
      ) : filteredProducts.length > 0 ? (
        <Table>
          <TableHead>
            <tr>
              <th>Zdjęcie</th>
              <th>Tytuł</th>
              <th>Kategoria</th>
              <th>Wymiary</th>
              <th>Akcje</th>
            </tr>
          </TableHead>
          <TableBody>
            {filteredProducts.map(product => (
              <tr key={product.id}>
                <ImageCell>
                  {product.imageUrl ? (
                    <img src={product.imageUrl} alt={product.title} />
                  ) : (
                    <div>Brak zdjęcia</div>
                  )}
                </ImageCell>
                <TitleCell>{product.title}</TitleCell>
                <CategoryCell>{getCategoryLabel(product.category)}</CategoryCell>
                <td>
                  {product.width && product.height ? (
                    `${product.width} × ${product.height} cm`
                  ) : product.width ? (
                    `Szerokość: ${product.width} cm`
                  ) : product.height ? (
                    `Wysokość: ${product.height} cm`
                  ) : (
                    'Brak danych'
                  )}
                </td>
                <ActionsCell>
                  <Link to={`/admin/products/edit/${product.id}`}>
                    <ActionButton title="Edytuj">
                      <FaEdit />
                    </ActionButton>
                  </Link>
                  <ActionButton 
                    title="Usuń" 
                    color={props => props.theme.colors.error}
                    onClick={() => handleDeleteClick(product)}
                  >
                    <FaTrash />
                  </ActionButton>
                </ActionsCell>
              </tr>
            ))}
          </TableBody>
        </Table>
      ) : (
        <EmptyState>
          Nie znaleziono produktów spełniających kryteria wyszukiwania.
        </EmptyState>
      )}
      
      {/* Modal potwierdzenia usunięcia */}
      {deleteModal.isOpen && (
        <Modal>
          <ModalContent>
            <ModalTitle>Potwierdzenie usunięcia</ModalTitle>
            <ModalText>
              Czy na pewno chcesz usunąć produkt "{deleteModal.productTitle}"? 
              Tej operacji nie można cofnąć.
            </ModalText>
            <ModalButtons>
              <ModalButton className="cancel" onClick={closeModal}>
                Anuluj
              </ModalButton>
              <ModalButton className="delete" onClick={handleDelete}>
                Usuń
              </ModalButton>
            </ModalButtons>
          </ModalContent>
        </Modal>
      )}
    </ListContainer>
  );
};

export default ProductList;