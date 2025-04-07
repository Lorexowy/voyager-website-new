import React from 'react';
import styled from 'styled-components';
import { FaRuler } from 'react-icons/fa';

const Card = styled.div`
  background-color: ${props => props.theme.colors.background};
  border-radius: ${props => props.theme.borderRadius.medium};
  overflow: hidden;
  position: relative;
  transition: ${props => props.theme.transitions.medium};
  height: 100%;
  display: flex;
  flex-direction: column;
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: ${props => props.theme.shadows.medium};
  }
`;

const ImageContainer = styled.div`
  position: relative;
  overflow: hidden;
  padding-top: 125%; // Proporcje 4:5
`;

const ProductImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
  
  ${Card}:hover & {
    transform: scale(1.05);
  }
`;

const QuickView = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: ${props => props.theme.spacing.m};
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  text-align: center;
  transform: translateY(100%);
  transition: transform 0.3s ease;
  
  ${Card}:hover & {
    transform: translateY(0);
  }
`;

const QuickViewButton = styled.button`
  background: none;
  border: 1px solid white;
  color: white;
  padding: ${props => props.theme.spacing.s} ${props => props.theme.spacing.m};
  font-size: ${props => props.theme.fontSizes.small};
  cursor: pointer;
  transition: ${props => props.theme.transitions.short};
  text-transform: uppercase;
  letter-spacing: 1px;
  
  &:hover {
    background-color: white;
    color: ${props => props.theme.colors.text};
  }
`;

const ProductInfo = styled.div`
  padding: ${props => props.theme.spacing.m};
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const ProductTitle = styled.h3`
  font-family: ${props => props.theme.typography.headingFont};
  font-size: ${props => props.theme.fontSizes.medium};
  color: ${props => props.theme.colors.text};
  margin: 0 0 ${props => props.theme.spacing.xs};
  transition: ${props => props.theme.transitions.short};
  
  ${Card}:hover & {
    color: ${props => props.theme.colors.primary};
  }
`;

const ProductDescription = styled.p`
  font-family: ${props => props.theme.typography.bodyFont};
  font-size: ${props => props.theme.fontSizes.small};
  color: ${props => props.theme.colors.lightText};
  margin: 0 0 ${props => props.theme.spacing.m};
  line-height: ${props => props.theme.typography.lineHeight.normal};
  
  // Ograniczenie wyświetlania do 2 linii tekstu
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ProductFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
  padding-top: ${props => props.theme.spacing.s};
  border-top: 1px solid ${props => props.theme.colors.border};
`;

const ProductDimensions = styled.div`
  display: flex;
  align-items: center;
  color: ${props => props.theme.colors.lightText};
  font-size: ${props => props.theme.fontSizes.small};
`;

const DimensionIcon = styled.span`
  margin-right: ${props => props.theme.spacing.xs};
  display: flex;
  align-items: center;
`;

const ProductCategory = styled.div`
  position: absolute;
  top: ${props => props.theme.spacing.s};
  left: ${props => props.theme.spacing.s};
  background-color: ${props => props.theme.colors.primary};
  color: white;
  font-size: ${props => props.theme.fontSizes.xsmall};
  padding: ${props => props.theme.spacing.xxs} ${props => props.theme.spacing.xs};
  border-radius: ${props => props.theme.borderRadius.small};
  text-transform: uppercase;
  letter-spacing: 1px;
  z-index: 1;
`;

const getCategoryLabel = (category) => {
  const categories = {
    'torebki': 'Torebki',
    'paski': 'Paski',
    'plecaki': 'Plecaki',
    'aleksandra-sopel': 'AS'
  };
  
  return categories[category] || category;
};

const formatDimensions = (width, height) => {
  if (width && height) {
    return `${width} × ${height} cm`;
  } else if (width) {
    return `szer. ${width} cm`;
  } else if (height) {
    return `wys. ${height} cm`;
  }
  return null;
};

const ProductCard = ({ product }) => {
  const { title, description, imageUrl, width, height, category } = product;
  const dimensions = formatDimensions(width, height);
  
  const handleQuickView = (e) => {
    e.preventDefault();
    // Tutaj będzie funkcja do szybkiego podglądu produktu
    alert(`Szybki podgląd produktu: ${title}`);
  };
  
  return (
    <Card>
      {category && (
        <ProductCategory>{getCategoryLabel(category)}</ProductCategory>
      )}
      
      <ImageContainer>
        <ProductImage src={imageUrl || 'https://via.placeholder.com/400x500?text=Brak+zdjęcia'} alt={title} />
        <QuickView>
          <QuickViewButton onClick={handleQuickView}>
            Szybki podgląd
          </QuickViewButton>
        </QuickView>
      </ImageContainer>
      
      <ProductInfo>
        <ProductTitle>{title}</ProductTitle>
        {description && <ProductDescription>{description}</ProductDescription>}
        
        <ProductFooter>
          {dimensions && (
            <ProductDimensions>
              <DimensionIcon><FaRuler size={12} /></DimensionIcon>
              {dimensions}
            </ProductDimensions>
          )}
        </ProductFooter>
      </ProductInfo>
    </Card>
  );
};

export default ProductCard;