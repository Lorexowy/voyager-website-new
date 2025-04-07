import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { addProduct, updateProduct, getProducts } from '../../firebase/firebaseService';

const FormContainer = styled.div`
  background-color: ${props => props.theme.colors.background};
  border-radius: ${props => props.theme.borderRadius.medium};
  box-shadow: ${props => props.theme.shadows.small};
  padding: ${props => props.theme.spacing.l};
  max-width: 800px;
  margin: 0 auto;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.m};
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-weight: bold;
  margin-bottom: ${props => props.theme.spacing.xs};
  color: ${props => props.theme.colors.text};
`;

const Input = styled.input`
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

const Select = styled.select`
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

const TextArea = styled.textarea`
  padding: ${props => props.theme.spacing.m};
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: ${props => props.theme.borderRadius.medium};
  font-size: ${props => props.theme.fontSizes.medium};
  min-height: 100px;
  resize: vertical;
  
  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary};
    box-shadow: 0 0 0 2px ${props => props.theme.colors.primary}33;
  }
`;

const FileInput = styled.div`
  position: relative;
  
  input[type="file"] {
    display: none;
  }
`;

const FileLabel = styled.label`
  display: inline-block;
  padding: ${props => props.theme.spacing.m};
  background-color: ${props => props.theme.colors.lightBackground};
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: ${props => props.theme.borderRadius.medium};
  font-size: ${props => props.theme.fontSizes.medium};
  cursor: pointer;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: ${props => props.theme.colors.border};
  }
`;

const FileName = styled.div`
  margin-top: ${props => props.theme.spacing.s};
  font-size: ${props => props.theme.fontSizes.small};
  color: ${props => props.theme.colors.lightText};
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

const CancelButton = styled.button`
  padding: ${props => props.theme.spacing.m};
  background-color: ${props => props.theme.colors.lightBackground};
  color: ${props => props.theme.colors.text};
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: ${props => props.theme.borderRadius.medium};
  font-size: ${props => props.theme.fontSizes.medium};
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: ${props => props.theme.colors.border};
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: ${props => props.theme.spacing.m};
  margin-top: ${props => props.theme.spacing.m};
`;

const ErrorMessage = styled.div`
  color: ${props => props.theme.colors.error};
  background-color: #fdecea;
  padding: ${props => props.theme.spacing.m};
  border-radius: ${props => props.theme.borderRadius.medium};
  margin-bottom: ${props => props.theme.spacing.m};
`;

const SuccessMessage = styled.div`
  color: ${props => props.theme.colors.success};
  background-color: #e8f5e9;
  padding: ${props => props.theme.spacing.m};
  border-radius: ${props => props.theme.borderRadius.medium};
  margin-bottom: ${props => props.theme.spacing.m};
`;

const ImagePreview = styled.div`
  margin-top: ${props => props.theme.spacing.m};
  
  img {
    max-width: 200px;
    max-height: 200px;
    border-radius: ${props => props.theme.borderRadius.medium};
    border: 1px solid ${props => props.theme.colors.border};
  }
`;

const DimensionsGroup = styled.div`
  display: flex;
  gap: ${props => props.theme.spacing.m};
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    flex-direction: column;
  }
