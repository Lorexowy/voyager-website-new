import React from 'react';
import styled from 'styled-components';
import ProductsGrid from '../common/ProductsGrid';

const PageContainer = styled.div`
  max-width: ${props => props.theme.container.maxWidth};
  margin: 0 auto;
  padding: ${props => props.theme.spacing.l} ${props => props.theme.spacing.m};
`;

const PageHeader = styled.div`
  text-align: center;
  margin-bottom: ${props => props.theme.spacing.xl};
`;

const PageTitle = styled.h1`
  font-size: ${props => props.theme.fontSizes.xxlarge};
  color: ${props => props.theme.colors.text};
  margin-bottom: ${props => props.theme.spacing.m};
`;

const PageDescription = styled.p`
  color: ${props => props.theme.colors.lightText};
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
`;

const Handbags = () => {
  return (
    <PageContainer>
      <PageHeader>
        <PageTitle>Torebki</PageTitle>
        <PageDescription>
          Nasza kolekcja torebek łączy elegancję z funkcjonalnością. Każda torebka wykonana jest ręcznie 
          z najwyższej jakości skóry naturalnej. Oferujemy różnorodne modele dopasowane do różnych potrzeb 
          i stylów - od minimalistycznych kopertówek, przez klasyczne shopperki, po pojemne torby na ramię.
        </PageDescription>
      </PageHeader>
      
      <ProductsGrid 
        title="Nasze torebki" 
        category="torebki" 
      />
    </PageContainer>
  );
};

export default Handbags;