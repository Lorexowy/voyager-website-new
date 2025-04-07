import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background-color: ${props => props.theme.colors.background};
  border-radius: ${props => props.theme.borderRadius.medium};
  box-shadow: ${props => props.theme.shadows.small};
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: ${props => props.theme.shadows.medium};
  }
`;

const ImageContainer = styled.div`
  position: relative;
  overflow: hidden;
  height: 0;
  padding-top: 100%; // Proporcje 1:1 (kwadrat)
`;

const ProductImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
  
  ${Card}:hover & {
    transform: scale(1.05);
  }
`;

const ProductInfo = styled.div`
  padding: ${props => props.theme.spacing.m};
`;

const ProductTitle = styled.h3`
  color: ${props => props.theme.colors.text};
  font-size: ${props => props.theme.fontSizes.large};
  margin-bottom: ${props => props.theme.spacing.xs};
`;

const ProductDescription = styled.p`
  color: ${props => props.theme.colors.lightText};
  font-size: ${props => props.theme.fontSizes.medium};
  margin-bottom: ${props => props.theme.spacing.s};
`;

const ProductDimensions = styled.div`
  display: flex;
  gap: ${props => props.theme.spacing.m};
  margin-top: ${props => props.theme.spacing.s};
  color: ${props => props.theme.colors.text};
  font-size: ${props => props.theme.fontSizes.small};
`;

const DimensionItem = styled.div`
  display: flex;
  align-items: center;
`;

const DimensionLabel = styled.span`
  font-weight: bold;
  margin-right: ${props => props.theme.spacing.xs};
`;

const ProductCard = ({ product }) => {
  const { title, description, imageUrl, width, height } = product;
  
  return (
    <Card>
      <ImageContainer>
        <ProductImage src={imageUrl} alt={title} />
      </ImageContainer>
      <ProductInfo>
        <ProductTitle>{title}</ProductTitle>
        {description && <ProductDescription>{description}</ProductDescription>}
        <ProductDimensions>
          {width && (
            <DimensionItem>
              <DimensionLabel>Szerokość:</DimensionLabel> {width} cm
            </DimensionItem>
          )}
          {height && (
            <DimensionItem>
              <DimensionLabel>Wysokość:</DimensionLabel> {height} cm
            </DimensionItem>
          )}
        </ProductDimensions>
      </ProductInfo>
    </Card>
  );
};

export default ProductCard;