`;

const ProductForm = ({ isEditing = false }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: 'torebki',
    width: '',
    height: '',
    imageUrl: ''
  });
  
  const [imageFile, setImageFile] = useState(null);
  const [fileName, setFileName] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  
  // Jeśli edytujemy produkt, pobierz jego dane
  useEffect(() => {
    const fetchProduct = async () => {
      if (isEditing && id) {
        try {
          setLoading(true);
          const products = await getProducts();
          const product = products.find(p => p.id === id);
          
          if (product) {
            setFormData({
              title: product.title || '',
              description: product.description || '',
              category: product.category || 'torebki',
              width: product.width || '',
              height: product.height || '',
              imageUrl: product.imageUrl || ''
            });
          } else {
            setError('Nie znaleziono produktu o podanym ID');
            navigate('/admin/products');
          }
        } catch (err) {
          console.error('Błąd podczas pobierania produktu:', err);
          setError('Wystąpił błąd podczas ładowania danych produktu');
        } finally {
          setLoading(false);
        }
      }
    };
    
    fetchProduct();
  }, [isEditing, id, navigate]);
  
  // Obsługa zmiany pól formularza
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  // Obsługa zmiany pliku obrazu
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      setFileName(file.name);
    }
  };
  
  // Obsługa wysłania formularza
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.title) {
      setError('Tytuł jest wymagany');
      return;
    }
    
    if (!formData.category) {
      setError('Kategoria jest wymagana');
      return;
    }
    
    try {
      setError('');
      setSuccess('');
      setLoading(true);
      
      if (isEditing) {
        // Aktualizacja produktu
        await updateProduct(id, formData, imageFile);
        setSuccess('Produkt został zaktualizowany');
      } else {
        // Dodawanie nowego produktu
        if (!imageFile) {
          setError('Zdjęcie produktu jest wymagane');
          setLoading(false);
          return;
        }
        
        await addProduct(formData, imageFile);
        setSuccess('Produkt został dodany');
        
        // Resetuj formularz po dodaniu
        setFormData({
          title: '',
          description: '',
          category: 'torebki',
          width: '',
          height: '',
          imageUrl: ''
        });
        setImageFile(null);
        setFileName('');
      }
    } catch (err) {
      console.error('Błąd podczas zapisywania produktu:', err);
      setError('Wystąpił błąd podczas zapisywania produktu');
    } finally {
      setLoading(false);
    }
  };
  
  // Obsługa anulowania formularza
  const handleCancel = () => {
    navigate('/admin/products');
  };
  
  return (
    <FormContainer>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      {success && <SuccessMessage>{success}</SuccessMessage>}
      
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="title">Tytuł produktu *</Label>
          <Input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </FormGroup>
        
        <FormGroup>
          <Label htmlFor="description">Opis produktu</Label>
          <TextArea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </FormGroup>
        
        <FormGroup>
          <Label htmlFor="category">Kategoria *</Label>
          <Select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
          >
            <option value="torebki">Torebki</option>
            <option value="paski">Paski</option>
            <option value="plecaki">Plecaki</option>
            <option value="aleksandra-sopel">AS | Aleksandra Sopel</option>
          </Select>
        </FormGroup>
        
        <DimensionsGroup>
          <FormGroup>
            <Label htmlFor="width">Szerokość (cm)</Label>
            <Input
              type="number"
              id="width"
              name="width"
              value={formData.width}
              onChange={handleChange}
              step="0.1"
              min="0"
            />
          </FormGroup>
          
          <FormGroup>
            <Label htmlFor="height">Wysokość (cm)</Label>
            <Input
              type="number"
              id="height"
              name="height"
              value={formData.height}
              onChange={handleChange}
              step="0.1"
              min="0"
            />
          </FormGroup>
        </DimensionsGroup>
        
        <FormGroup>
          <Label>Zdjęcie produktu {!isEditing && '*'}</Label>
          <FileInput>
            <FileLabel htmlFor="image">
              {isEditing ? 'Zmień zdjęcie' : 'Wybierz zdjęcie'}
            </FileLabel>
            <Input
              type="file"
              id="image"
              name="image"
              accept="image/*"
              onChange={handleFileChange}
              required={!isEditing}
            />
            {fileName && <FileName>Wybrano: {fileName}</FileName>}
          </FileInput>
          
          {/* Podgląd obrazu */}
          {(formData.imageUrl || imageFile) && (
            <ImagePreview>
              {formData.imageUrl && !imageFile && (
                <img src={formData.imageUrl} alt="Podgląd produktu" />
              )}
              {imageFile && (
                <img src={URL.createObjectURL(imageFile)} alt="Podgląd produktu" />
              )}
            </ImagePreview>
          )}
        </FormGroup>
        
        <ButtonGroup>
          <Button type="submit" disabled={loading}>
            {loading ? 'Przetwarzanie...' : (isEditing ? 'Zapisz zmiany' : 'Dodaj produkt')}
          </Button>
          <CancelButton type="button" onClick={handleCancel}>
            Anuluj
          </CancelButton>
        </ButtonGroup>
      </Form>
    </FormContainer>
  );
};

export default ProductForm;